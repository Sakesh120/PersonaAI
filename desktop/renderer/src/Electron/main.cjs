const { app, BrowserWindow, ipcMain, dialog, shell } = require("electron")
const path = require("path")
const fs = require("fs")

const FILES_DIR = path.join(app.getPath("userData"), "PersonaAI-Files")
const FILES_DB = path.join(FILES_DIR, "files.json")

function ensureStorage() {
  if (!fs.existsSync(FILES_DIR)) {
    fs.mkdirSync(FILES_DIR, { recursive: true })
  }

  if (!fs.existsSync(FILES_DB)) {
    fs.writeFileSync(FILES_DB, "[]", "utf8")
  }
}

function readFiles() {
  ensureStorage()

  try {
    return JSON.parse(fs.readFileSync(FILES_DB, "utf8"))
  } catch {
    return []
  }
}

function saveFileList(files) {
  ensureStorage()
  fs.writeFileSync(FILES_DB, JSON.stringify(files, null, 2), "utf8")
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 1100,
    minHeight: 700,

    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  })

  win.loadURL("http://localhost:5173")
}

/* ================================
   FILE STORAGE
================================ */

// Get saved files
ipcMain.handle("files:get", () => {
  return readFiles()
})

// Select and save files
ipcMain.handle("files:select", async () => {
  ensureStorage()

  const result = await dialog.showOpenDialog({
    properties: ["openFile", "multiSelections"],
  })

  if (result.canceled) {
    return []
  }

  const currentFiles = readFiles()
  const newFiles = []

  for (const sourcePath of result.filePaths) {
    try {
      const originalName = path.basename(sourcePath)

      const safeName = `${Date.now()}-${Math.random()
        .toString(36)
        .slice(2, 8)}-${originalName}`

      const destinationPath = path.join(FILES_DIR, safeName)

      fs.copyFileSync(sourcePath, destinationPath)

      const stats = fs.statSync(destinationPath)

      const fileInfo = {
        id: `${Date.now()}-${Math.random()
          .toString(36)
          .slice(2, 10)}`,

        name: originalName,
        storedName: safeName,
        size: stats.size,
        type: path.extname(originalName).toLowerCase(),
        path: destinationPath,
        uploadedAt: new Date().toISOString(),
      }

      currentFiles.push(fileInfo)
      newFiles.push(fileInfo)
    } catch (error) {
      console.error("File save error:", error)
    }
  }

  saveFileList(currentFiles)

  return newFiles
})

// Delete saved file
ipcMain.handle("files:delete", async (_event, id) => {
  const files = readFiles()

  const fileToDelete = files.find((file) => file.id === id)

  if (!fileToDelete) {
    return false
  }

  try {
    if (fs.existsSync(fileToDelete.path)) {
      fs.unlinkSync(fileToDelete.path)
    }

    const updatedFiles = files.filter((file) => file.id !== id)

    saveFileList(updatedFiles)

    return true
  } catch (error) {
    console.error("File delete error:", error)
    return false
  }
})

// Open saved file
ipcMain.handle("files:open", async (_event, id) => {
  const files = readFiles()

  const file = files.find((item) => item.id === id)

  if (!file || !fs.existsSync(file.path)) {
    return false
  }

  await shell.openPath(file.path)

  return true
})

/* ================================
   ELECTRON APP
================================ */

app.whenReady().then(() => {
  ensureStorage()

  createWindow()

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})