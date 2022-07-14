const iframe = document.getElementById('myiframe');

document.addEventListener('DOMContentLoaded', function() {
  ipcRenderer.send('htmlload-mumbai');
  ipcRenderer.on('mumbai-reply', function(event, file) {
    iframe.src = file;
  })
})
