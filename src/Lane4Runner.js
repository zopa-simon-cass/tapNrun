class Lane4Runner {
  constructor() {
    this.x = 50
    this.y = 450
    this.moveAllowed = false
  }

  move() {
    if (this.moveAllowed === true) {
    this.x += 0.7;
    }
  }

  reset() {
    this.x = 50
    this.y = 450
  }

}
