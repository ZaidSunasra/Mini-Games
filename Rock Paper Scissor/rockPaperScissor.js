let userOption = "";
let pcOption = "";
let pcScore = 0, userScore = 0;

for(let i=0; i<3; i++){
    document.querySelectorAll(".option")[i].addEventListener("click", getImage);
}

function getImage(){
    document.getElementById("remark").textContent = "";
    userOption = this.classList[1];
    console.log(this.classList[1])
    document.querySelector(".userSelection").setAttribute("src","Images/"+userOption+".jpeg");

    let randomNumber = Math.floor(Math.random() * 3);
    let optionArray = ["rock", "paper", "scissor"];
    pcOption = optionArray[randomNumber];
    document.querySelector(".pcSelection").setAttribute("src","Images/"+pcOption+".jpeg");
    
    checkWinner();
}

function checkWinner(){
    if(userOption === pcOption){
        document.getElementById("score").textContent = `Score: ${userScore} - ${pcScore}`;
    }
    else if(userOption == "rock" && pcOption == "scissor"){
        userScore = userScore + 1;
        document.getElementById("score").textContent = `Score: ${userScore} - ${pcScore}`;
    }
    else if(userOption == "paper" && pcOption == "rock"){
        userScore = userScore + 1;
        document.getElementById("score").textContent = `Score: ${userScore} - ${pcScore}`;
    }
    else if(userOption == "scissor" && pcOption == "paper"){
        userScore = userScore + 1;
        document.getElementById("score").textContent = `Score: ${userScore} - ${pcScore}`;
    }
    else if(pcOption == "rock" && userOption == "scissor"){
        pcScore = pcScore + 1;
        document.getElementById("score").textContent = `Score: ${userScore} - ${pcScore}`;
    }
    else if(pcOption == "paper" && userOption == "rock"){
        pcScore = pcScore + 1;
        document.getElementById("score").textContent = `Score: ${userScore} - ${pcScore}`;
    }
    else if(pcOption == "scissor" && userOption == "paper"){
        pcScore = pcScore + 1;
        document.getElementById("score").textContent = `Score: ${userScore} - ${pcScore}`;
    }
    nextRound();
}

function nextRound(){
    if(userScore >=5){
        document.getElementById("remark").textContent = "User Wins";
        endGame();
    }
    else if(pcScore >=5){
        document.getElementById("remark").textContent = "PC Wins";
        endGame();
    }
    else{
        getImage();
    }
}

function endGame(){
    for(let i=0; i<3; i++){
        document.querySelectorAll(".option")[i].removeEventListener("click", getImage);
    }   
}
