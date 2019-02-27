class Controller {
  constructor() {
    this.canvas = document.querySelector("canvas");
    this.controllerEnabled = false
  }

  enableControls() {
    this.canvas.onkeyup = function(e) {
      if(e.keyCode == 32) {
        display.player.move()
        this.controllerEnabled = true
      }
    }
  }

}
