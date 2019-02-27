class Display {
  constructor() {
    this.canvas = document.querySelector('canvas');
    // this.canvas.width = (window.innerWidth - 400)
    // this.canvas.height = (window.innerHeight - 250)
    // FINISH LINE NEEDS TO BE MADE ADAPTIVE/ NOT 150
    this.finishLine = 150
    this.timer = new Timer
    this.player = new Player
    this.controller = new Controller
    this.interval
    this.stopwatch = setInterval(this.trackPlayer.bind(this), 50)
    // this.timer.start()
  }

  startButton() {
    this.canvas.width = (window.innerWidth - 400)
    this.canvas.height = (this.canvas.width * 0.5)
    var ctx = this.canvas.getContext('2d');
    let img = new Image()
    img.src = ("./assets/pixel-start.jpg")
    img.onload = function() {
      ctx.drawImage(img, 0, 0, (window.innerWidth - 400), (window.innerHeight - 250))
    }
  }

  infiniteDraw() {
    this.interval = setInterval(this.drawCanvas.bind(this), 10)
  }

  drawCanvas() {
    this.canvas.style.backgroundImage = "url('./assets/Background1.png')";
    this.canvas.backgroundPosition = "50%, 50%";
    this.canvas.style.backgroundHeight = "100%";
    this.canvas.style.backgroundWidth = "100%";
    document.querySelector('canvas').style.objectFit = "cover";

    var ctx = this.canvas.getContext('2d');
    let img = new Image()
    img.src = ("./assets/Joao.png")
    ctx.beginPath()
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    ctx.drawImage(img, this.player.x, this.player.y, (this.canvas.width / 9 ),(this.canvas.height / 5) )
    ctx.font = `${this.canvas.width / 30}px sans-serif`;
    ctx.fillText(this.timer.formatTime(), (this.canvas.width - 250), (this.canvas.height - 10))
  }

  trackPlayer() {
    if (this.player.x > 15 && this.player.x < 20) {
      this.timer.start()
      clearInterval(this.stopwatch)
      this.stopwatch = setInterval(this.trackFinish.bind(this), 50)
    }
  }

  trackFinish() {
    if (this.player.x > this.finishLine) {
      this.timer.stop()
      clearInterval(this.stopwatch);
    }
  }
}
