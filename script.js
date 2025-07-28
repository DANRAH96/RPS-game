//Modify scores 
const userScoreDisplay = document.querySelector(".user-points");
const computerScoreDisplay = document.querySelector(".computer-points");

const userChoice = document.querySelector(".users-choice")

//INIT variables
let computerChoice;
let humanChoice;
let computerScore = 0;
let userScore = 0;
//Pseudo code 



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
    return computerChoice;
};

//FUNCTION to play a round
function playRound(humanChoice, computerChoice){
    
 //COMPARE userChoice and computerChoice  
  

    switch(true){
        case (humanChoice == computerChoice):
            console.log("Draw");
            break;
        case(humanChoice == "rock" && computerChoice == "scissor"):
            console.log("You win the round");
            ++userScore;
            break;
        case(humanChoice == "rock" && computerChoice =="paper"):
            console.log("Computer win the round");
            ++computerScore;
            break;
        case(humanChoice == "paper" && computerChoice =="rock"):
            console.log("You win the round");
            ++userScore;
            break;
        case(humanChoice == "paper" && computerChoice =="scissor"):
            console.log("Computer win the round");
            ++computerScore;
            break;
        case(humanChoice == "scissor" && computerChoice =="paper"):
            console.log("You win the round");
            ++userScore;
            break;
         case(humanChoice == "scissor" && computerChoice =="rock"):
            console.log("Computer win the round");
            ++computerScore;
            break;
        
    }
    computerScoreDisplay.textContent = computerScore;
    userScoreDisplay.textContent = userScore;
}
//Add event listener for choice class
userChoice.addEventListener("click", (e)=>{
    humanChoice = e.target.className;
    computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);

    //announce winner
    announceWinner(userScore, computerScore);

    //reset game
    if(userScore == 5 || computerScore == 5){
        userScore = 0;
        computerScore = 0;
    }
})

//Announce winner
function announceWinner(usersScore, computersScore){
    if(usersScore === 5){
        userScore = 0;
        computerScore = 0;
        computerScoreDisplay.textContent = computerScore;
        userScoreDisplay.textContent = userScore;
        alert("You are the winner")
        
        return [computerScore, userScore]
    }else if(computersScore === 5){
        userScore = 0;
        computerScore = 0;
        computerScoreDisplay.textContent = computerScore;
        userScoreDisplay.textContent = userScore;
        alert("The computer takes the win!");
   
    };
}