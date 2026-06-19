let computerChoice;
let humanChoice;
let computerResult;
let humanResult;

let humanScore = 0;
let computerScore = 0;

// round responses
let computerWins = "Computer wins this round!";
let humanWins = "Human wins this round!";
let tie = "Tie, no one wins or loses!";
let uhOh = "You messed up!"; //debugging

//final score responses
let computerVictory = "Computer wins the game!";
let humanVictory = "You win the game!";
let tieVictory = "It's a tie :("

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

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
    return computerResult;
}

function getHumanChoice (choice) {
    humanChoice = prompt("Rock, Paper, or Scissors?")
    humanResult = humanChoice.toLowerCase();
    return humanResult;
}

function playRound(computerChoice, humanChoice) {

    // rock vs scissors
    if (computerResult === "rock" && humanResult === "scissors") {
        console.log("Computer chose " + computerChoice + " and human chose " + humanChoice);
        console.log(computerWins);
        computerScore++;
    } 
    else if (humanResult === "rock" && computerResult === "scissors") {
        console.log("Computer chose " + computerChoice + " and human chose " + humanChoice);
        console.log(humanWins);
        humanScore++;
    }
    // scissors vs paper
    else if (computerResult === "scissors" && humanResult === "paper") {
        console.log("Computer chose " + computerChoice + " and human chose " + humanChoice);
        console.log(computerWins);
        computerScore++;
    }
    else if (humanResult === "scissors" && computerResult === "paper") {
        console.log("Computer chose " + computerChoice + " and human chose " + humanChoice);
        console.log(humanWins);
        humanScore++;
    }
    // rock vs paper
    else if (computerResult === "rock" && humanResult === "paper") {
        console.log("Computer chose " + computerChoice + " and human chose " + humanChoice);
        console.log(humanWins);
        humanScore++;
    }
    else if (humanResult === "rock" && computerResult === "paper") {
        console.log("Computer chose " + computerChoice + " and human chose " + humanChoice);
        console.log(computerWins);
        computerScore++;
    }
    // ties
    else if (humanResult === "paper" && computerResult === "paper") {
        console.log("Computer chose " + computerChoice + " and human chose " + humanChoice);
        console.log(tie);
    }
    else if (humanResult === "rock" && computerResult === "rock") {
        console.log("Computer chose " + computerChoice + " and human chose " + humanChoice);
        console.log(tie);
    }
    else if (humanResult === "scissors" && computerResult === "scissors") {
        console.log("Computer chose " + computerChoice + " and human chose " + humanChoice);
        console.log(tie);
    }
    else {
        console.log(uhOh);
    }

    return computerChoice;
    return humanChoice;
} 

function playGame(){
    for(let round = 1; round < 6; round++){
        let hc = getHumanChoice();
        let cc = getComputerChoice();

        console.log("Round " + round + ": \n" )

        playRound(hc, cc);
    }

    if (humanScore > computerScore){
        console.log("You won the game!")
    }
    else if (computerScore > humanScore){
        console.log("You lost the game :(!")
    }
    else if (computerScore == humanScore){
        console.log("Tie, no one wins OR loses.")
    }
}

playGame(); 

console.log("Final computer score: " + computerScore);
console.log("Final human score: " + humanScore);