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

})
