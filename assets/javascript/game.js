

var playerScore = 0;
var random = 0;

var randomNumber = function (random) {
  random = Math.floor(Math.random() * (12 - 1) + 1) + 1;
  return random
};





$(document).ready(function () {

  $("#randomBtn").on("click", function () {
    random = Math.floor(Math.random() * (120 - 19) + 1) + 19;
    $("#randomNum").text(random);
  });

  $("#jokerOne").on("click", function () {
    random = Math.floor(Math.random() * (12 - 1) + 1) + 1;
    var total = playerScore += random
    $("#playerNum").text(total);


    if (random === playerScore) {
      alert("You WON")
      console.log(playerScore);
    }
    if ("#playerNum" <= "#randomNum") {
      alert("You trash, Looser")
      console.log(playerScore);
    }



  });

  $("#jokerTwo").on("click", function () {
    random = Math.floor(Math.random() * (12 - 1) + 1) + 1;
    var total = playerScore += random
    $("#playerNum").text(total);
  });

  $("#jokerThree").on("click", function () {
    random = Math.floor(Math.random() * (12 - 1) + 1) + 1;
    var total = playerScore += random
    $("#playerNum").text(total);
  });

  $("#jokerFour").on("click", function () {
    random = Math.floor(Math.random() * (12 - 1) + 1) + 1;
    var total = playerScore += random
    $("#playerNum").text(total);
  });


  



});