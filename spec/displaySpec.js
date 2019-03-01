describe("Display", () => {

	beforeEach(() => {
		display = new Display
	})

	it("Display class is instanciated with a new instance of player", () => {
		expect(display.player).toEqual(jasmine.any(Player))
	})

	it("Player x coordinates are initially -8", () => {
		expect(display.player.x).toEqual(-20)
	})

	it("Display class is instanciated with a runner in lane 3", () => {
		expect(display.lane3runner).toEqual(jasmine.any(Player))
	})

  it("Display class is instanciated with a runner in lane 4", () => {
    expect(display.lane4runner).toEqual(jasmine.any(Player))
  })


})
