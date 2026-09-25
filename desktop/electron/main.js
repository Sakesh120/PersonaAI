const { app, BrowserWindow } = require("electron");
const path = require("node:path");
function createWindow() {
  const win = new BrowserWindow({ width: 1200, height: 800, webPreferences: { preload: path.join(__dirname, "preload.js"), contextIsolation: true } });
  const rendererUrl = process.env.RENDERER_URL;
  if (rendererUrl) {
    const load = () => win.loadURL(rendererUrl).catch(() => setTimeout(load, 500));
    load();
  } else {
    win.loadURL(`file://${path.join(__dirname, "../renderer/dist/index.html")}`);
  }
}
app.whenReady().then(createWindow);
app.on("window-all-closed", () => { if (process.platform !== "darwin") app.quit(); });
