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

  // describe("Movement", () => {
  //
  //
  // 
  //
  // });

});
