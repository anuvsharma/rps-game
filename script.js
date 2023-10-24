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

