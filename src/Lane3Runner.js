class Lane3Runner {
  constructor() {
    this.x = 50
    this.y = 332
    this.moveAllowed = false
  }

  move() {
    if (this.moveAllowed === true) {
    this.x += 0.98;
    }
  }

  reset() {
    this.x = 50
    this.y = 332
  }

}
