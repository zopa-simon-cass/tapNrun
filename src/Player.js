function Player(position = 6, distance= 0) {
  this.position = position
  this.distance = distance
}



Player.prototype.move = function() {
  this.distance++;
  this.position++;
}


increment ctx x value by a fixed distance,
