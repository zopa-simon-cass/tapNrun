describe("Player2", ()=> {

	describe("x and y ctx coordinates", () => {

		beforeEach(() => {
			player = new Player2()
		})

		it("player2 has x coordinates", () => {
			expect(player.x).toEqual(jasmine.any(Number))
		})

		it("player 2 has y cooordinates", () => {
			expect(player.y).toEqual(jasmine.any(Number))
		})

		it("player movement changes x co-ordinates ", () => {
			player.moveAllowed = true
			player.move()
			expect(player.x).toEqual(4)
		})

		it("player movement does not change y co-ordinate ", () => {
			player.move()
			expect(player.y).toEqual(160)
		})

		it("Player reset changes position back to the start line", () => {
			player.reset()
			expect(player.x).toEqual(-8)
		})
	})
})
