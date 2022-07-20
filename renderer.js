const { ipcRenderer } = require("electron");
const ipc = ipcRenderer;
const close = document.getElementById("close-button");
const min = document.getElementById("min-button");
const max = document.getElementById("max-button");
const i = document.getElementById("mxr");

close.addEventListener("click", e => {
  ipc.send('closeApp')
});

min.addEventListener("click", () => {
  ipc.send('minApp');
});

max.addEventListener("click", () => {
  ipc.send('maxApp');
});

ipc.on("changeImx", (et, message) => {
  i.setAttribute("srcset", "assets/icons/minimize-2.svg");
});

ipc.on("changeIr", (t, message) => {
  i.setAttribute("srcset", "assets/icons/maximize-2.svg");
}) 
