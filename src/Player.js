class Player {
  constructor() {
    this.x = 100
    this.y = 100
    // this.init = function(){
    //   var canvas = document.querySelector("canvas");
    //   var ctx = canvas.getContext('2d');
    //   ctx.beginPath();
    //   ctx.clearRect(0, 0, 500, 500)
    //   ctx.arc(this.x, this.y, 50, 0, 2 * Math.PI);
    //   ctx.fill();
    // }
    // this.init();
  }

  move() {
    this.x += 5;
    // this.init();
  }

}


















// function Player(position = 6, distance= 0) {
//   this.position = position
//   this.distance = distance
// }
//
//
//
// Player.prototype.move = function() {
//   this.distance++;
//   this.position++;
// }
//
//
// increment ctx x value by a fixed distance,
