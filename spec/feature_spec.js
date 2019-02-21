describe("tapNrun", function() {

	describe("Start game", function() {

		it("isnt started until clicked", function() {
			var game = new Game()
			expect(game.isOn()).toBeFalsy();;
		})

    it("starts when started", function() {
      var game = new Game()
			expect(game.isOn()).toBeFalsy();
			// document.getElementById("startgame").onClick
			game.startStop()
      expect(game.isOn()).toBeTruthy();
    })

		it("stops when started, then stopped", function() {
			var game = new Game()
			expect(game.isOn()).toBeFalsy();
			// document.getElementById("startgame").onClick
			game.startStop()
			expect(game.isOn()).toBeTruthy();
			game.startStop()
			expect(game.isOn()).toBeFalsy();

		})
  })
})