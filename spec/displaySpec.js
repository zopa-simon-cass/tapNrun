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

    it("Display class is instanciated with a runner in lane 3", () => {
      expect(display.lane3runner).toEqual(jasmine.any(Lane3Runner));
    });


  });



});
