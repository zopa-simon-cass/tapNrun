class Controller {
  constructor() {
    this.canvas = document.querySelector("canvas");
  }

  enableControls() {
    this.canvas.onkeyup = function(e) {
      if(e.keyCode == 65) {
        display.player.move()
 
      }
      if(e.keyCode == 76) {
        display.player2.move()
      }
    }
  }

}
