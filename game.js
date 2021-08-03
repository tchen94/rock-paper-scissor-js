const computerSelection = computerPlay();
let playerScore = 0;
let cpuScore = 0;


function computerPlay() {
    let selection = Math.floor(Math.random() * 3);
    switch (selection) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissor";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "You Tied!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        return "You Win! Rock beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        cpuScore++;
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        return "You Win! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        cpuScore++;
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        return "You Win! Scissors beats Paper";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        cpuScore++;
        return "You Lose! Scissors beats Paper";
    }
}

function game() {
    while (playerScore + cpuScore != 5) {
        let userInput = prompt("Rock, Paper, or Scissors?");
        console.log(playRound(userInput.toLowerCase(), computerSelection));
    }
    console.log(playerScore > cpuScore ? "You win!" : "You lose!");
}

