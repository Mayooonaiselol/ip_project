// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const { ipcRenderer } = require("electron");
const ipc = ipcRenderer;
const close = document.getElementById("close-button");
const min = document.getElementById("min-button");
const max = document.getElementById("max-button");
const i = document.getElementById("mxr");

// close app here //
close.addEventListener("click", e => {
    ipc.send('closeApp')
});
// end //

// minimize app here //
min.addEventListener("click", () => {
    ipc.send('minApp');
});
// end //

// maximizeRestore app here //
max.addEventListener("click", () => {
    ipc.send('maxApp');
});
// end //

ipc.on("changeImx", (et, message) => {
    i.setAttribute("srcset", "assets/icons/minimize-2.svg");
});

ipc.on("changeIr", (t, message) => {
    i.setAttribute("srcset", "assets/icons/maximize-2.svg");
}) 