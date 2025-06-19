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
        console.log(result + " " + howwewin(humanChoice, computerChoice));
        if (result == "youwin") humanScore++;
        if (result == "youloose") computerScore++;
        if (i == 4) console.log(scoreboard(humanScore, computerScore));
    }


//create function howwewin
//get humanChoice and ComputerChoice
//call choices and wich choice wins
 
    function howwewin(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) return "!!";
        if (humanChoice === 1 && computerChoice === 3) return "rock wins against scissor";
        if (humanChoice === 2 && computerChoice === 1) return "paper wins against rock";
        if (humanChoice === 3 && computerChoice === 2) return "scissor wins against paper";
        if (computerChoice === 1 && humanChoice === 3) return "rock wins against scissor";
        if (computerChoice === 2 && humanChoice === 1) return "paper wins against rock";
        if (computerChoice === 3 && humanChoice === 2) return "rock wins against scissor";
    } 

    function scoreboard(humanScore, computerScore) {
        return ("Player:" + humanScore + "\nComputer:" + computerScore)
    }

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




