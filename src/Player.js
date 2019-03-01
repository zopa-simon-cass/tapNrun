class Player {
	constructor(x, y, speed) {
		this.x = x
		this.y = y
		this.speed = speed
		this.moveAllowed = false
	}

	move() {
		if (this.moveAllowed === true) {
			this.x += this.speed
		}
	}

	reset(x, y) {
		this.x = x
		this.y = y
	}

}
