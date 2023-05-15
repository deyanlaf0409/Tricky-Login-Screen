function checkRegister(event) {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email");
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;
  var checkbox = document.getElementById("agree");

  if (!username || !email.value || !password || !confirmPassword) {
    alert("Please fill in all the fields.");
    event.preventDefault(); // Cancel the form submission
    return false;
  }

  if (!email.checkValidity()) {
    alert("Please enter a valid email address.");
    event.preventDefault(); // Cancel the form submission
    return false;
  }

  // Password validation
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    event.preventDefault(); // Cancel the form submission
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    event.preventDefault(); // Cancel the form submission
    return false;
  }

  if (!checkbox.checked) {
    alert("Please agree to the terms and conditions.");
    event.preventDefault(); // Cancel the form submission
    return false;
  }

  // Registration logic...

  // If the registration is successful, you can redirect to a new page or perform any other actions.
  window.location.reload();
}








var registerButton = document.getElementById("register-button");
var xPos = registerButton.offsetLeft; // Get the initial left position of the button
var isLeft = true;

registerButton.onmouseover = function(e) {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email");
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;
  var checkbox = document.getElementById("agree");

  if (!username || !email.value || !email.checkValidity() || !password || !confirmPassword || !checkbox.checked) {
    if (isLeft) {
      xPos = 260;
    } else {
      xPos = 80;
    }
    registerButton.style.left = xPos + "px";
    isLeft = !isLeft;
  }
};


  