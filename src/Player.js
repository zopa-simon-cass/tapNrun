class Player {
  constructor() {
    this.x = Math.round(window.innerWidth * ( -0.002 / 0.3))
    this.y = Math.round(window.innerWidth * ( 0.0008 / 0.1))
  }

  move() {
    this.x += 12;
  }

}
