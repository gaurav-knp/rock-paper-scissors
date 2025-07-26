let userScore=0;
let compScore=0;
let choices = document.querySelectorAll(".choice");
let UserScorePara = document.querySelector("#user-score");
let CompScorePara = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const rndIdx = Math.floor(Math.random()*3);
    return options[rndIdx];
};



const drawGame = () =>{
    msg.innerText = `Game was Draw! Play again.`;
    msg.style.backgroundColor = "#081b31";
};

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        UserScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        CompScorePara.innerText = compScore;
        msg.innerText = `You Loose! Computer ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    // Generate Computer Choice
    const compChoice = genCompChoice();
    if(userChoice===compChoice){
        //Draw
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice==="rock"){
            // paper,scissors
            userWin = compChoice === "paper"? false : true;
        }else if(userChoice==="paper"){
            // rock,scissors
            userWin = compChoice === "scissors"?false : true;
        }else {
            // paper, rock
            userWin = compChoice === "rock"?false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});