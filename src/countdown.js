class Countdown {
	constructor(p1, p2, l3, l4, timer) {
		this.count = 3
		this.doCount = false
		this.countTimer
		this.p1 = p1
		this.p2 = p2
		this.l3 = l3
		this.l4 = l4
		this.timer = timer
	}

	threeTwoOne() {
		if (this.count != 0) {
			this.doCount = true
			this.count -= 1
		} else if(this.count === 0) {
			clearInterval(this.countTimer)
			this.count -= 1
			this.p1.moveAllowed = true
			this.p2.moveAllowed = true
			this.l3.moveAllowed = true
			this.l4.moveAllowed = true
			this.timer.start()
			this.doCount = false
		}
	}

	startCountdown() {
		this.countTimer = setInterval(this.threeTwoOne.bind(this), 1000)
	}
}
