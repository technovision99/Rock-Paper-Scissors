import { game, gameArray } from "./app.js";


let indexOfArray = 0;
let charIndex = 0;
let backspace = false;
let speedForward = 100;
let speedWait = 500;
let speedBackspace = 50;
let textDone = false;
const gameContainer = document.querySelector(".game-container");
const rockButton = document.createElement("button");
rockButton.classList.add("rock");
const paperButton = document.createElement("button");
paperButton.classList.add("paper");
const scissorButton = document.createElement("button");
scissorButton.classList.add("scissors");
rockButton.textContent = "ROCK";
paperButton.textContent = "PAPER";
scissorButton.textContent = "SCISSORS";
console.log(gameContainer.childNodes);
const textArray = ["You have only one chance...", "This is it. A life or death battle...", "Will you perish?", "Or will you triumph?", "Let the games begin..."];

function typeWrite(input, array) {

    textDone = false;
    const element = document.querySelector(input);
    let string = array[indexOfArray];
    element.classList.add("cursor");
    if (indexOfArray == array.length) {
        indexOfArray = 0;
        charIndex = 0;
        backspace = false;
        textDone = true;
        element.classList.remove("cursor");
        createButtons();
        return;
    }
    if (!backspace) {
        if (charIndex < string.length) {
            element.textContent = (element.textContent + string.charAt(charIndex));
            charIndex++;
            setTimeout(() => { typeWrite(input, array); }, speedForward);
        }
        else if (charIndex == string.length) {
            backspace = true;
            setTimeout(() => { typeWrite(input, array); }, speedWait);
        }
    }
    else {
        if (element.textContent.length > 0) {
            element.textContent = element.textContent.substring(0, element.textContent.length - 1);
            setTimeout(() => { typeWrite(input, array); }, speedBackspace);
        }
        else {
            charIndex = 0;
            backspace = false;
            indexOfArray++;
            setTimeout(() => { typeWrite(input, array) }, speedForward);
        }
    }

}
typeWrite(".text-content", textArray);
function createButtons() {
    if (textDone) {


        gameContainer.appendChild(rockButton);
        gameContainer.appendChild(paperButton);
        gameContainer.appendChild(scissorButton);
    }
}
function removeButtons() {
    console.log(gameContainer.childNodes.length > 1);
    if (gameContainer.childNodes.length > 1) {
        gameContainer.removeChild(rockButton);
        gameContainer.removeChild(paperButton);
        gameContainer.removeChild(scissorButton);
    }

}
rockButton.addEventListener("click", () => {
    removeButtons();
    game("rock");
    typeWrite(".text-content", gameArray);

})
paperButton.addEventListener("click", () => {
    removeButtons();
    game("paper");
    typeWrite(".text-content", gameArray);

})
scissorButton.addEventListener("click", () => {
    removeButtons();
    game("scissors");
    typeWrite(".text-content", gameArray);

})