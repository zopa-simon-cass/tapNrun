describe("Runner in Lane 3", () => {

  describe("x and y ctx coordinates", () => {

    beforeEach(() => {
      lane3runner = new Lane3Runner();
    })

    it("player has x coordinates", () => {
      expect(lane3runner.x).toEqual(jasmine.any(Number));
    });

    it("player has y coordinates", () => {
      expect(lane3runner.y).toEqual(jasmine.any(Number));
    });

    it("player movement changes x co-ordinates ", () => {
      lane3runner.move();
      expect(lane3runner.x).toEqual(53.4);
    });

    it("consecutive player movement changes x co-ordinates ", () => {
      lane3runner.move();
      lane3runner.move();
      expect(lane3runner.x).toEqual(56.8);
    })

    it("Player reset changes position back to the start line", () => {
      lane3runner.reset();
      expect(lane3runner.x).toEqual(50)
    })
  })

})
