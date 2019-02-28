class Player {
  constructor(y) {
    this.x = -8
    this.y = y
    this.moveAllowed = false
  }

  move() {
    if (this.moveAllowed === true) {
      this.x += 12;
    }
  }

  reset(y) {
    this.x = -8
    this.y = y
  }

}
