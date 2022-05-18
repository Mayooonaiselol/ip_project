var fs = require('fs');

function handleSubmit_chennai(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());
    var dictstring = JSON.stringify(value);

    console.log({ value });
    fs.writeFile("./jsondata/chennai.json", dictstring, function (err, result) {
        if (err) console.log('error', err);
    });

    exec('python ./python/chennai_jsoncsv.py');

    window.location.replace("../src/form_end.html");
}

const cform = document.getElementById('form_chennai');
cform.addEventListener("submit", handleSubmit_chennai);
