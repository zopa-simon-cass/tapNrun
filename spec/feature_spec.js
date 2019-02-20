describe("tapNrun", function() {

	describe("Start game", function() {

    it("starts when clicked", function() {
      var startRace = new Game()
      expect(document.getElementById("startgame").onclick).toEqual(true)
    })
  })
})
