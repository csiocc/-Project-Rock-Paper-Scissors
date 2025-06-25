// Rock Paper Scissor

// setup

const buttons = document.querySelectorAll(".choicebtn");
let humanInput = 0;
let humanScore = 0;
let computerScore = 0;
outputfield = document.querySelector("output")
let resultdiv = document.createElement("h1")
outputfield.appendChild(resultdiv)
resultdiv.textContent = ("Playerscore: " + humanScore + "  " + "Computerscore: " + computerScore);






//buttonlistener

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        const choice = button.dataset.choice;
        switch(choice) {
            case "rock":
                humanInput = 1;
                console.log("PlayerChoice: Rock");
                playGame();
                break;
            case "paper":
                humanInput = 2;
                console.log("PlayerChoice: Paper");
                playGame();
                break;
            case "scissor":
                humanInput = 3;
                console.log("PlayerChoice: Scissor");
                playGame();
                break;
        }
            
    })
})


//reset score function

function start() {
    console.log("start");
    humanScore = 0;
    computerScore = 0;
}

// play 1 round function

function playGame() {
    let humanChoice = humanInput;
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);
    console.log(result + " " + howwewin(humanChoice, computerChoice));
    if (result == "youwin") humanScore++;
    if (result == "youloose") computerScore++;     
    resultdiv.textContent = ("Playerscore: " + humanScore + "  " + "Computerscore: " + computerScore);
    }

//create function how we win

 
    function howwewin(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) return "!!";
        if (humanChoice === 1 && computerChoice === 3) return "rock wins against scissor";
        if (humanChoice === 2 && computerChoice === 1) return "paper wins against rock";
        if (humanChoice === 3 && computerChoice === 2) return "scissor wins against paper";
        if (computerChoice === 1 && humanChoice === 3) return "scissor looses against rock";
        if (computerChoice === 2 && humanChoice === 1) return "rock looses against paper";
        if (computerChoice === 3 && humanChoice === 2) return "paper looses against scissor";
    } 

    function scoreboard(humanScore, computerScore) {
        if (humanScore > computerScore) return ("Player:" + humanScore + " Player Wins!" + "\nComputer:" + computerScore );
        if (humanScore < computerScore) return ("Player:" + humanScore + "\nComputer:" + computerScore + " Computer Wins!");
        if (humanScore === computerScore) return ("Player:" + humanScore + "\nComputer:" + computerScore + "\nDraw! Play again!");
        
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


// get the winner function


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
  


