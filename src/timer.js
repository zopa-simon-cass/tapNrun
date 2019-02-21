class Timer {
  constructor() {
    this.time = "00:00:00"
    this.milliseconds = 0
    this.offset
    this.interval
  }

  start () {
    this.time = "00:01:35"
    this.count = 0
    this.interval = setInterval(update, 10)
    this.offset = Date.now()
  }

  stop () {
    clearInterval(this.interval)
    this.interval = null
  }

  reset () {
  }

  update () {
    console.log("Hello")
  }

  delta () {
  }

  formatTime () {
  }

}
