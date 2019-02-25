class Display {
  constructor() {
    this.canvas = document.querySelector('canvas');
    this.canvas.width = 900
    this.canvas.height = 500
    // FINISH LINE NEEDS TO BE MADE ADAPTIVE/ NOT 150
    this.finishLine = 150
    this.timer = new Timer
    this.player = new Player
    this.controller = new Controller
    // this.interval
    this.infiniteDraw()
    this.timer.start()
    setInterval(this.trackPlayer.bind(this), 10)
  }

  infiniteDraw() {
    this.interval = setInterval(this.drawCanvas.bind(this), 10)
  }

  drawCanvas() {
    var ctx = this.canvas.getContext('2d');
    ctx.beginPath();
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    ctx.arc(this.player.x, this.player.y, 50, 0, 2 * Math.PI);
    ctx.fill()
    ctx.font = "30px sans-serif"
    ctx.fillText(this.timer.formatTime(), 700, 450)
  }

  trackPlayer() {
    // console.log(this.timer);
    if (this.player.x > this.finishLine) { this.timer.stop() }
    // this.trackPlayer()
  }

}
