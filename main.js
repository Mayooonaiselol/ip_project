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
    icon: path.join(__dirname, 'assets/icons/64.png'),
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

  app.on('activate', function() {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.


ipc.on('form-city', function(event, cityname, contents) {
  const dir = path.join(dataPath, 'jsondata');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, {
      recursive: true
    });
  }
  const filePath = path.join(dir, cityname);
  fs.writeFileSync(filePath, contents, function(err, result) {
    if (err) console.log('error', err);
  });

  const event_response = "yes"
  event.reply('form-city-reply', event_response)

  const mumbai_json = path.join(__dirname, 'extraResources/python','mumbai_jsoncsv.py')
  const kolkata_json = path.join(__dirname, 'extraResources/python','kolkata_jsoncsv.py')
  const delhi_json = path.join(__dirname, 'extraResources/python','delhi_jsoncsv.py')
  const chennai_json = path.join(__dirname, 'extraResources/python','chennai_jsoncsv.py')
  


  const executePythonConfig = {
    'mumbai.json': () => exec(`python ${mumbai_json}`),
    'chennai.json': () => exec(`python ${chennai_json}`),
    'delhi.json': () => exec(`python ${delhi_json}`),
    'kolkata.json': () => exec(`python ${kolkata_json}`),
  };

  executePythonConfig[cityname]?.();

})

ipc.on('inspect', function() {
  const csvdir = path.join(dataPath, 'records');

  if (!fs.existsSync(csvdir)) {
    fs.mkdirSync(csvdir, { recursive: true });
  }

  const fileNames = ['delhi.csv', 'chennai.csv', 'kolkata.csv', 'mumbai.csv'];

  for (let file of fileNames) {
    const filePath = path.join(csvdir, file);
    if (!fs.existsSync(filePath)) {
      csvfiles = path.join(__dirname, `assets/records/${file}`)
      fs.copyFileSync(csvfiles, filePath);
    }
  }

  const tabledir = path.join(dataPath, 'table');

  if (!fs.existsSync(tabledir)) {
    fs.mkdirSync(tabledir, { recursive: true });
  }

  const tableNames = ['delhi.html', 'chennai.html', 'kolkata.html', 'mumbai.html'];

  for (let file of tableNames) {
    const filePath = path.join(tabledir, file);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, "");
    }
  }

  const csspath = path.join(__dirname, 'extraResources/css','styles.css')

  const mumbai_py = path.join(__dirname, 'extraResources/python','mumbai.py')
  const kolkata_py = path.join(__dirname, 'extraResources/python','kolkata.py')
  const delhi_py = path.join(__dirname, 'extraResources/python','delhi.py')
  const chennai_py = path.join(__dirname, 'extraResources/python','chennai.py')

  exec(`python ${mumbai_py} ${csspath}`)
  exec(`python ${chennai_py} ${csspath}`)
  exec(`python ${kolkata_py} ${csspath}`)
  exec(`python ${delhi_py} ${csspath}`)
})

ipc.on('htmlload-chennai', function(event) {
  const file = path.join(dataPath, 'table/chennai.html');
  event.reply('chennai-reply', file);
})

ipc.on('htmlload-delhi', function(event) {
  const file = path.join(dataPath, 'table/delhi.html');
  event.reply('delhi-reply', file);
})

ipc.on('htmlload-kolkata', function(event) {
  const file = path.join(dataPath, 'table/kolkata.html');
  event.reply('kolkata-reply', file);
})

ipc.on('htmlload-mumbai', function(event) {
  const file = path.join(dataPath, 'table/mumbai.html');
  event.reply('mumbai-reply', file);
})

ipc.on('script_run', function() {
  const csspath = path.join(__dirname, 'extraResources/css','styles.css')

  const mumbai_py = path.join(__dirname, 'extraResources/python','mumbai.py')
  const kolkata_py = path.join(__dirname, 'extraResources/python','kolkata.py')
  const delhi_py = path.join(__dirname, 'extraResources/python','delhi.py')
  const chennai_py = path.join(__dirname, 'extraResources/python','chennai.py')

  exec(`python ${mumbai_py} ${csspath}`)
  exec(`python ${chennai_py} ${csspath}`)
  exec(`python ${kolkata_py} ${csspath}`)
  exec(`python ${delhi_py} ${csspath}`)
})
