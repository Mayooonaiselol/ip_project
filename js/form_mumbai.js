document.addEventListener('DOMContentLoaded', function () {
    const mform = document.getElementById('form_mumbai');
    mform.addEventListener("submit", handleSubmit_mumbai);

    function handleSubmit_mumbai(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        const value = Object.fromEntries(data.entries());
        var contents = JSON.stringify(value);

        console.log({ value });
        const cityname = 'mumbai.json'
        ipcRenderer.send('form-city', cityname, contents)

        ipcRenderer.on('form-city-reply', function (event_response) {
            if (event_response = "yes") {
                window.location.replace("../src/thanks.html")
            } else {
                console.log("fail")
            }
        })
    }
})
