const iframe = document.getElementById('myiframe');

document.addEventListener('DOMContentLoaded', function () {
    ipcRenderer.send('htmlload-chennai');
    ipcRenderer.on('chennai-reply', function (event, file) {
        iframe.src = file;
    })
})
