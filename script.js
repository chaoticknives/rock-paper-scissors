// console.log("Hello World"); <- testing

let computerChoice;
let humanChoice;
let computerResult;
let humanResult;

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice (choice) {
    computerChoice = Math.floor(Math.random() * 3) + 1;
    computerResult;

    if (computerChoice === 1) {
        computerResult = "rock";
    }
    else if (computerChoice === 2) {
        computerResult = "paper";
    } 
    else if (computerChoice === 3) {
        computerResult = "scissors";
    }
    else {
        computerResult = "How did you mess up?";
    }
    console.log("Computer choice: " + computerResult);
    return computerResult;
}

function getHumanChoice (choice) {
    humanChoice = prompt("Rock, Paper, or Scissors?")
    humanResult = humanChoice.toLowerCase();
    console.log("Human choice: " + humanResult);
    return humanResult;
}

function playRound(computerChoice, humanChoice) {

    let computerWins = "Computer wins!";
    let humanWins = "Human wins!";
    let tie = "Tie, no one wins or loses!";
    let uhOh = "You messed up!"; //debugging

    // rock vs scissors
    if (computerResult === "rock" && humanResult === "scissors") {
        console.log(computerWins);
    } 
    else if (humanResult === "rock" && computerResult === "scissors") {
        console.log(computerWins);
    }
    // scissors vs paper
    else if (computerResult === "scissors" && humanResult === "paper") {
        console.log(computerWins);
    }
    else if (humanResult === "scissors" && computerResult === "paper") {
        console.log(humanWins);
    }
    // rock vs paper
    else if (computerResult === "rock" && humanResult === "paper") {
        console.log(computerWins);
    }
    else if (humanResult === "rock" && computerResult === "paper") {
        console.log(humanWins);
    }
    // ties
    else if (humanResult === "paper" && computerResult === "paper") {
        console.log(tie);
    }
    else if (humanResult === "rock" && computerResult === "rock") {
        console.log(tie);
    }
    else if (humanResult === "scissors" && computerResult === "scissors") {
        console.log(tie);
    }
    else {
        console.log(uhOh);
    }

    return computerChoice;
    return humanChoice;
} 

playRound(humanSelection, computerSelection);

//console.log(getComputerChoice());
//console.log(getHumanChoice());
//getComputerChoice();
//getHumanChoice();