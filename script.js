// Rock Paper Scissor















// 
// create function to play 5 Rounds track score and declare winner at the end
    // create function playGame
    // Set Score Variables for Human and Computer
    // increase score by 1 for each win
    // repeat for 5 rounds stop after 5 rounds
    // call the winner


function playGame() {
    console.log("start")
    const rounds = 5;
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < rounds; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);
        console.log(result);
        if (result == "youwin") humanScore++;
        if (result == "youloose") computerScore++;
        console.log(humanScore, computerScore);
    }


//create function howwin
//get humanChoice and ComputerChoice
//call choices and wich choice wins

 //  function howwewin(humanChoice, computerChoice, playround)
   
    

// create function getComputerChoice
// calculate random value
// determine choice from random value
// return choice

    function getComputerChoice() { 
        let x = Math.random();
        if (x < 0.33) return 1;
        if (x > 0.67) return 2;
        else return 3;
    }

// create function getHumanChoice
// ask for humans choice
// make parameters case-insensitive
// get human choice and return it to the function
// ask again if invalid input

    function getHumanChoice() {

        let Humaninput = prompt("Insert your Choice Rock - Paper - Scissor")
        let Humaninputlower = Humaninput.toLowerCase()
        if (Humaninputlower == "rock") return 1;
        if (Humaninputlower == "paper") return 2;
        if (Humaninputlower == "scissor") return 3;
        alert("invalid Input")
        return getHumanChoice();
    }
// create function to play 1 Round
// define Parameters for humanChoice and computer Choice
// compare choices and declare winner: 


    function playRound(humanChoice, computerChoice) {
        if (computerChoice === humanChoice) return "draw";
        if (
            (humanChoice === 1 && computerChoice === 3) || // rock wins
            (humanChoice === 2 && computerChoice === 1) || // paper wins
            (humanChoice === 3 && computerChoice === 2) // scissor wins
        ) {
            return "youwin";
        } 
        return "youloose";
        
    }   

    
}




