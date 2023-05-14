var myButton = document.getElementById("evil-button");
var xPos = 660;
var isLeft = true;

myButton.onmouseover = function(e) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  if (!username || !password) {
    if (isLeft) {
      xPos = 575;
    } else {
      xPos = 755;
    }
    myButton.style.left = xPos + "px";
    isLeft = !isLeft;
  }
}














