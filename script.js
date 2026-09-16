let computerChoice;
let humanChoice;

// setting scores to 0
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

function getComputerChoice (choice) {
    let num = Math.floor(Math.random() * 3) + 1;

    if (num === 1) {
        computerChoice = "rock";
    }
    else if (num === 2) {
        computerChoice = "paper";
    } 
    else if (num === 3) {
        computerChoice = "scissors";
    }
    else {
        computerChoice = "How did you mess up?";
    }
    return computerChoice;
}

// select buttons
var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    humanChoice = "rock";
});

paper.addEventListener('click', () => {
    humanChoice = "paper";
});

scissors.addEventListener('click', () => {
    humanChoice = "scissors";
    playRound();
})

function playRound(computer, human) {
    humanChoice = humanChoice;
    computerChoice = getComputerChoice();
    console.log(humanChoice);
    console.log(computerChoice);

    // rock vs scissors
    if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("Computer chose " + computerChoice + " and human chose " + humanChoice);
        console.log(computerWins);
        computerScore++;
    } 
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("Computer chose " + computerResult + " and human chose " + humanChoice);
        console.log(humanWins);
        humanScore++;
    }
    // scissors vs paper
    else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("Computer chose " + computerChoice + " and human chose " + humanChoice);
        console.log(computerWins);
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Computer chose " + computerChoice + " and human chose " + humanChoice);
        console.log(humanWins);
        humanScore++;
    }
    // rock vs paper
    else if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("Computer chose " + computerChoice + " and human chose " + humanChoice);
        console.log(humanWins);
        humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("Computer chose " + computerChoice + " and human chose " + humanChoice);
        console.log(computerWins);
        computerScore++;
    }
    // ties
    else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("Computer chose " + computerChoice + " and human chose " + humanChoice);
        console.log(tie);
    }
    else if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("Computer chose " + computerChoice + " and human chose " + humanChoice);
        console.log(tie);
    }
    else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("Computer chose " + computerChoice + " and human chose " + humanChoice);
        console.log(tie);
    }
    else {
        console.log(uhOh);
    }

    return computerChoice;
    return humanChoice;
} 

/*function playGame(){
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

playGame(); */