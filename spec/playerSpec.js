describe("Player", () => {


  describe("x and y ctx coordinates", () => {

    beforeEach(() => {
      tom = new Player(10, 20 , 12);
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
      expect(tom.x).toEqual(22);
    });

    it("player movement does not change y co-ordinate ", () => {
      tom.move();
      expect(tom.y).toEqual(20);
    });

    it("consecutive player movement changes x co-ordinates ", () => {
      tom.move();
      tom.move();
      expect(tom.x).toEqual(34);
    })

    it("Player reset changes position back to the start line", () => {
      tom.reset(10, 20);
      expect(tom.x).toEqual(10)
    })
  })

})
