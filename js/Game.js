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

handleInteraction(){
//does button clicked match a letter 
//if so show 
this.showMatchedLetter();
this.checkForWin();
//if no, remove life 
this.removeLife();
}

showMatchedLetter(){

}

removeLife(){
//remove life, heart and end game 
let hearts = document.getElementsByClassName('tries'); 
hearts[0].remove();

}
checkForWin(){}
gameOver(){
//win message 
//loss message 
}
startGame(){
    let h = this.getRandomPhrase();
    console.log(h);
    h.addPhraseToDisplay(h.phrase);
    
}
}