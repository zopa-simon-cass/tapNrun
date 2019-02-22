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
		this.interval = setInterval(this.update.bind(this), 10)
	}

	stop () {
		clearInterval(this.interval)
		this.interval = null
	}

	reset () {
		this.milliseconds = 0
	}

	update () {
		var timeGap = this.delta()
		this.milliseconds += timeGap
		var timeFormat = this.formatTime()
		console.log(timeFormat)
	}

	delta () {
		this.now = Date.now()
		this.timePassed = this.now - this.offset
		this.offset = this.now
		console.log(this.timePassed)
		return this.timePassed
	}

	formatTime () {
		var time = new Date(this.milliseconds)
		var minutes = time.getMinutes().toString()
		var seconds = time.getSeconds().toString()
		var milliseconds = time.getMilliseconds().toString()
		if (minutes.length < 2) {
			minutes = "0" + minutes
		}
		if (seconds.length < 2) {
			seconds = "0" + seconds
		}
		while (milliseconds.length < 3) {
			milliseconds = "0" + milliseconds
		}
		return minutes + ":" + seconds + ":" + milliseconds
	}

}
