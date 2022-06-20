const iframe = document.getElementById('myiframe');

document.addEventListener('DOMContentLoaded', function () {
    city = "mumbai";
    ipcRenderer.send('htmlload', city);
    ipcRenderer.on('htmlload-reply', function (event, file) {
        iframe.src = file;
    })
})
