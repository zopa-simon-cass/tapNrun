describe("Player", () => {

  describe("Start position", () => {

    it("starting positions is zero", () => {
      var simon = new Player();
      expect(simon.position).toEqual(0);
    });

  });

});
