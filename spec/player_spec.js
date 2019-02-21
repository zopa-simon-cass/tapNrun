describe("Player", () => {

  beforeEach(() =>{
      simon = new Player();
    });

  describe("Start position", () => {

    it("starting positions is zero", () => {
      expect(simon.position).toEqual(0);
    });

    it("distance travelled is initially zero", () => {
      expect(simon.distance).toEqual(0);
    });

  });

  describe("Movement", () => {

    it("player moves a distance", () => {
      simon.move();
      expect(simon.distance).toEqual(1);
    });

    it("player moves a position", () => {
      simon.move()
      expect(simon.position).toEqual(1);
    });


  });

});
