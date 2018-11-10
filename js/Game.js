//create game class
class Game {
	//pass missed var and phrases into game 
	constructor(missed, phrases) {
		this.missed = missed; //keep track of guesses
		//for each phrase in the array create a new phrase object 
		this.phrases = phrases.map((phrase) => new Phrase(phrase));
		//create an array to store guess 
        this.storage = [];
	}
	//select a random phrase from array 
	getRandomPhrase() {
		//store games phrases in array 
		let arr = this.phrases
		
		var random = arr[Math.floor(Math.random() * arr.length)];
		return random;
	}
//pass selection into handleInteraction 
	handleInteraction(target) {
		//select all keys on page 
		let keybrd = document.getElementsByClassName('key');
		//save keys in an array 
		let keyboard = Array.from(keybrd)
		//if target is an object add it to storage 
		if (typeof target == 'object') {
			this.storage.push(target.key);
			//run function on each key 
			keyboard.forEach((key) => {
				//if key is the same as the innerHTML 
				if (target.key === key.innerHTML) {
					//check to see if letter is in phrase 
					if (this.phrases[0].checkLetter(target.key)) {
						//if so call check functin which calls showletter
						this.phrases[0].checkLetter(target.key),
							//change apearance and see if game is over 
                            key.classList.add('chosen'),

							this.checkForWin();
					} else {
                        var count = 0;
                        for(var i=0; i < this.storage.length; i++){
                            
                            if(this.storage[i]==target.key){
                                count++
                            }
                        }
                    
                            if(count > 1){return
                            }else{
                                //this.storage.push(target.key);
                        //console.log(this.storage)
                        this.removeLife(),
                        key.disabled = true;

							//change element to wrong 
							key.classList.add("wrong")}
					}
				}
			})
		} else {
			//disable selected key 
			event.target.disabled = true;
			//if check letter returns true, letter is present call check letter 
			if (this.phrases[0].checkLetter(target)) {
				//calling check letter shows matches on board 
				this.phrases[0].checkLetter(target);
				//target the selected element 
				event.target.classList.add("chosen")
				//check to see if game is over 
				this.checkForWin();
			} else {
                //if the letter isnt in phrase remove life 
				this.removeLife();
				//change element to wrong 
				event.target.classList.add("wrong")
			}
		}
	}
	removeLife() {
		//remove life, heart and end game 
		let hearts = document.getElementsByClassName('tries');
		hearts[0].remove();
		this.missed++
			if (this.missed == 5) {
				this.gameOver(0);
			}
	}
	checkForWin() {
		//select letter boxes
		let lttrs = document.getElementsByClassName("letter");
		//set count to 0 
		let count = 0
		//for each letter
		for (var i = 0; i < lttrs.length; i++) {
			//if the letter is black 
			if (lttrs[i].style.color == 'black') {
				//increment count
				count++;
				//when count is equal to the length of phrase
				if (count == (lttrs.length)) {
					//run game over func
					this.gameOver(1);
				}
			}
		}
	}
	
	gameOver(outcome) {
		//select game over message
		let gameovermsg = document.getElementById('game-over-message');
		//select overlay
		const ov = document.getElementById('overlay');
		//make overlay visible
		ov.style.visibility = "visible";
		//select start button 
		let sb = document.getElementById('btn__reset');
		//change text on start button 
		sb.innerHTML = "Play again?";
		//if win 
		if (outcome) {
			//append win message and reset button 
			gameovermsg.innerHTML = "Congrats, You win";
			ov.classList.add('win');

		} else {
			//append loss message and reset button 
			gameovermsg.innerHTML = "You lose";
			ov.classList.add('lose');

		}
		
	}
	startGame() {
		//select all keys 
		let key = document.getElementsByClassName('key');
		//turn list to array 
		let keys = Array.from(key);
		//for each key 
		keys.forEach((key) => {
			//set disabled to false
			key.disabled = false;
			//remove wrong class 
			key.classList.remove("wrong"),
			//remove chosen class 
			key.classList.remove("chosen")
		})
		//select random phrase 
		let currentPhrase = this.getRandomPhrase();
		//add random phrase to display 
		currentPhrase.addPhraseToDisplay(currentPhrase.phrase);
		//set missed to zero & clear storage 
        this.missed = 0;
		this.storage= [];
		//reset hearts 
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
