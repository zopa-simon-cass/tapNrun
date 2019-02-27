describe("Player2", ()=> {

  describe("x and y ctx coordinates", () => {

    beforeEach(() => {
      player = new Player2
    })

    it("player2 has x coordinates", () => {
      expect(player.x).toEqual(jasmine.any(Number))
    })

    it("player 2 has y cooordinates", () => {
      expect(player.y).toEqual(jasmine.any(Number))
    })

  })
})
