class Display {
  constructor() {
    this.canvas = document.querySelector('canvas');
    this.canvas.width = 900
    this.canvas.height = 500
    // FINISH LINE NEEDS TO BE MADE ADAPTIVE/ NOT 150
    this.finishLine = 150
    this.timer = new Timer
    this.player = new Player
    this.player2 = new Player2
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
    let img = new Image()
    let img2 = new Image()
    img.src = ("./assets/Joao.png")
    img2.src = ("./assets/Joao1.png")
    ctx.beginPath()
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    ctx.drawImage(img, this.player.x, this.player.y, 100,100 )
    ctx.drawImage(img2, this.player2.x, this.player2.y, 100,100 )
    ctx.font = "30px sans-serif";
    ctx.fillText(this.timer.formatTime(), 745, 490)
  }

  // drawCanvas2() {
  //   var ctx = this.canvas.getContext('2d');
  //   let img2 = new Image()
  //   img2.src = ("./assets/Joao1.png")
  //   ctx.beginPath()
  //   ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  //   ctx.drawImage(img2, this.player2.x, this.player2.y, 100,100 )
  //   ctx.font = "30px sans-serif";
  //   ctx.fillText(this.timer.formatTime(), 745, 490)
  // }

  trackPlayer() {
    if (this.player.x > 15 && this.player.x < 20) {
      this.timer.start()
      clearInterval(this.stopwatch)
      this.stopwatch = setInterval(this.trackFinish.bind(this), 10)
    }
  }

  trackFinish() {
    if (this.player.x > this.finishLine) {
      this.timer.stop()
      clearInterval(this.stopwatch);
    }
  }
}
