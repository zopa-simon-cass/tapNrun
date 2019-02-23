

document.addEventListener("DOMContentLoaded", function(event) {

  var canvas = document.querySelector("canvas")

  display = new Display()
  display.playerDraw()
  // var movement = new Movement
  canvas.onkeyup = function(e) {
    if(e.keyCode == 32) {
      display.player.move()
      display.playerDraw()
    }
  }

  addEventListener("keydown", display.player.move(), true)

});
