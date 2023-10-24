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

