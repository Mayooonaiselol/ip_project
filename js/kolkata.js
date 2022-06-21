const iframe = document.getElementById('myiframe');

document.addEventListener('DOMContentLoaded', function () {
    ipcRenderer.send('htmlload-kolkata');
    ipcRenderer.on('kolkata-reply', function (event, file) {
        iframe.src = file;
    })
})
