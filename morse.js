///////////////////////////////////////////////////
// english / morse code translator
///////////////////////////////////////////////////
//
//


// array of english letters
let englishLettersArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// array of morse code letters
let morseCodeArr = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];


let englishNumbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let morseCodeNumbersArr = ["-----", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----."];

englishLettersArr = englishLettersArr.concat(englishNumbersArr);
morseCodeArr = morseCodeArr.concat(morseCodeNumbersArr);


console.log(englishLettersArr);


//let MorseExp = 0;

// add onclick to translate button
let translateButton = document.getElementById("translate");
translateButton.addEventListener("click", checkLanguage);


// check if user has inputted english or morse code
function checkLanguage() {

    // reg exp to look for letters
    let lettersExp = /[a-zA-Z0-9]/g;

    // get contents of input textarea
    let textInput = document.getElementById("input").value;

    // convert input to uppercase
    textInput = textInput.toUpperCase();

    // check if input contains letters
    if (lettersExp.test(textInput)) {

        // if it does then call the english to morse translation function
        translateEnglishToMorse(textInput);

    } else {
        // if it doesn't then call the morse to english translation
        translateMorseToEnglish(textInput);
    }

}

function translateEnglishToMorse(stringToConvert) {

    // create an empty string to store the translation
    let outputString = "";

    // loop through the input string
    for (let i = 0; i < stringToConvert.length; i++) {

        // loop through the english letters array
        englishLettersArr.forEach((letter, index) => {

            // if the input string letter matches an entry in the english array
            if (letter == stringToConvert[i]) {
                // add the corresponding morse code to the output string
                outputString += morseCodeArr[index];

                // check if we need to add a "/" to separate letters
                // ie. input was longer than 1 letter and we are not at the end
                if (stringToConvert.length > 1 && i < stringToConvert.length - 1) {
                    // add a "/" to the end of the string
                    outputString += " / ";
                }
            }
        });
    }

    // write the translated string to the output area
    document.getElementById("output").value = outputString;

}

function translateMorseToEnglish(stringToConvert){



}