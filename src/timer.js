class Timer {
  constructor() {
    this.milliseconds = 0
    this.offset
    this.now
    this.timePassed
    this.interval
  }

  start () {
    this.offset = Date.now()
    this.interval = setInterval(this.update, 50)
  }

  stop () {
    clearInterval(this.interval)
    this.interval = null
  }

  reset () {
    this.milliseconds = 0
  }

  // delta () {
  //   var now = Date.now()
  //   var timePassed = now - this.offset
  //   this.offset = now
  //   return timePassed
  // }

  update () {
    // var timeGap = delta()
    this.now = Date.now()
    this.timePassed = this.now - this.offset
    this.offset = this.now
    // return timePassed
    this.milliseconds += this.timePassed
    console.log(this.milliseconds)
  }

  formatTime () {
  }

}
