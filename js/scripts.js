//business logic//Player
var Board = ["blank","blank","blank","blank","blank","blank",
"blank","blank","blank"];

function Player(mark) {
  this.mark = mark;

this.click = function(board,cellValue) {
   };
 };

//Interface Logic
var player1 = new Player("X");
player1.mark();//should return X
var player2 = new Player("O");
player2.mark();//should return O
//Space
//Board
var board = new Board();
var testSpace = board.find(1,2);

testSpace.mark(testPlayer);
testSpace.markedBy();
//Game
board.gameOver();

//document.getElementById('tic-tac-toe-game');
//var spots = document.getElementsByClassName('grid-spot');
//var resetBtn = document.getElementById('reset-btn');
//var winScenarios = [
  [0, 1, 2], // first row across
  [3, 4, 5], // second ""
  [6, 7, 8], // third ""
  [0, 3, 6], // first column down
  [1, 4, 7], // second ""
  [2, 5, 8], // third ""
  [0, 4, 8], // diagonal from left
  [6, 4, 2]  // diagonal from right
];
//remember to use .sort() method on winScenarios array
