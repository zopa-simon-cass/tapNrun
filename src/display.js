class Display {
  constructor() {
    this.canvas = document.querySelector('canvas');
    this.canvas.width = 900
    this.canvas.height = 500
    // FINISH LINE NEEDS TO BE MADE ADAPTIVE/ NOT 150
    this.finishLine = 7.8/9 * this.canvas.width
    this.timer = new Timer
    this.player = new Player
    this.player2 = new Player2
    this.controller = new Controller
    this.controller2 = new Controller
    this.interval
    this.lane3runner = new Lane3Runner
    this.lane4runner = new Lane4Runner
    this.stopwatch = setInterval(this.trackPlayer.bind(this), 50)
    this.mouseOn = true
    this.time1 = null
    this.time2 = null
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

  aiMovement() {
    this.lane3movement = setInterval(this.lane3runner.move(), 100)
    this.lane4movement = setInterval(this.lane4runner.move(), 100)
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
    ctx.arc(this.lane3runner.x, this.lane3runner.y, 50, 0, 2 * Math.PI);
    ctx.arc(this.lane4runner.x, this.lane4runner.y, 50, 0, 2 * Math.PI);
    ctx.fill()
    ctx.font = "30px sans-serif";
    ctx.fillText(this.timer.formatTime(), 745, 490)
    this.mouseOn = false
    if (this.player.x > this.finishLine && this.time1=== null) {
      this.time1 = this.timer.formatTime()
      ctx.fillText(this.time1, 650, 95)
    } else if (this.player.x > this.finishLine) {
      ctx.fillText(this.time1, 650, 95)
    }
    if (this.player2.x > this.finishLine && this.time2 === null) {
      this.time2 = this.timer.formatTime()
      ctx.fillText(this.time2, 650, 220)
    } else if (this.player2.x > this.finishLine) {
      ctx.fillText(this.time2, 650, 220)
    }
  }

  trackPlayer() {

    if (this.player.x > 3 || this.player2.x > 3) {
      this.timer.start()
      clearInterval(this.stopwatch)
      this.stopwatch = setInterval(this.trackFinish.bind(this), 10)
      display.aiMovement();
    }
  }
//     if (this.player.x > 4 && this.player.x < this.finishLine) {
//       this.timer.start()
//       display.aiMovement();
//       clearInterval(this.stopwatch)
//       this.stopwatch = setInterval(this.trackFinish.bind(this), 50)
//     }

  trackFinish() {
    if (this.player.x > this.finishLine) {
      this.player.moveAllowed = false
    }
    if (this.player2.x > this.finishLine && this.player2.moveAllowed === true) {
      this.player2.moveAllowed = false
    }
    if (this.player.x > this.finishLine && this.player2.x > this.finishLine) {
      this.timer.stop()
      clearInterval(this.stopwatch);
      clearInterval(this.interval)
      this.drawCanvas()
      this.mouseOn = true
      this.drawReplay()
    }
  }

  drawReplay() {
    var ctx = this.canvas.getContext('2d');
    let img = new Image()
    img.src = ("./assets/playagain-btn-big.png")
    img.onload = function() {
      ctx.drawImage(img, 225, 125, 450, 250)
    }
    this.restart()
  }

  restart() {
    this.player.reset()
    this.player2.reset()
    this.timer.reset()
    this.stopwatch = setInterval(this.trackPlayer.bind(this), 50)
    this.time1 = null
    this.time2 = null
  }

}
