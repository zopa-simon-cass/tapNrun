class Display {
  constructor() {
    this.player = new Player()
  }

  playerInit() {
    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.clearRect(0, 0, 500, 500)
    ctx.arc(this.x, this.y, 50, 0, 2 * Math.PI);
    ctx.fill();
  }

}
