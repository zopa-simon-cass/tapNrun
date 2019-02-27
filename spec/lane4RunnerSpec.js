describe("Runner in Lane 4", () => {

  describe("x and y ctx coordinates", () => {

    beforeEach(() => {
      lane4runner = new Lane4Runner();
    })

    it("player has x coordinates", () => {
      expect(lane4runner.x).toEqual(jasmine.any(Number));
    });

    it("player has y coordinates", () => {
      expect(lane4runner.y).toEqual(jasmine.any(Number));
    });

    it("player movement changes x co-ordinates ", () => {
      lane4runner.move();
      expect(lane4runner.x).toEqual(4);
    });

    it("consecutive player movement changes x co-ordinates ", () => {
      lane4runner.move();
      lane4runner.move();
      expect(tom.x).toEqual(16);
    })
  })

})
