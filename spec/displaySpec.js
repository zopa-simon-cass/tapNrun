describe("Display", () => {



  describe("Player class", () => {

    beforeEach(() => {
      display = new Display
      player = new Player
    })

  it("Display class is instanciated with a new instance of player", () => {
    expect(display.player).toEqual(jasmine.any(Player));
  });





  it("Player x cooridinates are initially 100", () => {
    expect(player.x).toEqual(100)
  });






});


});
