//create phrase object 
class Phrase {
	constructor(phrase) {
		//set phrase by passing in phrase 
		this.phrase = phrase;
	}
	addPhraseToDisplay() {
		//split phrase into an array of letters
		let phray = this.phrase.split("");
		//create unordered list 
		let list = '<ul>';
		//go through each phrase character
		for (var i = 0; i < phray.length; i++) {
			//if array item is not a space add letter box 
			if (phray[i] != " ") {
				//add li with letter as innerHTML
				list += `<li class="hide letter ${phray[i]}">${phray[i]}</li>`
			} else {
				//if its a space add blank space 
				list += `<li class="hide space"> </li>`
			}
		}
		//close unordered list 
		list += '</ul>';
		
		//select area of html to add phrase and set innerHTML 
		let gameboard = document.getElementById('phrase');
		gameboard.innerHTML = list;
	}

	//check selected letter 
	checkLetter(target) {
		//select all letter boxes 
		let lttrs = document.getElementsByClassName("letter");
		//create array of letters in phrase
		let ltrAr = Array.from(lttrs);
		//select actual letter inside li 
		let innerLet = ltrAr.map((min) => {
			return min.innerHTML
		});
		//store letters as phrase 
		let pOs = innerLet.join("");
		//check to see if target matches phrase 
		let regex = new RegExp(target, 'gi');
		let matched = pOs.match(regex);
		if (matched) {
			//if selected letter is in phrase show it 
			this.showMatchedLetter(matched[0]);
			return true;
		}
	}


	showMatchedLetter(match) {
		//select  letters in phrase 
		let letters = document.getElementsByClassName("letter");
		//check each letter 
		for (var i = 0; i < letters.length; i++) {
			//if letter in box matches selected
			if (letters[i].innerHTML === match) {
				//change style so letter is visible
				letters[i].style.color = "black";
			}
		}
	}
}

//Warren Leyes, a fellow techdegree student told me about the below function which prevents highlighting letters in the phrase
document.addEventListener("mousedown", function (e) {
	e.preventDefault();
});
