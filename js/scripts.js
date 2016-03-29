//business logic//Player
var board = ["blank","blank","blank","blank","blank","blank",
"blank","blank","blank"];

function Player(mark) {
  this.mark = mark;

this.click = function(cellValue) {
  var cellValue = this.id
   };
 };
var player1 = new Player("X");
player1.click(function() {
});//should return X
var player2 = new Player("O");
player2.click(board);//should return O
//Space
//Board

var winScenarios = [
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
