// class Display {
//   constructor() {
//     this.canvas = document.querySelector('canvas');
//     this.player = new Player
//     this.controller = new Controller
//     this.playerDraw();
//   }
//
//   playerDraw() {
//     var ctx = this.canvas.getContext('2d');
//     ctx.beginPath();
//     ctx.clearRect(0, 0, 500, 500)
//     ctx.arc(this.player.x, this.player.y, 50, 0, 2 * Math.PI);
//     ctx.fill()
//   }
//
// }
//
// document.addEventListener("DOMContentLoaded", function(event) {
//   display = new Display()
//   display.playerDraw();
// });

class Display {
  constructor() {
    this.canvas = document.querySelector('canvas');
    // this.timer = new Timer
    this.controller = new Controller
    this.player = new Player
    this.interval
    this.infiniteDraw()
  }

  infiniteDraw() {
    this.interval = setInterval(this.drawCanvas.bind(this), 10)
  }

  drawCanvas() {
    var ctx = this.canvas.getContext('2d');
    ctx.beginPath();
    ctx.clearRect(0, 0, 500, 500)
    ctx.arc(this.player.x, this.player.y, 50, 0, 2 * Math.PI);
    ctx.fill()
    ctx.font = "30px sans-serif"
    // this.timer.start()
    // ctx.fillText(this.timer.formatTime(), 330, 450)
  }


}
