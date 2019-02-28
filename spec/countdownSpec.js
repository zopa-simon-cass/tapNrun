describe("Countdown", () => {

  beforeEach(() => {
    var p1 = new Player
    var p2 = new Player
    var p3 = new Player
    var p4 = new Player
    var timer = new Timer
    countdown = new Countdown(p1, p2, p3, p4, timer)
  })

  it("checks that countdown continues if not zero", () => {
    countdown.threeTwoOne()
    expect(countdown.doCount).toEqual(true)
  })

  it("checks that countdown stops at zero", () => {
    countdown.count = 0
    expect(countdown.doCount).toEqual(false)
  })

  it("checks the startCountdown function starts the timer", () => {
    countdown.startCountdown()
    setTimeout(countdown.threeTwoOne(), 2000)
    expect(countdown.count).toBeLessThan(3)
  })

})
