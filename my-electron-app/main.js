import { app, BrowserWindow } from "electron";
import path from "path";

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(process.cwd(), "preload.js"),
    },
  });

  win.loadURL("http://localhost:5173");
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);
