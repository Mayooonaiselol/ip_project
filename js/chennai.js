const { ipcRenderer } = require("electron");

ipcRenderer.send('htmlload');
ipcRenderer.on('htmlload-reply', function(file) {
    const iframe = document.getElementById('myiframe');
    iframe.src = file
})