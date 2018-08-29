//create phrases 
// chose random phrase
//split phrase into letters 
//put letters on board 
class Phrase {

    constructor(phrase){
        this.phrase = phrase; 

}

addPhraseToDisplay(){
 let phray = this.phrase.split("");   
//add letter placeholders to screen when game starts 
//example phrase
//when letter guessed, box is replaced with matched letter 
let list ='<ul>';
for(var i=0; i < phray.length; i++ ){
if(phray[i]!=" "){    
list+= `<li class="hide letter ${phray[i]}">${phray[i]}</li>`
}else{
    list+=`<li class="hide space"> </li>`
}
}
list += '</ul>';
let x = document.createElement
 let gameboard = document.getElementById('phrase');
 console.log(gameboard);
 gameboard.innerHTML = list;
}

checkLetter(){
//does selected letter match 
for(var i=0; i < array.length; i++){

}
}

showMatchedLetter(){
    //when letter is corretly guessed, reveal it 
}

}