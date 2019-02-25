

document.addEventListener("DOMContentLoaded", function(event) {

  var canvas = document.querySelector("canvas")

  display = new Display()
  // var movement = new Movement
  canvas.onkeyup = function(e) {
    if(e.keyCode == 32) {
      display.player.move()
    }
  }

  addEventListener("keydown", display.player.move(), true)

});
