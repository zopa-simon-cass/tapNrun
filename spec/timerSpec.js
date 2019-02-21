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

  // it("starts when we call start method", function () {
  //   timer.start()
  //   expect(timer.interval + 1).toEqual(setInterval(timer.update, 10))
  // })

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

  it("checks that time is updated with delta method", function() {
    // timer1 = jasmine.createSpyObj("timer", ["delta"])
    // spyOn(timer, "delta").and.returnValue(132)
    timer.offset = Date.now()
    timer.update()
    expect(timer.milliseconds).toEqual(0)
  })


})
