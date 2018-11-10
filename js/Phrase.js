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
		//fcheck each letter 
		for (var i = 0; i < phray.length; i++) {
			//if array item is not blank add letter box 
			if (phray[i] != " ") {
				list += `<li class="hide letter ${phray[i]}">${phray[i]}</li>`
			} else {
				//if its a space add blank space 
				list += `<li class="hide space"> </li>`
			}
		}
		//close unordered list 
		list += '</ul>';
		let x = document.createElement
		//select area of html to add phrase and set innerHTML 
		let gameboard = document.getElementById('phrase');
		gameboard.innerHTML = list;
	}
	checkLetter(target) {
		//select all letter boxes 
		let lttrs = document.getElementsByClassName("letter");
		//create array 
		let ltrAr = Array.from(lttrs);
		//grab the letters from the html element 
		let innerLet = ltrAr.map((min) => {
			return min.innerHTML
		});
		//variable for phrase on screen 
		let pOs = innerLet.join("");
		//check to see if target matches phrase 
		let regex = new RegExp(target, 'gi');
		let matched = pOs.match(regex);
		if (matched) {
			this.showMatchedLetter(matched[0]);
			return true;
		}
	}
	showMatchedLetter(match) {
		//select  letters in phrase 
		let letters = document.getElementsByClassName("letter");
		//check each letter 
		for (var i = 0; i < letters.length; i++) {
			//if letter in box 
			if (letters[i].innerHTML === match) {
				letters[i].style.color = "black";
			}
		}
		//pass in input, look through phrase to see if it matches any in the 
	}
}

//Warren Leyes, a fellow techdegree student told me about the below function which prevents highlighting letters in the phrase
document.addEventListener("mousedown", function (e) {
	e.preventDefault();
});
