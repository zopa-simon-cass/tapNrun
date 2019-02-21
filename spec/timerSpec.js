describe("Timer", function() {

  var timer

  beforeEach(function() {
    timer = new Timer
  })

  it("can be instantiated", function() {
    expect(timer instanceof Timer).toBeTruthy()
  })

  it("starts at 0", function () {
    expect(timer.count).toEqual("00:00:00")
  })

  it("starts when we call start method", function () { 
    timer.start()
    expect(timer.count).not.toEqual("00:00:00")
  })

})
