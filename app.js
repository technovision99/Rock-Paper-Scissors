let playerWinCount = 0, computerWinCount = 0;
let count = 0;
export const gameArray = [];
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
export function game(input) {
    gameArray = [];
    let playerSelection = input;
    console.log(playerSelection);
    let computerSelection = computerPlay();
    gameArray.push((playRound(playerSelection, computerSelection)));
    console.log(gameArray);
    count++;
    if (count == 5) {
        if (playerWinCount > computerWinCount) {
            gameArray.push(("You won " + playerWinCount + " times and the computer won " + computerWinCount + " times. You win!"));
        }
        else if (computerWinCount > playerWinCount) {
            gameArray.push(("You won " + playerWinCount + "  times and the computer won " + computerWinCount + " times. The computer wins!"));
        }
        else {
            gameArray.push(("You won " + playerWinCount + " times and the computer won " + computerWinCount + "  times. It's a tie!"));
        }
        gameArray.push("Exit the page if you're done, or stay for more games. Your call.");
        playerWinCount = 0;
        computerWinCount = 0;
        count = 0;

    }
    //typeWrite(".text-content",gameArray);


}
