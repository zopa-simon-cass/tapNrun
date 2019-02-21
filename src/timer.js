class Timer {
  constructor() {
    this.milliseconds = 0
    this.offset
    this.interval
  }

  start () {
    this.count = 0
    this.interval = setInterval(this.update, 10)
    this.offset = Date.now()
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
    var now = Date.now()
    var timePassed = now - this.offset
    this.offset = now
    // return timePassed
    this.milliseconds += timePassed
  }

  formatTime () {
  }

}
