// business logic
var randomize = function(){
  return Math.floor(Math.random()*6)+1;
}

//player constructor
function Player(){
  this.PlayerName;
  this.roll = 0;
  this.tempScore = 0;
  this.totalScore = 0;
}

Player.prototype.roll1 = function(){
  if(this.roll === 1){
    this.tempScore = 0;
    alert("Oooops! you rolled a 1, it's next palyer's turn!")
  }
  else{
    this.tempScore += this.roll;
  }
}

Player.prototype.hold = function(){
  this.totalScore += this.tempSore;
  this.tempSore = 0;
  alert("Your turn is over!")
}

Player.prototype.winnerCheck = function (){
  if(this.totalScore >= 100){
    alert("Congratulations You Are The Winner!")
  }
}


$(document).ready(function(){
  $('button#dieroll').click(function(event){

});
