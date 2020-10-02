

let english = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V" ,"W", "X", "Y", "Z"];




//let morse =".- / -... / -.-. / -.. / . / ..-. / --. / .... / .. / .--- / -.- / .-.. / -- / -. / --- / .--. / --.- / .-. / ... / - / ..- / ...- / .-- / -..- / -.-- / --..";
//let morseFIX = morse.split(" / ").join(`", "`);
//console.log(morseFIX)

let morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];


let MorseExp = 0;

// add onclick to translate button
let translateButton = document.getElementById("translate");

translateButton.addEventListener("click", checkLanguage);

//console.log(textInput);

function checkLanguage(){

    let lettersExp = /[a-zA-Z]/g;
    let textInput = document.getElementById("input").value;
    textInput = textInput.toUpperCase();
            
    if(lettersExp.test(textInput)){
        
        console.log(textInput);
        translateEnglishToMorse(textInput);
        console.log("english");
    } else {
        translateMorseToEnglish();
    }

}

function translateEnglishToMorse(stringToConvert){

   // match each char against the english string to find index

    let morseString = "";

   for(let i=0;i<stringToConvert.length; i++){

    english.forEach((letter,index)=>{

 
    if(letter==stringToConvert[i]){
        morseString += morseCode[index];
        if(stringToConvert.length>1 && i<stringToConvert.length-1){
            morseString += " / ";
        }
    }

    });


   }

console.log(morseString);

 

}