let words = ["glide","house","aside","fried","igloo","photo","cried","slide","snake","tiger","fight","right","night","sight","lives","knife","mouse",
"truck","about","alert","argue","beach"];
let currentLetter = 0;
let guessNumber = 0;

let randomNumber = Math.floor(Math.random() * words.length);
let randomWord = words[randomNumber];
// console.log(randomWord);

document.addEventListener("keydown", checkKey);

function checkKey(key){
    document.getElementById("clear").addEventListener("click", clearRow);
    if(key.keyCode >= 65 && key.keyCode <= 90){
        currentLetter++;
        document.getElementById(currentLetter).textContent = key.key;
        if(currentLetter % 5 == 0){
            document.removeEventListener("keydown", checkKey);
            document.getElementById("submit").addEventListener("click", checkAnswer);   
        }
    }
    else if(key.key == "Backspace"){
        if(currentLetter >= (5*guessNumber) + 1){
            document.getElementById(currentLetter).textContent = "";
            currentLetter--;
        }
    }
}

function checkAnswer(){
    document.getElementById("clear").removeEventListener("click", clearRow);
    document.getElementById("submit").removeEventListener("click", checkAnswer);
    let inputWords = [
        document.getElementById(currentLetter-4).textContent, document.getElementById(currentLetter-3).textContent,
        document.getElementById(currentLetter-2).textContent, document.getElementById(currentLetter-1).textContent,
        document.getElementById(currentLetter).textContent
        ];
    let selectedWord = [
        randomWord[0], randomWord[1], randomWord[2], randomWord[3], randomWord[4]
    ];
    for(let i=0; i<5; i++){
        if(inputWords[i] == selectedWord[i]){
            document.getElementById(guessNumber*5+1+i).classList.add("rightPlace");
            selectedWord[i] = "-";
        }
    }
    for(let i=0; i<5; i++){
        let letterPresent = "false";
        for(let j=0; j<5; j++){
            if(inputWords[i] == selectedWord[j]){
                letterPresent = "true";
                selectedWord[j] = "-";
                document.getElementById(guessNumber*5+1+i).classList.add("present");
                break;
            }
        }
        if(letterPresent == "false"){
            document.getElementById(guessNumber*5+1+i).classList.add("notPresent");
        }
    }
    checkWinner();
}

function checkWinner(){
    let row = guessNumber * 5;
    if((document.getElementById(row+1).textContent === randomWord[0]) && (document.getElementById(row+2).textContent === randomWord[1]) 
        && (document.getElementById(row+3).textContent === randomWord[2]) && (document.getElementById(row+4).textContent === randomWord[3]) 
        && (document.getElementById(row+5).textContent === randomWord[4]))
    {
        document.querySelector(".notice").textContent = "YOU WON";
        endgame();
    }
    else{
        guessNumber++;
        nextChance();
    }
}

function nextChance(){
    if(guessNumber != 6){
        document.addEventListener("keydown", checkKey);
    }
    else{
        document.querySelector(".notice").textContent = "YOU Lost. The word was " + randomWord + ".";
        endgame();
    }
}

function endgame(){
    document.removeEventListener("keydown", checkKey);
    document.getElementById("submit").removeEventListener("click", checkAnswer);
    document.getElementById("clear").removeEventListener("click", clearRow);
}

function clearRow(){
    while(currentLetter % 5 != 1){
        document.getElementById(currentLetter).textContent = "";
        currentLetter--;
    }
    document.getElementById(currentLetter).textContent = "";
    currentLetter--;
    document.getElementById("clear").removeEventListener("click", clearRow);
    document.getElementById("submit").removeEventListener("click", checkAnswer); 
    document.addEventListener("keydown", checkKey);
}