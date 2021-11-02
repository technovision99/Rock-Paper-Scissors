let playerWinCount = 0, computerWinCount = 0;
function fixInput(playerSelection) {
    return playerSelection.toLowerCase();
}
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);
    if (randomNumber === 1) {
        return "rock";
    }
    else if (randomNumber === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
function playRound(playerSelection, computerSelection) {
    let playerGuess = fixInput(playerSelection);

    if (playerGuess === "rock" && computerSelection === "paper") {
        computerWinCount++;
        return ("Computer guessed paper and you guessed rock. Computer wins!");


    }
    else if (playerGuess === "rock" && computerSelection === "scissors") {
        playerWinCount++;
        return ("Computer guessed scissors and you guessed rock. You win!");

    }
    else if (playerGuess === "paper" && computerSelection === "scissors") {
        computerWinCount++;
        return ("Computer guessed scissors and you guessed paper. Computer wins!")

    }
    else if (playerGuess === "paper" && computerSelection === "rock") {
        playerWinCount++;
        return ("Computer guessed rock and you guessed paper. You win!");
    }
    else if (playerGuess === "scissors" && computerSelection === "rock") {
        computerWinCount++;
        return ("Computer guessed rock and you guessed scissors. Computer wins!");
    }
    else if (playerGuess === "scissors" && computerSelection === "paper") {
        playerWinCount++;
        return ("Computer guessed paper and you guessed scissors. You win!");
    }
    else {
        return ("Computer guessed " + computerSelection + " and you guessed " + playerGuess + " . It's a tie. Play again");
    }
}
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = fixInput(prompt("Choose Rock, Paper, or Scissors!"));
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerWinCount > computerWinCount) {
        console.log("You won " + playerWinCount + " times and the computer won " + computerWinCount + " times. You win!");
    }
    else if (computerWinCount > playerWinCount) {
        console.log("You won " + playerWinCount + "  times and the computer won " + computerWinCount + " times. The computer wins!");
    }
    else {
        console.log("You won " + playerWinCount + " times and the computer won " + computerWinCount + "  times. It's a tie!");
    }
    playerWinCount = 0;
    computerWinCount = 0;
}