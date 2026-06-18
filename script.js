// console.log("Hello World"); <- testing

function getComputerChoice (choice) {
    let computerChoice = Math.floor(Math.random() * 3) + 1
    let computerResult

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

    return computerResult;
}

console.log(getComputerChoice());