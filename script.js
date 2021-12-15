// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of possible Characters
var alphabetCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var numericalCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"];
var upperCaseAlpabetCharacters = alphabetCharacters.map(function (x) { return x.toUpperCase() });

var slider = document.getElementById("passLength");
var output = document.getElementById("current");
output.innerHTML = slider.value; // Display the default slider value

var checkUpperCase = document.getElementById("upper-case");
var checkLowerCase = document.getElementById("lower-case");
var checkNumerical = document.getElementById("numerical");
var checkSpecial = document.getElementById("special");

var current = function () {
  output.innerHTML = this.value;
}

slider.addEventListener("input", current);

var desiredLength = parseInt(slider.value); //store current desired password length based on slider position.

var selection = {
  upperCase: checkUpperCase,
  lowerCase: checkLowerCase,
  numerical: checkNumerical,
  special: checkSpecial
};

function generatePassword() {
  var userChoice
  var tempChoice = [];
  var desiredLength = parseInt(slider.value);
  var finalLength


//Included a reduction to length of password since one of each criteria will be added to final array of characters
  if (!selection.upperCase.checked && !selection.lowerCase.checked && !selection.numerical.checked && !selection.special.checked) {
    alert("Please select at least one checkbox to generate password");
  } else if (selection.upperCase.checked && selection.lowerCase.checked && selection.numerical.checked && selection.special.checked) {

    userChoice = upperCaseAlpabetCharacters.concat(alphabetCharacters, numericalCharacters, specialCharacters);
    finalLength = desiredLength - 4; 
  } else if (selection.upperCase.checked && selection.lowerCase.checked && selection.numerical.checked) {

    userChoice = upperCaseAlpabetCharacters.concat(alphabetCharacters, numericalCharacters);
    finalLength = desiredLength - 3;
  } else if (selection.upperCase.checked && selection.lowerCase.checked) {

    userChoice = upperCaseAlpabetCharacters.concat(alphabetCharacters);
    finalLength = desiredLength - 2;
  } else if (selection.upperCase.checked) {

    userChoice = upperCaseAlpabetCharacters;
    finalLength = desiredLength - 1;
  } else if (selection.lowerCase.checked) {

    userChoice = alphabetCharacters;
    finalLength = desiredLength - 1;
  } else if (selection.numerical.checked) {

    userChoice = numericalCharacters;
    finalLength = desiredLength - 1;
  } else {
    userChoice = specialCharacters;
    finalLength = desiredLength - 1;
  };


  // push 1 random element from array based on user password criteria to guarantee at least of the desired character
  if (selection.upperCase.checked) {
    var minIndex = getRandomInt(upperCaseAlpabetCharacters.length - 1);
    var singleIndex = upperCaseAlpabetCharacters[minIndex]
    tempChoice.push(singleIndex);
  }

  if (selection.lowerCase.checked) {
    var minIndex = getRandomInt(alphabetCharacters.length - 1);
    var singleIndex = alphabetCharacters[minIndex];
    tempChoice.push(singleIndex);

  }
  if (selection.numerical.checked) {

    var minIndex = getRandomInt(numericalCharacters.length - 1);
    var singleIndex = numericalCharacters[minIndex]
    tempChoice.push(singleIndex);
  }
  if (selection.special.checked) {
    var minIndex = getRandomInt(specialCharacters.length - 1);
    var singleIndex = specialCharacters[minIndex]
    tempChoice.push(singleIndex);
  }


  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };

  for (var i = 0; i < finalLength; i++) {
    var choiceIndex = getRandomInt(userChoice.length - 1);
    var randomIndex = userChoice[choiceIndex];
    tempChoice.push(randomIndex);
  }

 // Fisher-Yates Javascirpt Shuffle - used on final array to randomise and create a strong password
  function shuffle(array) {
    let currentIndex = array.length, randomIndex;


    while (currentIndex != 0) {


      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;


      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  shuffle(tempChoice);

  password = tempChoice.join('');

  return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
