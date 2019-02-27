describe("Display", () => {

    beforeEach(() => {
      display = new Display
      // player = new Player
    })

    it("Display class is instanciated with a new instance of player", () => {
      expect(display.player).toEqual(jasmine.any(Player));
    });

    it("Player x cooridinates are initially -8", () => {
      expect(display.player.x).toEqual(-8)
    });


  });



});
