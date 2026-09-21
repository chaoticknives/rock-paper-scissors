let computerChoice;
let humanChoice;

// setting scores and round to 0
let humanWins = 0;
let computerWins = 0;
let currentRound = 0;

// round responses
let tie = "Tie, no one wins or loses!";
let uhOh = "You messed up!"; //debugging

//final score responses
let computerVictory = "Computer wins the game!";
let humanVictory = "You win the game!";
let tieVictory = "It's a tie :("

// Select score elements
var score = document.querySelector('#score')
var humanScore = document.querySelector('#humanScore');
var computerScore = document.querySelector('#computerScore');

var roundWinner = document.createElement('p');
var gameWinner = document.createElement('p');
score.appendChild(roundWinner);
score.appendChild(gameWinner);

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
    currentRound++;
    round.textContent = currentRound;
    playRound();
});

paper.addEventListener('click', () => {
    humanChoice = "paper";
    currentRound++;
    round.textContent = currentRound;
    playRound();
});

scissors.addEventListener('click', () => {
    humanChoice = "scissors";
    currentRound++;
    round.textContent = currentRound;
    playRound();
})

function playRound(computer, human) {
    humanChoice = humanChoice;
    computerChoice = getComputerChoice();
    console.log(humanChoice);
    console.log(computerChoice);

    // rock vs scissors
    if (computerChoice === "rock" && humanChoice === "scissors") {
        computerWins++;
        computerScore.textContent = computerWins;
        roundWinner.textContent = "You choose scissors and computer choose rock. You lose this round!"
    } 
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanWins++;
        humanScore.textContent = humanWins;
        roundWinner.textContent = "You choose rock and computer choose scissors. You win this round!"
    }
    // scissors vs paper
    else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerWins++;
        computerScore.textContent = computerWins;
        roundWinner.textContent = "You choose paper and computer choose scissors. You lose this round!"
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanWins++;
        humanScore.textContent = humanWins;
        roundWinner.textContent = "You choose scissors and computer choose paper. You win this round!"
    }
    // rock vs paper
    else if (computerChoice === "rock" && humanChoice === "paper") {
        humanWins++;
        humanScore.textContent = humanWins;
        roundWinner.textContent = "You choose paper and computer choose rock. You win this round!"
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerWins++;
        computerScore.textContent = computerWins;
        roundWinner.textContent = "You choose rock and computer choose paper. You lose this round!"
    }
    // ties
    else if (humanChoice === "paper" && computerChoice === "paper") {
       roundWinner.textContent = "You choose paper and computer choose paper. Tie, no points for either!"
    }
    else if (humanChoice === "rock" && computerChoice === "rock") {
       roundWinner.textContent = "You choose rock and computer choose rock. Tie, no points for either!"
    }
    else if (humanChoice === "scissors" && computerChoice === "scissors") {
       roundWinner.textContent = "You choose scissors and computer choose scissors. Tie, no points for either!"
    }
    else {
        console.log(uhOh);
    }

    if (humanWins == 5) {
        gameWinner.textContent = "You won the game!";
    }
    else if (computerWins == 5) {
        gameWinner.textContent = "Computer won the game!";
    }

    return computerChoice;
    return humanChoice;
} 