var fs = require('fs');

function handleSubmit_kolkata(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());
    var dictstring = JSON.stringify(value);

    console.log({ value });
    fs.writeFile("./jsondata/kolkata.json", dictstring, function (err, result) {
        if (err) console.log('error', err);
    });

    const { exec } = require('node:child_process');
    exec('python ./python/kolkata_jsoncsv.py');

    window.location.replace("../src/form_end.html");
}

const kform = document.getElementById('form_kolkata');
kform.addEventListener("submit", handleSubmit_kolkata);
