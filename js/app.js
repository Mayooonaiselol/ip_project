const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
  setTimeout(()=>{
    splash.classList.add('display-none');
  }, 2500);
})

let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;

console.log(viewportHeight, viewportWidth);

console.log("IP Project 12 E, UI/UX desgined by Ansh Gupta.")