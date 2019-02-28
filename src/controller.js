class Controller {
  constructor(p1, p2, l3, l4, timer) {
    this.canvas = document.querySelector('canvas');
    this.p1 = p1
    this.p2 = p2
    this.l3 = l3
    this.l4 = l4
    this.timer = timer
    this.finishLine = 603
    this.stopwatch = setInterval(this.stopAtFinish.bind(this), 10)
    this.mouseOn = true
  }

  enableControls() {
    this.canvas.onkeyup = function(e) {
      if(e.keyCode == 65) { display.player.move() }
      if(e.keyCode == 76) { display.player2.move() }
    }
  }

  aiMove() {
    this.l3.move()
    this.l4.move()
  }

  stopAtFinish() {
    if(this.p1.x > this.finishLine) { this.p1.moveAllowed = false }
    if(this.p2.x > this.finishLine) { this.p2.moveAllowed = false }
    if(this.l3.x > this.finishLine) { this.l3.moveAllowed = false }
    if(this.l4.x > this.finishLine) { this.l4.moveAllowed = false }
    this.finishGame();
  }

  finishGame() {
    var p1fin = this.p1.x > this.finishLine
    var p2fin = this.p2.x > this.finishLine
    var l3fin = this.l3.x > this.finishLine
    var l4fin = this.l4.x > this.finishLine
    if(p1fin && p2fin && l3fin && l4fin) {
      this.timer.stop()
      clearInterval(this.stopwatch)
      clearInterval(display.interval)
      display.drawCanvas()
      this.mouseOn = true
      display.drawReplay()
    }
  }

  restart() {
    this.p1.reset(display.startline, 22)
    this.p2.reset(display.startline, 120)
    this.l3.reset(display.startline, 217)
    this.l4.reset(display.startline, 313)
    this.timer.reset()
    display.time1 = null
    display.time2 = null
    this.stopwatch = setInterval(this.stopAtFinish.bind(this), 10)
  }

}
