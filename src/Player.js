class Player {
  constructor() {
    this.x = -55
    this.y = 26
    this.moveAllowed = false
  }

  move() {
    if (this.moveAllowed === true) {
      this.x += 12;
    }
  }

  reset() {
    this.x = -55
    this.y = 26
  }

}
