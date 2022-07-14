document.addEventListener('DOMContentLoaded', function() {
  const dform = document.getElementById('form_delhi');
  dform.addEventListener("submit", handleSubmit_delhi);

  function handleSubmit_delhi(event) {
    event.preventDefault()
    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());
    var contents = JSON.stringify(value);

    console.log({ value });
    const cityname = 'delhi.json'
    ipcRenderer.send('form-city', cityname, contents)

    ipcRenderer.on('form-city-reply', function(event_response) {
      if (event_response = "yes") {
        window.location.replace("../src/thanks.html")
      } else {
        console.log("fail")
      }
    })
  }
})

