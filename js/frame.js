// Get the iframe
const iFrame = document.getElementById('myIFrame');

// Let's say that you want to access a button with the ID `'myButton'`,
// you can access via the following code:
const buttonInIFrame = iFrame.contentWindow.document.getElementById('myButton');

// If you need to call a function in the iframe, you can call it as follows:
iFrame.contentWindow.yourFunction();