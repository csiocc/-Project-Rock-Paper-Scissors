// Rock Paper Scissor

// setup

const buttons = document.querySelectorAll(".choicebtn");
let humanInput = 0;
let humanScore = 0;
let computerScore = 0;
outputfield = document.querySelector(".scoreoutput")
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
    resultdiv.textContent = ("Playerscore: " + humanScore + "  " + "Computerscore: " + computerScore);
    const comparison1 = document.querySelector(".comparisonoutput");
    for (let index = 0; index < 5; index++) {  
        const oldImg = comparison1.querySelector("img");    
        if (oldImg) {
            oldImg.remove();
        }
    }
}

// play 1 round function

function playGame() {
    let humanChoice = humanInput;
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);
    switch1(humanChoice, result)
    switch2(computerChoice, result)
    if (result == "youwin") humanScore++;
    if (result == "youloose") computerScore++;     
    resultdiv.textContent = ("Playerscore: " + humanScore + "  " + "Computerscore: " + computerScore);
    }

// Player pick display
let switch1 = function(humanChoice, result){
    const comparison1 = document.querySelector(".playeroutput");
    const oldImg = comparison1.querySelector("img");
    comparison1.style.backgroundColor = "white";
    if (oldImg) {
        oldImg.remove();
    }

    if (result == "youwin") {
        comparison1.style.backgroundColor = "green";
    }
    if (result == "youloose") {
        comparison1.style.backgroundColor = "red";
    }
    switch (humanChoice) {
        case 1:
            const playeroutput = document.querySelector(".playeroutput")
            const img1 = document.createElement("img");
            rockimg(img1)
            playeroutput.appendChild(img1)
            break;
        case 2:
            const playeroutput2 = document.querySelector(".playeroutput")
            const img2 = document.createElement("img");
            paperimg(img2)
            playeroutput2.appendChild(img2)
            break;
        case 3:
            const playeroutput3 = document.querySelector(".playeroutput")
            const img3 = document.createElement("img");
            scissorimg(img3)
            playeroutput3.appendChild(img3)
            break;
    }
}

// Computer pick display
let switch2 = function(computerChoice, result){
    const comparison1 = document.querySelector(".computeroutput");
    const oldImg = comparison1.querySelector("img");
    comparison1.style.backgroundColor = "white";

    if (oldImg) {
        oldImg.remove();
    }

    if (result == "youloose") {
        comparison1.style.backgroundColor = "green";
    }
    if (result == "youwin") {
        comparison1.style.backgroundColor = "red";
    }

    switch (computerChoice) {
        case 1:
            const computeroutput = document.querySelector(".computeroutput")
            const img1 = document.createElement("img");
            rockimg(img1)
            computeroutput.appendChild(img1)
            break;
        case 2:
            const computeroutput2 = document.querySelector(".computeroutput")
            const img2 = document.createElement("img");
            paperimg(img2)
            computeroutput2.appendChild(img2)
            break;
        case 3:
            const computeroutput3 = document.querySelector(".computeroutput")
            const img3 = document.createElement("img");
            scissorimg(img3)
            computeroutput3.appendChild(img3)
            break;
    }
}

// win img description

let rockimg = function(img1) {
    
    
    img1.setAttribute("src", "rock.png");
    img1.setAttribute("id", "img1");
    img1.setAttribute("border-style", "solid");
    img1.setAttribute("width", "100px");  
    img1.setAttribute("height", "100px");

};

let paperimg = function(img2) {

    img2.setAttribute("src", "paper.png");
    img2.setAttribute("id", "img2");
    img2.setAttribute("alt", "PaperHand");
    img2.setAttribute("width", "100px");  
    img2.setAttribute("height", "100px");

};

let scissorimg = function(img3) {
   
    img3.setAttribute("src", "scissor.png");
    img3.setAttribute("id", "img3");
    img3.setAttribute("alt", "ScissorHand");
    img3.setAttribute("width", "100px");  
    img3.setAttribute("height", "100px");

};
 

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
  


