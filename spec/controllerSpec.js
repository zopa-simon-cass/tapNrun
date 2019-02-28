describe("Controller", () => {

  beforeEach(() => {
    controller = new Controller
  })

  it("controller class has access to the querySelector", () => {
    expect(controller.canvas).toEqual(document.getElementById('canvas'));
  });

});
