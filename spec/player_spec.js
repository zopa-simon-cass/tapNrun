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

    beforeEach(() =>{
        simon.move();
      });


    it("player moves a distance", () => {
      expect(simon.distance).toEqual(1);
    });

    it("player moves a position", () => {
      expect(simon.position).toEqual(1);
    });

    it ("Player moves distance cumulatively", () => {
      simon.move()
      expect(simon.distance).toEqual(2)
    });

    it ("Player position moves cumulateively", () => {
      simon.move()
      simon.move()
      expect(simon.position).toEqual(3)
    });




  });

});
