$(document).ready(function() {
  (function() {

    function generateComputerChoice() {
      var computerChoice = Math.floor(Math.random()*3);
      switch (computerChoice) {
      case 0:
        computerChoice = "rock";
        break;
      case 1:
        computerChoice = "paper";
        break;
      case 2:
        computerChoice = "fireball";
        break;
      }
      return computerChoice;
    }

    function compare(player, computer) {
      var result;
      switch (player) {
        case "rock":
          if (computer === "rock") {
            result = "You've reached a DRAW!";
          }
          else if (computer === "paper") {
            result = "Paper covers rock!  DEFEATED";
          }
          else if (computer === "fireball") {
            result = "Rock blocks fireball!  VICTORY";
          }
          break;
        case "paper":
          if (computer === "rock") {
            result = "Paper covers rock!  VICTORY";
          }
          else if (computer === "paper") {
            result = "You've reached a DRAW!";
          }
          else if (computer === "fireball") {
            result = "Fireball burns paper to a crisp!  DEFEATED";
          }
          break;
        case "fireball":
          if (computer === "rock") {
            result = "Rock blocks fireball!  DEFEATED";
          }
          else if(computer === "paper") {
            result = "Fireball burns paper to a crisp!  VICTORY";
          }
          else if(computer === "fireball") {
            result = "You've reached a DRAW!";
          }
          break;
      }
      return result;
    }

    function generateOutput(playerChoice) {
      var computerChoice = generateComputerChoice();
      var result = compare(playerChoice, computerChoice);

      $("#playerChoice").text(playerChoice);
      $("#playerChoice").removeClass(); // Removes all classes
      $("#playerChoice").addClass(playerChoice);

      $("#computerChoice").text(computerChoice);
      $("#computerChoice").removeClass();
      $("#computerChoice").addClass(computerChoice);

      $("#result").text(result);
    }

    $("#rockChoice").click(function() {
      generateOutput("rock");
    });

    $("#paperChoice").click(function() {
      generateOutput("paper");
    });

    $("#fireballChoice").click(function() {
      generateOutput("fireball");
    });

    // Clears the results
    $("#replay").on("click", function() {
      $("#playerChoice").text("");
      $("#computerChoice").text("");
      $("#result").text("");
    });

  })();
});
