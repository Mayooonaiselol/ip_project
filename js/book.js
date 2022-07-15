document.addEventListener('DOMContentLoaded', function() {
  const cform = document.getElementById('bookform');
  cform.addEventListener("submit", handleSubmit_book);

  function handleSubmit_book(event) {
    event.preventDefault();
    window.location.replace("../src/thanks.html")
  }
})
