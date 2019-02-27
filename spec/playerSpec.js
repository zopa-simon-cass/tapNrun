describe("Player", () => {


  describe("x and y ctx coordinates", () => {

    beforeEach(() => {
      tom = new Player();
    })

    it("player has x coordinates", () => {
      expect(tom.x).toEqual(jasmine.any(Number));
    });

    it("player has y coordinates", () => {
      expect(tom.y).toEqual(jasmine.any(Number));
    });

    it("player movement changes x co-ordinates ", () => {
      tom.move();
      expect(tom.x).toEqual(-8);
    });

    it("player movement does not change y co-ordinate ", () => {
      tom.move();
      expect(tom.y).toEqual(35);
    });

    it("consecutive player movement changes x co-ordinates ", () => {
      tom.move();
      tom.move();
      expect(tom.x).toEqual(-8);
    })
  })

})
