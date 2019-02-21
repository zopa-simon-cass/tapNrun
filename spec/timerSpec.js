describe("Timer", function() {

  var timer

  beforeEach(function() {
    timer = new Timer
  })

  it("can be instantiated", function() {
    expect(timer instanceof Timer).toBeTruthy()
  })

  it("starts at 0", function () {
    expect(timer.time).toEqual("00:00:00")
  })

  it("starts when we call start method", function () {
    timer.start()
    expect(timer.offset).toEqual(Date.now())
  })

  it("stops running the clock", function() {
    timer.start()
    timer.stop()
    expect(timer.interval).toEqual(null)
  })



})
