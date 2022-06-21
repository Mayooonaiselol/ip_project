const iframe = document.getElementById('myiframe');

document.addEventListener('DOMContentLoaded', function () {
    ipcRenderer.send('htmlload-delhi');
    ipcRenderer.on('delhi-reply', function (event, file) {
        iframe.src = file;
    })
})
