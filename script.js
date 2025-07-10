

//Pseudo code 

//INIT computerChoice
let computerChoice;
function getComputerChoice(){
    let randomValue = Math.floor(Math.random()*3);
    
    if(randomValue === 0){
        computerChoice = "rock";
        //return computerChoice;
    }else if(randomValue === 1){
        computerChoice ="paper";
        //return computerChoice;
    }else{
        computerChoice = "scissor";
        //return computerChoice;
    }
};

getComputerChoice();

console.log(computerChoice);
//ASSIGN random value to computerChoice
//INPUT userChoice
//TRANSFORM userChoice to lowercase
//COMPARE userChoice and computerChoice
//IF userChoice beats computerChoice THEN userScore++
//IF ELSE computerChoice beats userChoice computerScore++
//ELSE draw, no score
//ITERATE 5 times
//OUTPUT winner