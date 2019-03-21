

var playerScore = 0;
var random = 0;
var number1 = parseInt($("#randomNum").text());
var number2 = parseInt($("#playerNum").text());



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
    var total = playerScore += random;
    $("#playerNum").text(total);
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
