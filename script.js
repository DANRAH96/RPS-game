

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
};

getComputerChoice();

console.log(computerChoice);

//INPUT userChoice
let humanChoice;
function getHumanChoice(){
    humanChoice = prompt("Enter your choice").toLowerCase();
    console.log(humanChoice);
}
getHumanChoice();
//TRANSFORM userChoice to lowercase
//COMPARE userChoice and computerChoice
//IF userChoice beats computerChoice THEN userScore++
//IF ELSE computerChoice beats userChoice computerScore++
//ELSE draw, no score
//ITERATE 5 times
//OUTPUT winner