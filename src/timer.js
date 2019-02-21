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
    timer.milliseconds = 0
  }

  update () {
    this.milliseconds += delta()
  }

  delta () {
    var now = Date.now()
    var timePassed = this.offset - now
    this.offset = now
    return timePassed
  }

  formatTime () {
  }

}
