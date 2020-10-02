///////////////////////////////////////////////////
// english / morse code translator
///////////////////////////////////////////////////
//
//
// international morse code
//

// array of english letters
let englishArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// array of morse code letters
let morseCodeArr = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

// arrays for numbers
let englishNumbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let morseCodeNumbersArr = ["-----", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----."];

// concat numbers to letters
englishArr = englishArr.concat(englishNumbersArr);
morseCodeArr = morseCodeArr.concat(morseCodeNumbersArr);




// add onclick to translate button
let translateButton = document.getElementById("translate");
translateButton.addEventListener("click", checkLanguage);


// check if user has inputted english or morse code
function checkLanguage() {

    // reg exp to look for english
    let englishExp = /[a-zA-Z0-9]/g;

    // reg exp to look for morse
    let morseExp = /[.-]/g;

    // get contents of input textarea
    let textInput = document.getElementById("input").value;

    // convert input to uppercase
    textInput = textInput.toUpperCase();

    // check if input contains letters
    if (englishExp.test(textInput)) {

        // if it does then call the english to morse translation function
        translateEnglishToMorse(textInput);

    } else {
        // if it doesn't then check for morse
        if (morseExp.test(textInput)) {
            translateMorseToEnglish(textInput);
        } else {
            //display message
            document.getElementById("output").value = "Invalid input - please use English or International Morse Code";
        }
    }

}

function translateEnglishToMorse(stringToConvert) {

    // create an empty string to store the translation
    let outputString = "";

    // loop through the input string
    for (let i = 0; i < stringToConvert.length; i++) {

        // loop through the english letters array
        englishArr.forEach((letter, index) => {

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
    writeToOutput(outputString);

}

function translateMorseToEnglish(stringToConvert) {

    let outputString = "";


    // make array from input by splitting at "   " (3 spaces)
    let arrayToConvert = stringToConvert.split("   ");


    // loop through input array 
    arrayToConvert.forEach((sequence, position) => {

        // compare entries against morse code array
        morseCodeArr.forEach((char, index) => {

            if (char == sequence) {
                // build output string
                outputString += englishArr[index];
            }
        });

    });

    // write the translated string to the output area
    writeToOutput(outputString);

}

function writeToOutput(stringToOutput) {

    if(stringToOutput==""){
        stringToOutput = "Unable to convert"
    }

    document.getElementById("output").value = stringToOutput;

}