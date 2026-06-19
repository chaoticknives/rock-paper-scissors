// console.log("Hello World"); <- testing

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice (choice) {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    let computerResult;

    if (computerChoice === 1) {
        computerResult = "rock";
    }
    else if (computerChoice === 2) {
        computerResult = "paper";
    } else if (computerChoice === 3) {
        computerResult = "scissors";
    }
    else {
        computerResult = "How did you mess up?";
    }
    console.log(computerResult);
    return computerResult;
}

function getHumanChoice (choice) {
    let humanChoice = prompt("Rock, Paper, or Scissors?")
    let humanResult = humanChoice.toLowerCase();
    console.log(humanResult);
    return humanResult;
}

function playRound(computerChoice, humanChoice) {

    let computerWins = "Computer wins!";
    let humanWins = "Human wins!";

    return computerChoice;
    return humanChoice;
} 

//console.log(playRound(humanSelection, computerSelection));

//console.log(getComputerChoice());
//console.log(getHumanChoice());
//getComputerChoice();
//getHumanChoice();