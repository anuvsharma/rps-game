function playRound(playerChoice, computerChoice){
    if (playerChoice == computerChoice){
        return "It's a draw"
    }
    else if (playerChoice == "rock") {
        if (computerChoice == "scissors"){
            return "Player Wins"
        }
        else{
            return "Computer Wins"
        }
    }
    else if (playerChoice == "paper") {
        if (computerChoice == "rock"){
            return "Player Wins"
        }
        else{
            return "Computer Wins"
        }
    }
    else if (playerChoice == "scissors") {
        if (computerChoice == "paper"){
            return "Player Wins"
        }
        else{
            return "Computer Wins"
        }
    }
}

function getComputerChoice(){
    let numberChoice = Math.floor(Math.random() * 3)
    if (numberChoice == 0){
        return "rock"
    }
    else if (numberChoice == 1){
        return "paper";
    }
    else {
        return "scissors"
    } 
}

function game(){
    
    let playerChoice = prompt("Let's play a game of Rock Paper Scissors! Make a choice")
    console.log("The player has chosen " + playerChoice.toLowerCase())
    let computerChoice = getComputerChoice()
    console.log("The computer has chosen " + computerChoice.toLowerCase())
    return(playRound(playerChoice.toLowerCase(), computerChoice.toLowerCase()))

}

let playerWins = 0
let computerWins = 0

for( let games=1; games<6; games++){
    console.log("Currrently playing game #" + games)
    let outcome = game()
    if (outcome == "Player Wins"){
        playerWins = playerWins+1
    }
    else if (outcome == "Computer Wins"){
        computerWins = computerWins+1
    }
    console.log("The Player has won " + playerWins + " times")
    console.log("The Computer has won " + computerWins + " times")
}

if (playerWins == computerWins){
    console.log("Its a draw. Player and Computer both won " + playerWins + " times")
}
else if(playerWins>computerWins){
    console.log("Player is the winner. Player won " + playerWins + " times. While Computer won " + computerWins + " times")
}
else if(playerWins<computerWins){
    console.log("Computer is the winner. Computer won " + computerWins + " times. While Player won " + playerWins + " times")
}