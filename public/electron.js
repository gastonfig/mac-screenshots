const { app, BrowserWindow, Tray } = require('electron');

const isDev = require('electron-is-dev');
const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

let tray;

function createWindow() {
  // Create the tray
  const icon = path.join(__dirname, '/assets/icon.png');
  const iconActive = path.join(__dirname, '/assets/icon_active.png');
  tray = new Tray(icon);

  // Create the browser window.
  mainWindow = new BrowserWindow({
    frame: false,
    height: 288,
    resizable: false,
    show: false,
    transparent: true,
    width: 186,
  });

  // and load the index.html of the app.
  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, '/../build/index.html'),
      protocol: 'file:',
      slashes: true,
    });
  mainWindow.loadURL(startUrl);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  if (!isDev) {
    mainWindow.on('blur', mainWindow.hide);
  }

  mainWindow.on('hide', () => {
    tray.setHighlightMode('never');
    tray.setImage(icon);
  });

  mainWindow.on('show', () => {
    tray.setHighlightMode('always');
    tray.setImage(iconActive);
  });

  tray.on('click', toggleWindow);
}

const toggleWindow = () => {
  if (mainWindow.isVisible()) {
    mainWindow.hide();
  } else {
    setWindowPosition();
    mainWindow.show();
  }
};

const setWindowPosition = () => {
  const { x, width: trayWidth, y } = tray.getBounds();
  const { width: windowWidth } = mainWindow.getBounds();
  const xPos = x - windowWidth / 2 + trayWidth / 2;
  mainWindow.setPosition(xPos, y, false);
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
