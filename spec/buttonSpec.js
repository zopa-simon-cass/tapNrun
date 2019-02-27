describe("Button", () => {

  describe("is instanisated with", () => {

    beforeEach(() => {
      // tom = new Player();
      // moving = new Movement();
      button = new Button();
    })

    it("xLeft, xRight, yTop, yBottom", () => {
      expect(Object.keys(button)).toContain('xLeft');
      expect(Object.keys(button)).toContain('xRight');
      expect(Object.keys(button)).toContain('yTop');
      expect(Object.keys(button)).toContain('yBottom');
    });

    it("isClicked returns co-ordinates", () => {
      expect(button.isClicked()).toEqual(false);
      // console.log(button.isClicked())
    })
  })
})
