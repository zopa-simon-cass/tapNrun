describe("Display", () => {

	beforeEach(() => {
		display = new Display
	})

	it("Display class is instanciated with a new instance of player", () => {
		expect(display.player).toEqual(jasmine.any(Player))
	})

	it("Player 1 x coordinates are initially aligned to the start line", () => {
		expect(display.player.x).toEqual(-20)
	})

  it("Player 2 x coordinates are initially aligned to the start line", () => {
		expect(display.player2.x).toEqual(-20)
	})

  it("Display class is instanciated with a runner in lane 1", () => {
    expect(display.player).toEqual(jasmine.any(Player))
  })

  it("Display class is instanciated with a runner in lane 2", () => {
    expect(display.player2).toEqual(jasmine.any(Player))
  })

	it("Display class is instanciated with a runner in lane 3", () => {
		expect(display.lane3runner).toEqual(jasmine.any(Player))
	})

  it("Display class is instanciated with a runner in lane 4", () => {
    expect(display.lane4runner).toEqual(jasmine.any(Player))
  })


})
