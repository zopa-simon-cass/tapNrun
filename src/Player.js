class Player {
  constructor() {
    this.x = -8
    this.y = 35
    this.moveAllowed = false
  }

  move() {
    if (this.moveAllowed === true) {
      this.x += 5;
    }
  }

  reset() {
    this.x = -8
    this.y = 35
  }

}
