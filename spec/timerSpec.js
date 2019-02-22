describe("Timer", function() {

	var timer

	beforeEach(function() {
		timer = new Timer
	})

	it("can be instantiated", function() {
		expect(timer instanceof Timer).toBeTruthy()
	})

	it("starts at 0", function () {
		expect(timer.milliseconds).toEqual(0)
	})

	it("starts when we call start method", function () {
		timer.start()
		expect(timer.interval).not.toEqual(null)
		timer.stop()
	})

	it("stops running the clock", function() {
		timer.start()
		timer.stop()
		expect(timer.interval).toEqual(null)
	})

	it("resets the clock to zero ater stopping", function() {
		timer.start()
		timer.stop()
		timer.reset()
		expect(timer.milliseconds).toEqual(0)
	})

	it("checks that time is updated", function() {
		spyOn(timer, "delta").and.returnValue(132)
		timer.offset = Date.now()
		timer.update()
		expect(timer.milliseconds).toEqual(132)
	})

	it("checks the formt of the timer", function() {
		expect(timer.formatTime()).toEqual("00:00:000")
	})

	//it("delta returns gap in time", function () {
	//var timeOut
	//var timeOut2
	//timer.offset = Date.now()
	////spyOn(timer, "now").and.returnValue(568497)
	////spyOn(timer, "offset").and.returnValue(568490)
	//timeOut = setTimeout(timer.delta.bind(timer), 2000)
	//setTimeout(expect(timer.timePassed).toEqual(2000), 2000)
	////expect(timer.timePassed).toEqual(2000)
	//})

})
