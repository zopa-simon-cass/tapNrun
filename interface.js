document.addEventListener("DOMContentLoaded", function(event) {

  display = new Display();
  display.startButton()
  // LINE BELOW WILL ENABLE CONTROLLER, NEEDS TO BE PUT IN MENU/START BUTTON CLASS
  display.controller.enableControls();
  display.timer.start();

  display.canvas.addEventListener("mousedown", function () {
    display.drawCanvas();
    display.infiniteDraw();
  })
  document.addEventListener("keydown", display.player.move(), true)
})
