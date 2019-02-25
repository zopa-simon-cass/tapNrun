class Controller {
  constructor() {
    this.canvas = document.querySelector("canvas");
  }

  enableControls() {
    this.canvas.onkeyup = function(e) {
      if(e.keyCode == 32) {
        display.player.move()
      }
    }
  }

}
