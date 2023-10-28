function playRound(playerChoice, computerChoice){
    if (playerChoice == computerChoice){
        console.log("reached Draw");
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

function game(string){
    
    let playerChoice = string;
    console.log("The player has chosen " + playerChoice.toLowerCase());
    div_playerChoice.textContent = "The Player has picked " + playerChoice.toLowerCase();
    body.appendChild(div_playerChoice);
    let computerChoice = getComputerChoice();
    console.log("The computer has chosen " + computerChoice.toLowerCase());
    div_computerChoice.textContent = "The Computer has picked " + computerChoice;
    body.appendChild(div_computerChoice);
    return(playRound(playerChoice.toLowerCase(), computerChoice.toLowerCase()));
}


let playerWins = 0;
let computerWins = 0;
const body = document.querySelector("body");
const div_playerChoice = document.createElement("div");
const div_computerChoice = document.createElement("div");
const div_playerWins = document.createElement("div");
const div_computerWins = document.createElement("div");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let outcome = game(button.innerText);
        if (outcome == "Player Wins"){
            playerWins = playerWins+1;
        }
        else if (outcome == "Computer Wins"){
            computerWins = computerWins+1;
        }
        /* console.log("The Player has won " + playerWins + " times");
        console.log("The Computer has won " + computerWins + " times"); */
        div_playerWins.textContent = "The Player has won " + playerWins + " times";
        div_computerWins.textContent = "The Computer has won " + computerWins + " times";
        body.appendChild(div_playerWins);
        body.appendChild(div_computerWins);

        if(playerWins == 5){
            alert("THE PLAYER HAS WON 5 TIMES");
            playerWins = 0;
            computerWins = 0;
            div_playerChoice.remove();
            div_computerChoice.remove();
            div_playerWins.remove();
            div_computerWins.remove();
            
        }
        else if(computerWins == 5){
            alert("THE COMPUTER HAS WON 5 TIMES");
            playerWins = 0;
            computerWins = 0;
            div_playerChoice.remove();
            div_computerChoice.remove();
            div_playerWins.remove();
            div_computerWins.remove();
        }
    })
})

// FORMER CODE

/* for( let games=1; games<6; games++){
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
} */

/* if (playerWins == computerWins){
    console.log("Its a draw. Player and Computer both won " + playerWins + " times")
}
else if(playerWins>computerWins){
    console.log("Player is the winner. Player won " + playerWins + " times. While Computer won " + computerWins + " times")
}
else if(playerWins<computerWins){
    console.log("Computer is the winner. Computer won " + computerWins + " times. While Player won " + playerWins + " times")
} */

/* In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.
1. For now, remove the logic that plays exactly five rounds. DONE
2. Create three buttons, one for each selection. Add an event listener to the buttons that call your 
playRound function with the correct playerSelection every time a button is clicked. 
(you can keep the console.logs for this step) DONE
3. Add a div for displaying results and change all of your console.logs into DOM methods.
4. Display the running score, and announce a winner of the game once one player reaches 5 points. DONE
5. You will likely have to refactor (rework/rewrite) your original code to make it work for this. DONE
That’s OK! Reworking old code is an important part of a programmer’s life. */