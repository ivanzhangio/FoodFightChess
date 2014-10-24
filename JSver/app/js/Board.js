var Board = function() {
  var SQUARE_DIM = 80;
  var NO_ROWS = 10;
  var NO_COLS = 10;
  var instance = null;
  var test;
  img = new Image();
  var drawn;
  var grid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  if (arguments.callee._singletonInstance) //Singleton block
    return arguments.callee._singletonInstance;
  arguments.callee._singletonInstance = this;

  this.draw = function() {
    console.log("board drawn");
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    for (var row = 1; row < NO_ROWS - 1; row++) {
      for (var col = 1; col < NO_COLS - 1; col++) {
        var xPos = (col - 1) * SQUARE_DIM;
        var yPos = (row - 1) * SQUARE_DIM;
        if ((row % 2 == 0 && col % 2 == 0) || (row % 2 != 0 && col % 2 != 0)) {
          context.fillStyle = 'black';
          context.fillRect(xPos, yPos, SQUARE_DIM, SQUARE_DIM);
        } else {
          context.fillStyle = 'white';
          context.fillRect(xPos, yPos, SQUARE_DIM, SQUARE_DIM);
        }
      }
    }

    for (var row = 1; row < NO_ROWS - 1; row++) {
      for (var col = 1; col < NO_COLS - 1; col++) {
        if (grid[row][col] != 0) {
          console.log("Drew :" + grid[row][col] + " at row: " + row +
            " col: " + col);
          grid[row][col].draw();
        }
      }
    }
    drawn = true;
  }

  this.setUpBoard = function() {
    //Place the white pawns
    for (var col = 1; col < NO_COLS - 1; col++) {
      grid[7][col] = new Pawn(0, 7, col);
    }

    //Place the black pawns
    for (var col = 1; col < NO_COLS - 1; col++) {
      grid[2][col] = new Pawn(1, 2, col);
    }

  }

  this.tester = function(num) {
    test = num;
    return test;
  }

  this.tester2 = function() {
    return drawn;
  }

  this.getBoard = function() {
    return grid;
  }

  this.remove = function(row, col) {
    grid[row][col] = 0;
  }

  this.getPiece = function(row, col) {
    console.log()
    if (grid[row][col] != 0) {
      console.log("Returning " + grid[row][col].getName() +
        " from getPiece()");
      return grid[row][col];
    } else if (grid[row][col] == 0) {
      console.log("Nothing here");
      return grid[row][col];
    }
  }

  this.move = function(fromRow, fromCol, toRow, toCol) {
    grid[fromRow][fromCol].move(toRow, toCol);
    grid[toRow][toCol] = grid[fromRow][fromCol];
    grid[fromRow][fromCol] = 0;
    console.log("The location moved to now has a : " + grid[toRow][toCol].getName())
  }

  this.getRows = function() {
    return NO_Of_ROWS;
  }

  this.getCols = function() { //for clarity
    return NO_OF_COLS;
  }
}