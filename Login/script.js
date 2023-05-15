var myButton = document.getElementById("evil-button");
var xPos = myButton.offsetLeft; // Get the initial left position of the button
var isLeft = true;

myButton.onmouseover = function(e) {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (!username || !password) {
    if (isLeft) {
      xPos = 260;
    } else {
      xPos = 80;
    }
    myButton.style.left = xPos + "px";
    isLeft = !isLeft;
  }
};

function checkLogin(event) {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Please enter both username and password.");
    event.preventDefault(); // Cancel the form submission
    return false;
  }
  // Other validation logic...

  // If the validation passes, reload the page
  window.location.reload();
}