document.addEventListener("DOMContentLoaded", function(event) {

  display = new Display();
  display.startButton()
  
  display.canvas.addEventListener("mousedown", function () {
    display.drawCanvas();
    display.infiniteDraw();
    display.controller.enableControls();
  })
  document.addEventListener("keydown", display.player.move(), true)
})
