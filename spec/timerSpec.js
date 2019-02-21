describe("Timer", function() {

  var timer

  beforeEach(function() {
    timer = new Timer()
  })

  it("can be instantiated", function() {
    expect(timer).toBeAnInstanceOf(Timer)
  })
})
