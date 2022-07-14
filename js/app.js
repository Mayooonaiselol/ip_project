let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;

console.log(viewportHeight, viewportWidth);

console.log("IP Project 12 E, UI/UX desgined by Ansh Gupta.")

document.addEventListener('DOMContentLoaded', function() {
  ipcRenderer.send('inspect')
})
