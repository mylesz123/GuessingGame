//when passing function into callback () will run automatically 
class Game {
	constructor(missed, phrases) {
		this.missed = missed; //keep track of guesses
        this.phrases = phrases.map((phrase) => new Phrase(phrase));
        this.storage = [];
	}
	//lives
	//hearts
	//chances 
	getRandomPhrase() {
		let arr = this.phrases
		var random = arr[Math.floor(Math.random() * arr.length)];
		return random;
	}
	//make this accept input from keys and clicks 
	//keys need to select screen item thats the same 
	//clicks just be themself
	handleInteraction(target) {
		//find element with innerHTML that matches letter passed in 
        //manipulate that element 
		let keybrd = document.getElementsByClassName('key');
		let keyboard = Array.from(keybrd)
		if (typeof target == 'object') {
            this.storage.push(target.key);
			keyboard.forEach((key) => {
				//if pressed letter matches onscreen keyboard button 
				if (target.key === key.innerHTML) {
					//check if letter is in phrase 
					if (this.phrases[0].checkLetter(target.key)) {
						//if so call check functin which calls showletter
						this.phrases[0].checkLetter(target.key),
							//change apearance and see if game is over 
                            key.classList.add('chosen'),
                            //key.disabled = true;

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
                        //key.disabled = true;

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
		let lttrs = document.getElementsByClassName("letter");
		let count = 0
		for (var i = 0; i < lttrs.length; i++) {
			if (lttrs[i].style.color == "black") {
				count++;
				if (count == (lttrs.length)) {
					this.gameOver(1);
				}
			}
		}
	}
	gameOver(outcome) {
		let gameovermsg = document.getElementById('game-over-message');
		const ov = document.getElementById('overlay');
		ov.style.visibility = "visible";
		let sb = document.getElementById('btn__reset');
		sb.innerHTML = "Play again?";
		if (outcome) {
			//append win message and reset button 
			gameovermsg.innerHTML = "Congrats, You win";
			// this.startGame();
		} else {
			//append loss message and reset button 
			gameovermsg.innerHTML = "You lose";
			// this.startGame();
		}
		//win message 
		//loss message 
	}
	startGame() {
		//remove chosen & wrong classes from keys 
		let key = document.getElementsByClassName('key');
		let keys = Array.from(key);
		keys.forEach((key) => {
            key.disabled = false;
            key.classList.remove("wrong"),
			key.classList.remove("chosen")
		})
		let currentPhrase = this.getRandomPhrase();
		currentPhrase.addPhraseToDisplay(currentPhrase.phrase);
        this.missed = 0;
        this.storage= [];
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