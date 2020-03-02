$(document).ready(function(){

     //display random number

     var random = Math.floor(Math.random() * 102 + 19)
     console.log(random);

     $('matchScore').text(random);

///counter variables
     var playerScore = 0;
     var wins = 0;
     var losses = 0;
///define crystals values
     var roseQuarts = Math.floor(Math.random() * 12 + 1)
     var amethyst = Math.floor(Math.random() * 12 + 1)
     var citrine = Math.floor(Math.random() * 12 + 1)
     var selenite = Math.floor(Math.random() * 12 + 1)
     


     $('#wins').text(wins);
     $('#losses').text(wins);

/// Rest Game function
     function reset() {
          random = Math.floor(Math.random() * 102 * 19);
          console.log(random)
          $('matchScore').text(random);
          roseQuarts = Math.floor(Math.random() * 12 + 1);
          amethyst = Math.floor(Math.random() * 12 + 1);
          citrine = Math.floor(Math.random() * 12 + 1);
          selenite = Math.floor(Math.random() * 12 + 1);
          playerScore = 0;
          $('#totalScore').text(playerScore);
}



     
//display wins
     function confetti() { 
          alert("You've Been Healed!");
          wins++;
          $('#wins').text(wins);
          reset();
     }
//display Losses
     function bummer() {
          alert("Breathe; Try Again!");
          losses++;
          $('#losses').text(losses);
          reset();
     }
     
//create  four event listeners for crystal buttons

     
     $('.roseQuarts').on('click', function () {
          playerScore = playerScore + roseQuarts;
          console.log("Post roseQ click = " + playerScore);
          $('#totalScore').text(playerScore);
          //conditions
          if (playerScore == random) {
               confetti();
          }
          else if (playerScore > random) {
               bummer();
          }
     })
     $('.amethyst').on('click', function () {
          playerScore = playerScore + amethyst;
          console.log("Post amethyst click = " + playerScore);
          $('#totalScore').text(playerScore);
          //conditions
          if (playerScore == random) {
               confetti();
          }
          else if (playerScore > random) {
               bummer();
          }
     })
     $('.citrine').on('click', function () {
          playerScore = playerScore + citrine;
          console.log("Post citrine click = " + playerScore);
          $('#totalScore').text(playerScore);
          //conditions
          if (playerScore == random) {
               confetti();
          }
          else if (playerScore > random) {
               bummer();
          }
     })
     $('.selenite').on('click', function () {
          playerScore = playerScore + selenite;
          console.log("Post citrine click = " + playerScore);
          $('#totalScore').text(playerScore);
          //conditions
          if (playerScore == random) {
               confetti();
          }
          else if (playerScore > random) {
               bummer();
          }
     })



// add score to players total - hide players total score until end of game


//create if function to compare players score matches the random number
//if the number is less than the given random number, game continues.
//if the score is equal to the given random number, player wins.
//if the number is greater than the given random number game, player looses.

//restart the game - set are variable to 0

});