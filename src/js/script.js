"use strict";

function computerPlay() {
  const random_num = Math.floor(Math.random() * 3) + 1;

  switch (random_num) {
    case 1:
      return "Rock";
      break;
    case 2:
      return "Paper";
      break;
    case 3:
      return "Scissors";
      break;
    default:
      return null;
  }
}

function playRound(player_selection, computer_selection) {
  if (player_selection === computer_selection) {
    console.log("There was a Tier. Try again");
  } else if (player_selection === "Paper" && computer_selection === "Rock") {
    console.log("You win! Paper beats Rock");
  } else if (player_selection === "Rock" && computer_selection === "Scissors") {
    console.log("You win! Rock beats Scissors");
  } else if (
    player_selection === "Scissors" &&
    computer_selection === "Paper"
  ) {
    console.log("You win! Scissors beats Paper");
  } else {
    console.log(`You lose! ${computer_selection} beats ${player_selection}`);
  }
}

const player_selection = prompt("Choose either Rock, Paper or Scissors");
const computer_selection = computerPlay();

playRound(player_selection, computer_selection);
console.log(computer_selection);
