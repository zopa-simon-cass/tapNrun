class Game {
  constructor() {
    this.on = false
  }
  isOn() {
    return this.on
  }
  startStop() {
    this.on = !this.on
  }
}
