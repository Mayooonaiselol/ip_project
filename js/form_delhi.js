var fs = require('fs');

function handleSubmit_delhi(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());
    var dictstring = JSON.stringify(value);

    console.log({ value });
    fs.writeFile("./jsondata/delhi.json", dictstring, function (err, result) {
        if (err) console.log('error', err);
    });

    exec('python ./python/delhi_jsoncsv.py');

    window.location.replace("../src/form_end.html");
}

const dform = document.getElementById('form_delhi');
dform.addEventListener("submit", handleSubmit_delhi);
