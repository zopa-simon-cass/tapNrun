document.addEventListener("DOMContentLoaded", function(event) {

  var user = prompt("What is your name?");
  if (user != null) {
    document.getElementById("player1").innerHTML =
      "Lane 1:  " + user;
  }

  display = new Display();
  display.startButton();

  display.canvas.addEventListener("mousedown", function () {
    if (display.mouseOn === true) {
      display.drawCanvas();
      display.infiniteDraw();
      display.player.moveAllowed = true;
      display.controller.enableControls();
    }
  })
})
