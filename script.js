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