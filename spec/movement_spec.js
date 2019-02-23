describe("Movement", () => {

  describe("Movement can occur", () => {

    beforeEach(() => {
      tom = new Player();
      moving = new Movement();
    })

    it("player movement changes x co-ordinates ", () => {
      moving.move(tom);
      expect(tom.x).toEqual(105);
    });

    it("consecutive player movement changes x co-ordinates ", () => {
      moving.move(tom);
      moving.move(tom);
      expect(tom.x).toEqual(110);
    })
  })
})
