describe("Player", () => {
	var simon

  describe("x and y ctx coordinates", () => {

    beforeEach(() => {
      tom = new Player();
    })

    it("player has x coordinates", () => {
      expect(tom.x).toEqual(jasmine.any(Number));
    });

    it("player has y coordinates", () => {
      expect(tom.y).toEqual(jasmine.any(Number));
    });

    it("player movement changes x co-ordinates ", () => {
      tom.move();
      expect(tom.x).toEqual(200);
    });

    it("consecutive player movement changes x co-ordinates ", () => {
      tom.move();
      tom.move();
      expect(tom.x).toEqual(300);
    });


  })

})



// describe("Player", () => {

// 	beforeEach(() =>{
// 		simon = new Player()
// 	})

// 	describe("Start position", () => {

// 		it("starting positions is zero", () => {
// 			expect(simon.position).toEqual(0)
// 		})

// 		it("distance travelled is initially zero", () => {
// 			expect(simon.distance).toEqual(0)
// 		})

// 	})

// 	describe("Movement", () => {

// 		beforeEach(() =>{
// 			simon.move()
// 		})


// 		it("player moves a distance", () => {
// 			expect(simon.distance).toEqual(1)
// 		})

// 		it("player moves a position", () => {
// 			expect(simon.position).toEqual(1)
// 		})

// 		it ("Player moves distance cumulatively", () => {
// 			simon.move()
// 			expect(simon.distance).toEqual(2)
// 		})

// 		it ("Player position moves cumulateively", () => {
// 			simon.move()
// 			simon.move()
// 			expect(simon.position).toEqual(3)
// 		})




// 	})

// })
