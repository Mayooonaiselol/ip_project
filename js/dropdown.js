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

document.addEventListener("click", e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]")
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

  let currentDropdown
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle("active")
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove("active")
  })
})
