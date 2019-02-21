describe("Timer", function() {

  var timer

  beforeEach(function() {
    timer = new Timer
  })

  it("can be instantiated", function() {
    console.log(timer)
    expect(timer instanceof Timer).toBeTruthy()
  })
})
