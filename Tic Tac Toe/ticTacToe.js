let player1 = "X";
let player2 = "O";
let currentPlayer = player1;
let previousPlayer = player2;

let s1 = document.getElementById("s1");
let s2 = document.getElementById("s2");
let s3 = document.getElementById("s3");
let s4 = document.getElementById("s4");
let s5 = document.getElementById("s5");
let s6 = document.getElementById("s6");
let s7 = document.getElementById("s7");
let s8 = document.getElementById("s8");
let s9 = document.getElementById("s9");
let announce = document.getElementById("score");

for(let i=0; i<9; i++){
    document.querySelectorAll(".space")[i].addEventListener("click", userInput);
    announce.textContent = currentPlayer + " Plays";
}

function userInput(){
    announce.textContent = previousPlayer + " Plays";
    playSound("click");
    this.textContent = currentPlayer;
    this.classList.add("occupied");
    this.classList.add("effect");
    setTimeout(() => {
    this.classList.remove("effect");
    }, 100);
    this.removeEventListener("click", userInput);
    checkWinner();
    if(currentPlayer == player1){
        currentPlayer = player2;
        previousPlayer = player1;
    }
    else{
        currentPlayer = player1;
        previousPlayer = player2;
    } 
}

function checkWinner(){
    if(s1.textContent === s2.textContent && s2.textContent === s3.textContent && s1.textContent === s3.textContent && s1.textContent != "" 
       && s2.textContent != "" && s3.textContent != ""){
        announce.textContent = (currentPlayer + " WINS");
        playSound("win");
        markWinner(s1);
        markWinner(s2);
        markWinner(s3);
        endGame();    
    }
    else if(s4.textContent === s5.textContent && s5.textContent === s6.textContent && s4.textContent === s6.textContent && s4.textContent != ""
       && s5.textContent != "" && s6.textContent != ""){
        announce.textContent = (currentPlayer + " WINS");
        playSound("win");
        markWinner(s4);
        markWinner(s5);
        markWinner(s6);
        endGame();    
    }
    else if(s7.textContent === s8.textContent && s8.textContent === s9.textContent && s7.textContent === s9.textContent && s9.textContent != ""
       && s7.textContent != "" && s8.textContent != ""){
        announce.textContent = (currentPlayer + " WINS");
        playSound("win");
        markWinner(s7);
        markWinner(s8);
        markWinner(s9);
        endGame(); 
    }
    else if(s1.textContent === s4.textContent && s4.textContent === s7.textContent && s1.textContent === s7.textContent&& s1.textContent != ""
       && s2.textContent != "" && s7.textContent != ""){
        announce.textContent = (currentPlayer + " WINS");
        playSound("win");
        markWinner(s1);
        markWinner(s4);
        markWinner(s7);
        endGame();    
    }
    else if(s2.textContent === s5.textContent && s5.textContent === s8.textContent && s2.textContent === s8.textContent && s2.textContent != ""
       && s5.textContent != "" && s8.textContent != ""){
        announce.textContent = (currentPlayer + " WINS");
        playSound("win");
        markWinner(s2);
        markWinner(s5);
        markWinner(s8);
        endGame();    
    }
    else if(s3.textContent === s6.textContent && s6.textContent === s9.textContent && s3.textContent === s9.textContent && s3.textContent != ""
       && s6.textContent != "" && s9.textContent != ""){
        announce.textContent = (currentPlayer + " WINS");
        playSound("win");
        markWinner(s3);
        markWinner(s6);
        markWinner(s9);
        endGame();    
    }
    else if(s1.textContent === s5.textContent && s5.textContent === s9.textContent && s1.textContent === s9.textContent && s1.textContent != ""
       && s5.textContent != "" && s9.textContent != ""){
        announce.textContent = (currentPlayer + " WINS");
        playSound("win");
        markWinner(s1);
        markWinner(s5);
        markWinner(s9);
        endGame();    
    }
    else if(s3.textContent === s5.textContent && s5.textContent === s7.textContent && s3.textContent === s7.textContent && s3.textContent != ""
       && s5.textContent != "" && s7.textContent != ""){
        announce.textContent = (currentPlayer + " WINS");
        playSound("win");
        markWinner(s3);
        markWinner(s5);
        markWinner(s7);
        endGame();    
    }
    else if(s1.textContent != "" && s2.textContent != "" && s3.textContent != "" && s4.textContent != "" && s5.textContent != "" 
       && s6.textContent != "" && s7.textContent != "" && s8.textContent != "" && s9.textContent != ""){
        announce.textContent = ("DRAW");
        endGame();    
    }    
}

function endGame(){
    for(let i=0; i<9; i++){
        document.querySelectorAll(".space")[i].removeEventListener("click", userInput);
    }
    document.addEventListener("keydown", startGame);
    setTimeout(function(){
        announce.textContent = "Press any key to start";
    }, 1000);
}

function startGame(){
    document.removeEventListener("keydown", startGame);
    for(let i=0; i<9; i++){
        let clear = "s"+(i+1);
        document.querySelectorAll(".space")[i].addEventListener("click", userInput);
        document.querySelectorAll(".space")[i].classList.remove("line");
        document.getElementById(clear).textContent="";
        announce.textContent = currentPlayer + " Plays";
    }
}

function playSound(soundName){
    let sound = new Audio("Audio/"+soundName+".wav");
    sound.play();
}

function markWinner(from){
    from.classList.add("line");
}