document.addEventListener("DOMContentLoaded", function(event) {

	var user = prompt("Player 1, what is your name?")
	var user2 = prompt("Player 2, what is your name?")

	if (user != null) {
		document.getElementById("player1").innerHTML =
      "Lane 1:  " + user
	}

	if (user2 != null) {
		document.getElementById("player2").innerHTML =
      "Lane 2:  " + user2
	}

	display = new Display()
	display.startDraw()

	display.canvas.addEventListener("mousedown", function () {
		if (display.controller.mouseOn === true) {
			display.countdown.count = 3
			display.countdown.startCountdown()
			display.drawCanvas()
			display.infiniteDraw()
			display.controller.enableControls()
		}
	})

})
