class Display {
  constructor() {
    this.canvas = document.querySelector("canvas");
    this.player = new Player();
    this.playerInit();
  }

  playerInit() {
      this.canvas.querySelector("canvas");
      var ctx = this.canvas.getContext('2d');
      ctx.beginPath();
      ctx.clearRect(0, 0, 500, 500)
      ctx.arc(this.player.x, this.player.y, 50, 0, 2 * Math.PI);
      ctx.fill()
  }

  // this.canvas.onkeyup = function(e) {
  //   if(e.keyCode == 32) {
  //     this.player.move()
  //   }
  // }

  // addEventListener("keydown", Player.move(), true)


}


document.querySelector("canvas").onload = function(){
  // console.log("fuck");
  display = new Display()
  // console.log(display);
  display.playerInit();
};
