describe("Movement", () => {

  describe("Movement can occur", () => {

    beforeEach(() => {
      // tom = new Player();
      moving = new Movement();
    })

    it("player movement changes x co-ordinates ", () => {
      moving.move();
      expect(moving.player.x).toEqual(105);
    });

    it("consecutive player movement changes x co-ordinates ", () => {
      moving.move();
      moving.move();
      expect(moving.player.x).toEqual(110);
    })
  })
})
