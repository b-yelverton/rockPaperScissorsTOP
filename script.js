function getComputerChoice() {
    const computerOptions = ['rock','paper','scissor'];
    const computerChoice = Math.floor(Math.random()*computerOptions.length)
    return computerOptions[computerChoice];
};

let playerChoice = (prompt("Please enter your choice (Rock, Paper, Scissor)"));
playerChoice = playerChoice.toLowerCase();

const computerChoice=getComputerChoice();

function playRound(playerChoice, computerChoice){
    if (playerChoice === 'rock' && computerChoice === 'rock') {
        return result = "Draw! Rock ties Rock!"
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        return result = "You win! Paper beats rock!"
    } else if (playerChoice === 'scissor' && computerChoice === 'rock') {
        return result = "You lose! Rock beats scissor!"
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        return result = "You lose! Paper beats Rock!"
    } else if (playerChoice === 'paper' && computerChoice === 'paper') {
        return result = "Draw! Paper ties Paper!"
    } else if (playerChoice === 'scissor' && computerChoice === 'paper') {
        return result = "You win! Scissor beats paper!!"
    } else if (playerChoice === 'rock' && computerChoice === 'scissor') {
        return result = "You win! Rock beats scissor!"
    } else if (playerChoice === 'paper' && computerChoice === 'scissor') {
        return result = "You lose! Scissor beats Paper!"
    } else if (playerChoice === 'scissor' && computerChoice === 'scissor') {
        return result = "Draw! Scissor ties Scissor!"
    }
}

console.log(playerChoice);
console.log(computerChoice);

function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    let roundCount = 0;
    while (playerScore < 3 && computerScore <3) {
        let playerChoice = (prompt("Please enter your choice (Rock, Paper, Scissor)"));
        const computerChoice=getComputerChoice();
        playRound(playerChoice, computerChoice)
        if (result.includes('win')) {
            ++playerScore;
            ++roundCount;
        } else if (result.includes('lose')) {
            ++computerScore;
            ++roundCount;
        }
    counter = 'The round number is ' + roundCount;
    console.log(counter)
    console.log(playerScore);
    console.log(computerScore);
};

if (playerScore === 3) {
    return gameResult = "You win the game!"
} else return gameResult = "The computer won the game!"
} 
