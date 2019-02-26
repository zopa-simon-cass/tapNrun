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
    this.interval
    this.stopwatch = setInterval(this.trackPlayer.bind(this), 10)
    // this.timer.start()
  }

  startButton() {
    var ctx = this.canvas.getContext('2d');
    let img = new Image()
    img.src = ("./assets/pixel-start.jpg")
    img.onload = function() {
      ctx.drawImage(img, 0, 0, 900, 500)
    }
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
    // LINE BELOW WILL START TIMER, WILL SOON BE MOVED TO MENU CLASS
    ctx.fillText(this.timer.formatTime(), 700, 450)
  }

  trackPlayer() {
    if (this.player.x > 105 && this.player.x < this.finishLine) {
      this.timer.start()
    }
    if (this.player.x > this.finishLine) {
      this.timer.stop()
      clearInterval(this.stopwatch);
    }
    // this.trackPlayer()
  }

}
