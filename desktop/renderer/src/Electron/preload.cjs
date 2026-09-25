const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("electronAPI", {
  isElectron: true,

  getFiles: () => ipcRenderer.invoke("files:get"),

  selectFiles: () => ipcRenderer.invoke("files:select"),

  deleteFile: (id) => ipcRenderer.invoke("files:delete", id),

  openFile: (id) => ipcRenderer.invoke("files:open", id),
})