const iframe = document.getElementById('myiframe');

document.addEventListener('DOMContentLoaded', function () {
    city = "delhi";
    ipcRenderer.send('htmlload', city);
    ipcRenderer.on('htmlload-reply', function (event, file) {
        iframe.src = file;
    })
})
