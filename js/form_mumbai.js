var fs = require('fs');

function handleSubmit_mumbai(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());
    var dictstring = JSON.stringify(value);

    console.log({ value });
    fs.writeFile("./jsondata/mumbai.json", dictstring, function (err, result) {
        if (err) console.log('error', err);
    });

    const { exec } = require('node:child_process');
    exec('python ./python/mumbai_jsoncsv.py');

    window.location.replace("../src/form_end.html");
}

const mform = document.getElementById('form_mumbai');
mform.addEventListener("submit", handleSubmit_mumbai);
