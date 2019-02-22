const testcanvas = document.getElementById("canvas");
var player = Player(testcanvas);

function loadMenu() {
  let img = new Image();
  img.src = ("./assets/background1.png");
  img.onload = function() {
    ctx.drawImage(img, 0, 0, 800, 700, 0, 0, 800, 700)
  }
  // setInterval(snow.draw, 33);
}
