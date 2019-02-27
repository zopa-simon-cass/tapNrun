class Player2 {
  constructor() {
    this.x = -8
    this.y = 160
    this.moveAllowed = false
  }

  move() {
    if (this.moveAllowed === true) {
      this.x += 12;
    }
  }

  reset() {
    this.x = -8
    this.y = 160
  }
}
