
//store start button in variable 
const start = document.getElementById('btn__reset');
//watch for click on start button and reset the display 
start.addEventListener('click', resetDisplay);
//store keys in variable 
let keys = document.getElementsByClassName('key');
//focus on the start button 
document.getElementById("btn__reset").focus();

//watch for click on all the keys and mark button when they are clicked 
for(var i=0; i < keys.length; i++){
    keys[i].addEventListener('click',markButton)
} 
//store keyboard in variable 
const keyb = document.getElementById('qwerty');
//display keyboards in block 
keyb.style.display = 'block';
//create phrases to add to game 
let phrases =["hop skip and a jump", "built ford tough","born to be wild","bad to the bone"];
//start new game with 0 misses and array of phrases
let gameOne = new Game(0,phrases);//start new game with no missed and array of phrases

//create a function that resets display 
function resetDisplay() {
//store overlay in variable 
const ov = document.getElementById('overlay');
//hide overlay 
ov.style.visibility = "hidden";
//start game created on line 22 
gameOne.startGame();
}

function markButton(){
//store value of clicked button 
    let selection = event.target.innerHTML;   
//call handle interaction on selected button 
gameOne.handleInteraction(selection);

}
//watch for keypress 
document.addEventListener('keypress',(e)=>{
    //handle interaction with key pressed 
    gameOne.handleInteraction(e);
    
}) 
//select hearts 
let hearts = document.getElementsByClassName('tries'); 
let squares = document.getElementsByClassName('letter');

