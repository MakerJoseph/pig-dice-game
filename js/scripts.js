// business logic
var randomize = function(){
  return Math.floor(Math.random()*6)+1;
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
