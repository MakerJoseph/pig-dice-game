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
  this.finalScore = 0;
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
}


$(document).ready(function(){
  $('button#dieroll').click(function(event){
    var value = randomize();
    // var tot1 += value;
    $('.roll1').text(value);
    // $('.tot1').text(tot1);
    if(value === 1){
      alert('Ooops! your turn is over!')

    }
    else {
      var temp += value;
      $('.tot1').text(temp);
    }
  });
});
