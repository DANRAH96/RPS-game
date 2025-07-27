

//Pseudo code 

//INIT computerChoice
let computerChoice;
//ASSIGN random value to computerChoice
function getComputerChoice(){
    let randomValue = Math.floor(Math.random()*3);
    
    if(randomValue === 0){
        computerChoice = "rock";
    }else if(randomValue === 1){
        computerChoice ="paper";
    }else{
        computerChoice = "scissor";
    }
    console.log(computerChoice);
};





//INPUT userChoice
//TRANSFORM userChoice to lowercase
let humanChoice;
function getHumanChoice(){
   // humanChoice = prompt("Enter your choice").toLowerCase();
    console.log(humanChoice);
}


//INIT score variables
let computerScore = 0;
let userScore = 0;

//FUNCTION to play a round
function playRound(humanChoice, computerChoice){
    
 //COMPARE userChoice and computerChoice  
  

    switch(true){
        case (humanChoice == computerChoice):
            console.log("Draw");
            break;
        case(humanChoice == "rock" && computerChoice == "scissor"):
            console.log("You win the round");
            userScore++;
            break;
        case(humanChoice == "rock" && computerChoice =="paper"):
            console.log("Computer win the round");
            computerScore++;
            break;
        case(humanChoice == "paper" && computerChoice =="rock"):
            console.log("You win the round");
            userScore++;
            break;
        case(humanChoice == "paper" && computerChoice =="scissor"):
            console.log("Computer win the round");
            computerScore++;
            break;
        case(humanChoice == "scissor" && computerChoice =="paper"):
            console.log("You win the round");
            userScore++;
            break;
         case(humanChoice == "scissor" && computerChoice =="rock"):
            console.log("Computer win the round");
            computerScore++;
            break;
        
    }
}



//let numberOfRounds = parseInt(prompt("How many rounds do you want to play?"));
function playGame(){
    while(userScore < 5 &&  computerScore < 5 ){
        getComputerChoice();
        getHumanChoice();

        playRound(humanChoice, computerChoice);
        console.log(userScore);
        console.log(computerScore); 
    }
    if(userScore > computerScore){
        console.log("User wins the game!");
    }else if(computerScore > userScore){
        console.log("Computer wins the game");
    }else {
        console.log("It's a draw!");
    }
}
playGame();
//ITERATE 5 times
//OUTPUT winner

