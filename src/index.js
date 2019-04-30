const { app, BrowserView, BrowserWindow } = require("electron");
const windowStateKeeper = require("electron-window-state");

app.on("ready", () => {
  let mainWindowState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800
  });

  let win = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height
  });

  mainWindowState.manage(win);

  //let width = 800;
  //let height = 600;
  //let win = new BrowserWindow({ width: width, height: height });
  win.on("closed", () => {
    win = null;
  });

  let view = new BrowserView({
    webPreferences: {
      nodeIntegration: false
    }
  });
  win.setBrowserView(view);
  view.setBounds({ x: 0, y: 0, width: mainWindowState.width, height: mainWindowState.height });
  view.webContents.loadURL("https://www.wazaterm.com");
  view.setAutoResize({ width: true, height: true });
});
