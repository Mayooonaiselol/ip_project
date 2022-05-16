const { exec } = require('node:child_process');
const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => {
    splash.classList.add('display-none');
  }, 2500);
})

let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;

console.log(viewportHeight, viewportWidth);

document.getElementById("ad").addEventListener("click", warning);

function warning() {
  window.alert("Select a city first!");
}

document.getElementById("dropdown").addEventListener("click", run_py);

function run_py() {
  exec('python ./python/delhi.py');
  exec('python ./python/kolkata.py');
  exec('python ./python/mumbai.py');
  exec('python ./python/chennai.py');
}

console.log("IP Project 12 E, UI/UX desgined by Ansh Gupta.")