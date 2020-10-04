const {app, BrowserWindow, dialog} = require('electron');
const url = require("url");
const path = require("path");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

// Create a new BrowserWindow when `app` is ready
function createWindow () {

  mainWindow = new BrowserWindow({
    width: 1920, height: 1080,
    webPreferences: { nodeIntegration: true }
  })

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `dist/rmDiagnosis/index.html`),
      protocol: "file:",
      slashes: true
    })
  );

  // Open DevTools - Remove for PRODUCTION!
  mainWindow.webContents.openDevTools();
  mainWindow.webContents.on('did-finish-load', () => {
  })
      // Listen for window being closed
  mainWindow.on('closed',  () => {
  mainWindow = null
  })
}


// Electron `app` is ready
app.on('ready', createWindow);

// Quit when all windows are closed - (Not macOS - Darwin)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// When app icon is clicked and app is running, (macOS) recreate the BrowserWindow
app.on('activate', () => {
  if (mainWindow === null) createWindow()
})
