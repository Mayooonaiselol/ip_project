document.addEventListener('DOMContentLoaded', function () {
    const cform = document.getElementById('bookform');
    cform.addEventListener("submit", handleSubmit);

    function handleSubmit(event) {
      window.location.replace("../src/thanks.html")
    }
})
