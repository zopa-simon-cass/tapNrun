function Player(position = 0, distance= 0) {
  this.position = position
  this.distance = distance
}



Player.prototype.move = function() {
  this.distance++;
  return this.distance;
}
