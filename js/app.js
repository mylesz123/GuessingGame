
//select start button 
const start = document.getElementById('btn__reset');
//add event listener 
//call reset display, create new game object, start game 
start.addEventListener('click', resetDisplay);

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
//hide start screen overlayjj
const ov = document.getElementById('overlay');
ov.style.visibility = "hidden";
gameOne.startGame();
}

function markButton(){
    //disable button on keyboard
    let selection = event.target.innerHTML;   

//when letter is picked disable it and call handleInteraction 

gameOne.handleInteraction(selection);

}

document.addEventListener('keypress',(e)=>{
    gameOne.handleInteraction(e);
    /**let keybrd = document.getElementsByClassName('key');
    let keyboard = Array.from(keybrd)
    keyboard.forEach((key)=>{

        if(e.key === key.innerHTML){

            key.disabled = true;
            key.classList.add('chosen')
        gameOne.handleInteraction(key);   
        }
    }) **/

}) 

let hearts = document.getElementsByClassName('tries'); 
let squares = document.getElementsByClassName('letter');