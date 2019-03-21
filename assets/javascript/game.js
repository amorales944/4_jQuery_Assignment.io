$(document).ready(function() {
  var playerScore = 0;
  var random1;
  var random2;
  var total = 0;
  var number1 = parseInt($("#randomNum").text());
  var number2 = parseInt($("#playerNum").text());

  $("#randomBtn").on("click", function() {
    random1 = Math.floor(Math.random() * (120 - 19) + 1) + 19;
    $("#randomNum").text(random1);
    console.log(random1);
  });
  var randomFunction = function() {
    random2 = Math.floor(Math.random() * (12 - 1) + 1) + 1;
    total = playerScore += random2;
    $("#playerNum").text(total);
  };
  $("img").on("click", function() {
    randomFunction();
    $("#playerNum").text(total);
    if (random1 === total) {
      alert("You Matched, Keep playing");
      window.location.reload();
    }
    if (total > random1) {
      alert("Sorry you lost, you went over.  Try again");
      window.location.reload();
    }
    console.log(total);
  });
});
