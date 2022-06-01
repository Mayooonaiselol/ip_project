// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const ipc = ipcMain
const dataPath = app.getPath('userData');
const { exec } = require('node:child_process');

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1100,
    height: 700,
    minWidth: 940,
    minHeight: 560,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      devTools: true,
      preload: path.join(__dirname, 'preload.js'),
    }
  })

  ipc.on("closeApp", () => {
    mainWindow.close();
  });
  ipc.on("minApp", () => {
    mainWindow.minimize();
  });
  ipc.on("maxApp", () => {
    if (mainWindow.isMaximized()) {
      mainWindow.webContents.send("changeIr");
      mainWindow.restore();
    } else {
      mainWindow.webContents.send("changeImx");
      mainWindow.maximize();
    }
  });


  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipc.on('form-city', function (event, cityname, contents) {
  const dir = path.join(dataPath, 'jsondata');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, {
      recursive: true
    });
  }
  const filePath = path.join(dir, cityname);
  fs.writeFileSync(filePath, contents, function (err, result) {
    if (err) console.log('error', err);
  });

  const event_response = "yes"
  event.reply('form-city-reply', event_response)

  if (cityname = 'mumbai.json') {
    exec('python ./python/mumbai_jsoncsv.py');
  } else if (cityname = 'chennai.json') {
    exec('python ./python/chennai_jsoncsv.py');
  } else if (cityname = 'delhi.json') {
    exec('python ./python/delhi_jsoncsv.py');
  } else if (cityname = 'kolkata.json') {
    exec('python ./python/kolkata_jsoncsv.py');
  } else {
    console.log('error')
  }
})

ipc.on('inspect', function () {
  const csvdir = path.join(dataPath, 'records');

  if (!fs.existsSync(csvdir)) {
    fs.mkdirSync(csvdir, { recursive: true });
  }

  const delhicsv = path.join(csvdir, 'delhi.csv');
  const chennaicsv = path.join(csvdir, 'chennai.csv');
  const kolkatacsv = path.join(csvdir, 'kolkata.csv');
  const mumbaicsv = path.join(csvdir, 'mumbai.csv');

  if (!fs.existsSync(delhicsv)) {
    fs.copyFileSync('./assets/records/delhi.csv', delhicsv);
  }

  if (!fs.existsSync(chennaicsv)) {
    fs.copyFileSync('./assets/records/chennai.csv', chennaicsv);
  }

  if (!fs.existsSync(kolkatacsv)) {
    fs.copyFileSync('./assets/records/kolkata.csv', kolkatacsv);
  }

  if (!fs.existsSync(mumbaicsv)) {
    fs.copyFileSync('./assets/records/mumbai.csv', mumbaicsv);
  }
})
