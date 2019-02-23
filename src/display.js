class Display {
  constructor() {
    this.canvas = document.querySelector('canvas');
    this.player = new Player
    this.playerDraw();
  }

  playerDraw() {
    var ctx = this.canvas.getContext('2d');
    ctx.beginPath();
    ctx.clearRect(0, 0, 500, 500)
    ctx.arc(this.player.x, this.player.y, 50, 0, 2 * Math.PI);
    ctx.fill()
  }

}

document.addEventListener("DOMContentLoaded", function(event) {
  display = new Display()
  display.playerDraw();
});
