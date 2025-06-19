// Rock Paper Scissor




// create function getComputerChoice
// calculate random value
// determine choice from random value
// return choice
function getComputerChoice() { 
    x = Math.random();
    if (x < 0.33) return 1;
    if (x > 0.67) return 2;
    else return 3;
}
console.log(getComputerChoice())

// create function getHumanChoice
// ask for humans choice
// get human choice and return it to the function


function getHumanChoice() {

    Humaninput = prompt("Insert your Choice Rock - Paper - Scissor")
    Humaninputlower = Humaninput.toLowerCase()
    if (Humaninputlower == "rock") return 1;
    if (Humaninputlower == "paper") return 2;
    if (Humaninputlower == "scissor") return 3;
    alert("invalid Input")
    return getHumanChoice();
}



// Set Score Variables for Human and Computer



// create function to play 1 Round
// define Parameters for humanChoice and computer Choice
// make parameters case-insensitive
// copare choices and declare winner: 
    // define Parameters for Choices
    // redefine string to a Number
    // compare Numbers to get the Winner
// increment winnerscore by +1



// create function to play 5 Rounds track score and declare winner at the end
    // create function playGame
    // 

let humanChoice = getHumanChoice()
let computerChoice = getComputerChoice()


// function playGame () {
    let humanScore = 0;
    let computerScore = 0;

        function playRound (humanChoice, computerChoice) {
        return result
        }
    




// console.log(humanChoice, computerChoice)