// business logic
var randomize = function() {
  return Math.floor(Math.random() * 6) + 1;
}

//player constructor
function Player() {
  this.playerName;
  this.roll = 0;
  this.tempScore = 0;
  this.totalScore = 0;
}

//checks if 1 is rolled
Player.prototype.roll1 = function() {
  if (this.roll === 1) {
    this.tempScore = 0;
    alert("Oops! you rolled a 1, your turn is over!")
  } else {
    this.tempScore += this.roll;
  }
}

//enables player to hold and let the other player play
Player.prototype.hold = function() {
  this.totalScore += this.tempScore;
  this.tempScore = 0;
  alert("Your turn is over!")
}

//checks if the total score has reached 100
Player.prototype.winnerCheck = function() {
  if (this.totalScore >= 100) {
    alert("Congratulations You Are The Winner!")
  }
}

$(document).ready(function() {
      var player1 = new Player("Player 1");  //A new parameter for the function Player
      var player2 = new Player("Player 2");

      //display the players' name on the palyer section
      $("button#play-game").click(function(event){
        var player1Name = $(".player1Name").val();
        var player2Name = $(".player2Name").val();

        player1.playerName = player1Name;
        player2.playerName = player2Name;

        $("#name1").text(player1Name);
        $("#name2").text(player2Name);
      })

      //player1 temporary scores
      $("button#dieroll1").click(function(event) {
        player1.roll = randomize();
        $(".roll1").text(player1.roll);
        player1.roll1();
        $(".temp1").text(player1.tempScore);
        player1.winnerCheck();
      });

      //player2 temporary scores
      $("button#dieroll2").click(function(event) {
        player2.roll = randomize();
        $(".roll2").text(player2.roll);
        player2.roll1();
        $(".temp2").text(player2.tempScore);
        player2.winnerCheck();
      });

      //player1 total scores
      $("button#hold1").click(function(event) {
        player1.hold();
        $(".tot1").text(player1.totalScore);
        $(".roll1").empty();
        $(".temp1").empty();
        player1.winnerCheck();
      });

      //player2 total scores
      $("button#hold2").click(function(event) {
        player2.hold();
        $(".tot2").text(player2.totalScore)
        $(".roll2").empty();
        $(".temp2").empty();
        player2.winnerCheck();
      });

      //clear all values for a new GAME
      $("button.refresh").click(function(event){
        $(".roll1").empty();
        $(".temp1").empty();
        $(".tot1").empty();
        $(".roll2").empty();
        $(".temp2").empty();
        $(".tot2").empty();
        $(".player1Name").val("");
        $(".player2Name").val("");
        $("#name1").empty();
        $("#name2").empty();
      });

});
