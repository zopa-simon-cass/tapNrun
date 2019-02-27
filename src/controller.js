class Controller {
  constructor() {
    this.canvas = document.querySelector("canvas");
    // this.controllerEnabled = false
  }

  enableControls() {
    this.canvas.onkeyup = function(e) {
      if(e.keyCode == 65) {
        display.player.move()
      } else {
        display.player2.move()
      }
    }
  }

  // enableControls2() {
  //   this.canvas.onkeyup = function(e) {
  //     if(e.keycode == 76) {
  //       display.player2.move()
  //       // this.controllerEnabled = true
  //     }
  //   }
  // }

}
