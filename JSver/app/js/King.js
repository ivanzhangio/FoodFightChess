var King = function(playerColour, row, col) {
  var score = 200;
  Piece.call(this, score, playerColour, row, col)
}

King.protoype.copy = function() {
  copy = new King(this.colour, this.row, this.col)
}

King.prototype.updateKingPos(){
  return [this.row, this.col]
}

King.prototype.isCheck = function(move) {
  targets = [Piece.prototype.wTargets, Piece.prototype.bTargets]
  return true

}
