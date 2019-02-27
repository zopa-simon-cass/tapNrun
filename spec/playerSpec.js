describe("Player", () => {


  describe("x and y ctx coordinates", () => {

    beforeEach(() => {
      tom = new Player();
      tom.moveAllowed = true;
    })

    it("player has x coordinates", () => {
      expect(tom.x).toEqual(jasmine.any(Number));
    });

    it("player has y coordinates", () => {
      expect(tom.y).toEqual(jasmine.any(Number));
    });

    it("player movement changes x co-ordinates ", () => {
      tom.move();
      expect(tom.x).toEqual(-3);
    });

    it("player movement does not change y co-ordinate ", () => {
      tom.move();
      expect(tom.y).toEqual(35);
    });

    it("consecutive player movement changes x co-ordinates ", () => {
      tom.move();
      tom.move();
      expect(tom.x).toEqual(2);
    })

    it("Player reset changes position back to the start line", () => {
      tom.reset();
      expect(tom.x).toEqual(-8)
    })
  })

})
