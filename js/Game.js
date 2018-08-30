//when passing function into callback () will run automatically 
class Game {
constructor(missed,phrases){
    this.missed = missed; //keep track of guesses
    this.phrases = phrases.map((phrase)=> new Phrase(phrase));
}

//lives
//hearts
//chances 

getRandomPhrase(){
    let arr = this.phrases
var random = arr[Math.floor(Math.random()* arr.length)];
return random;
}

handleInteraction(target){
    event.target.disabled = true;
    if(this.phrases[0].checkLetter(target)){
        this.phrases[0].checkLetter(target);
        event.target.classList.add("chosen")
        this.checkForWin();
    }else{
        this.removeLife();
        event.target.classList.add("wrong")

    }

}

removeLife(){
//remove life, heart and end game 
let hearts = document.getElementsByClassName('tries'); 
hearts[0].remove();
this.missed ++
if(this.missed == 5){
    this.gameOver(0);
}
}
checkForWin(){
    let lttrs = document.getElementsByClassName("letter");
    let count = 0 
    for(var i=0; i < lttrs.length; i++){
        console.log(lttrs[i].style.color)
        if(lttrs[i].style.color =="black"){
            count++;
            if (count==(lttrs.length-1)){
                this.gameOver(1);
            }
        }

    }

    

}
gameOver(outcome){
    let gameboard = document.getElementById('phrase');

    if(outcome){
        //append win message and reset button 
        gameboard.innerHTML = `<h1>Congrats, You win</h1>`;
       // this.startGame();
    }else{
        //append loss message and reset button 
        gameboard.innerHTML = `<h1>You lose</h1>`;

       // this.startGame();
    }
//win message 
//loss message 
}

startGame(){
//remove chosen & wrong classes from keys 
let key = document.getElementsByClassName('key');
let keys = Array.from(key);
keys.forEach((key)=>{
    key.classList.remove("chosen"),
    key.classList.remove("wrong");

})

    let currentPhrase = this.getRandomPhrase();
    currentPhrase.addPhraseToDisplay(currentPhrase.phrase);
    this.missed = 0; 
    let hearts = `<ol>
    <li class="tries"><img src="images/liveHeart.png" height="35px" widght="30px"></li>
    <li class="tries"><img src="images/liveHeart.png" height="35px" widght="30px"></li>
    <li class="tries"><img src="images/liveHeart.png" height="35px" widght="30px"></li>
    <li class="tries"><img src="images/liveHeart.png" height="35px" widght="30px"></li>
    <li class="tries"><img src="images/liveHeart.png" height="35px" widght="30px"></li>
</ol>`;
    let heartDiv = document.getElementById('scoreboard');
    heartDiv.innerHTML = hearts;


}
}