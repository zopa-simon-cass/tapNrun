document.addEventListener("DOMContentLoaded", function(event) {

  var user = prompt("What is your name?");
  if (user != null) {
    document.getElementById("player1").innerHTML =
      "Lane 1:  " + user;
  }

  display = new Display();
  display.startButton()

  display.canvas.addEventListener("mousedown", function () {
    display.drawCanvas();
    display.infiniteDraw();
    display.controller.enableControls();
  })
})
