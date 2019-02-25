document.addEventListener("DOMContentLoaded", function(event) {

  display = new Display();
  display.drawCanvas();
  // LINE BELOW WILL ENABLE CONTROLLER, NEEDS TO BE PUT IN MENU/START BUTTON CLASS
  display.controller.enableControls();

  document.addEventListener("keydown", display.player.move(), true)
})
