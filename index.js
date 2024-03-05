function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice: rock, paper, or scissors");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));

        const result = playRound(playerSelection, computerSelection);
        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
    }

    console.log(`Final Score - You: ${playerScore}, Computer: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
        console.log("Sorry! You lost the game so try again.");
    } else {
        console.log("It's a tie!");
    }
}

game();
