
//select start button 
const start = document.getElementById('btn__reset');
const ov = document.getElementById('overlay');
//add event listener 
//call reset display, create new game object, start game 
start.addEventListener('click', ()=>{
// hide overlay 
    ov.style.display = "none";
});

let keys = document.getElementsByClassName('key');



for(var i=0; i < keys.length; i++){
    keys[i].addEventListener('click',markButton)
} 

const keyb = document.getElementById('qwerty');
keyb.style.display = 'block';

let phrases =["hop skip and a jump", "built ford tough","born to be wild","bad to the bone"];
let gameOne = new Game(0,phrases);//start new game with no missed and array of phrases

//add event listeners for keyboard that call mark button 

function resetDisplay() {
//hide start screen overlay
}

function markButton(){
    let selection = event.target.innerHTML;    
    console.log(selection);

//when letter is picked disable it and call handleInteraction 
gameOne.handleInteraction(selection);

}


let hearts = document.getElementsByClassName('tries'); 
let squares = document.getElementsByClassName('letter');