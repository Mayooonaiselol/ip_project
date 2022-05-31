document.addEventListener('DOMContentLoaded', function () {
    const kform = document.getElementById('form_kolkata');
    kform.addEventListener("submit", handleSubmit_kolkata);

    function handleSubmit_kolkata(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        const value = Object.fromEntries(data.entries());
        var contents = JSON.stringify(value);

        console.log({ value });
        const cityname = 'kolkata.json'
        ipcRenderer.send('form-city', cityname, contents)

        ipcRenderer.on('form-city-reply', function (event_response) {
            if (event_response = "yes") {
                window.location.replace("../src/form_end.html")
            } else {
                console.log("fail")
            }
        })
    }
})
