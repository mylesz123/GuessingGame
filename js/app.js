// This file selects DOM elements, adds event handlers and restarts the game 

//create variable that stores reset button 
const start = document.getElementById('btn__reset');
//when start is clicked call a function to reset the display 
start.addEventListener('click', resetDisplay);
//store all elements with a class of key in a list called keys 
let keys = document.getElementsByClassName('key');
//select start button and focus on it so game can be started by pressing enter 
document.getElementById("btn__reset").focus();

//loop through the list of on screen keys 
for(var i=0; i < keys.length; i++){
    //when  key is clicked, call the mark button function 
    keys[i].addEventListener('click',markButton)
} 

//store the keyboard div in variable
const keyb = document.getElementById('qwerty');
//display keyboards in block 
keyb.style.display = 'block';

//create an array of phrases for the game 
let phrases =["hop skip and a jump", "built ford tough","born to be wild","bad to the bone"];
//create an instance of the game object with no misses and an array of phrases
let gameOne = new Game(0,phrases);


//this function resets the display when the game is started
function resetDisplay() {
//select and store the overlay in a variable 
const ov = document.getElementById('overlay');
//hide overlay 
ov.style.visibility = "hidden";
//call game object's start function 
gameOne.startGame();
}

//create a function that changes the button when it is clicked
function markButton(){
//store value of letter in the selected button   
let selection = event.target.innerHTML;   
//pass button into games handle interaction function 
gameOne.handleInteraction(selection);
}


//give keyboard functionality to game 
//watch document for keypresses and pass event to function 
document.addEventListener('keypress',(e)=>{
    //handle interaction with the pressed key 
    gameOne.handleInteraction(e);
    
}) 

let hearts = document.getElementsByClassName('tries'); 
let squares = document.getElementsByClassName('letter');

