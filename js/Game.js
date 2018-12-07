//create game class
class Game {
	//create game constructor that takes a missed variable and a list of phrases
	constructor(missed, phrases) {
		//variable to track incorrect guesses 
		this.missed = missed; 
		//for every phrase in array create a new phrase object 
		this.phrases = phrases.map((phrase) => new Phrase(phrase));
		//create an array to store guessed letters
        this.storage = [];
	}
	//function to select a random phrase from phrases  
	getRandomPhrase() {
		//store phrases in new variable
		let arr = this.phrases
		//create a random number between 0 and last array item 
		//then select phrase 
		var random = arr[Math.floor(Math.random() * arr.length)];
		return random;
	}

//create function to handle clicks 
	handleInteraction(target) {
		//store keys in variable
		let keybrd = document.getElementsByClassName('key');
		//convert list to array 
		let keyboard = Array.from(keybrd)

		//if selected item is an object(keyboard press) 
		if (typeof target == 'object') {
			// store pressed key in array 
			this.storage.push(target.key);
			//for every key on board 
			keyboard.forEach((key) => {
				//if pressed key is the same as on screen key
				if (target.key === key.innerHTML) {
					//see if pressed key is in phrase 
					//checkLetter returns a bool 
					if (this.phrases[0].checkLetter(target.key)) {
						//if selected key is in phrase 
						this.phrases[0].checkLetter(target.key),
							//give key appearance of correct guess 
                            key.classList.add('chosen'),
							//check to see if game is over 
							this.checkForWin();
					} else {//if letter isnt in phrase 
						//create a variable that counts 
                        var count = 0;
                        for(var i=0; i < this.storage.length; i++){
                            
                            if(this.storage[i]==target.key){
                                count++
                            }
                        }
                    
                            if(count > 1){return
                            }else{
                         // remove heart       
						this.removeLife(),
						//disable key 
						key.disabled = true;
						//give key appearance of incorrect guess
						key.classList.add("wrong")}
					}
				}
			})
		} else {//if item is clicked 
			//disable selected key 
			event.target.disabled = true;
			//if check letter returns true, letter is present call check letter 
			if (this.phrases[0].checkLetter(target)) {
				//calling check letter shows matches on board 
				this.phrases[0].checkLetter(target);
				//add class of chosen to clicked button
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

	//function to track misses 
	removeLife() {
		//select heart elements 
		let hearts = document.getElementsByClassName('tries');
		//remove first heart item 
		hearts[0].remove();
		//increment missed tracker
		this.missed++
			if (this.missed == 5) {//when 5 wrong guesses end game 
				this.gameOver(0);
			}
	}

	//create a function that checks if game is won 
	checkForWin() {
		//select letters in phrase 
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
	// create function that ends game pass in a bool 
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
		//if outcome is true add win message, check for win runs gameOver with param of true 
		if (outcome) {
			//add game over message and winning appearance 
			gameovermsg.innerHTML = "Congrats, You win";
			ov.classList.add('win');

		} else {//if outcome is false add loss message to screen 
			//append loss message and reset button 
			gameovermsg.innerHTML = "You lose";
			ov.classList.add('lose');

		}
		
	}
	//create function that starts game 
	startGame() {
		//select all keys 
		let key = document.getElementsByClassName('key');
		//turn list to array 
		let keys = Array.from(key);
		//reset each key by removing all added classes 
		keys.forEach((key) => {
			//remove disabled class from keys 
			key.disabled = false;
			//remove wrong class 
			key.classList.remove("wrong"),
			//remove chosen class 
			key.classList.remove("chosen")
		})
		//select random phrase 
		let currentPhrase = this.getRandomPhrase();
		//call phrase objects get random phrase function 
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
