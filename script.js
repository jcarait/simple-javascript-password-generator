// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of possible Characters
var alphabetCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var numericalCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"];
var upperCaseAlpabetCharacters = alphabetCharacters.map(function (x) { return x.toUpperCase() });

console.log(upperCaseAlpabetCharacters);

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


checkUpperCase.addEventListener("change", function () {
  if (this.checked) {
    console.log("Upper case is checked");
  } else {
    console.log("upper case is not checked");
  }
});

checkLowerCase.addEventListener("change", function () {
  if (this.checked) {
    console.log("lower case is checked");
  } else {
    console.log("lower case is not checked");
  }
});

checkNumerical.addEventListener("change", function () {
  if (this.checked) {
    console.log("numerical is checked");
  } else {
    console.log("numerical is not checked");
  }
});

checkSpecial.addEventListener("change", function () {
  if (this.checked) {
    checkSpecial.value = true;
  } else {
    return false;
  }
});

var desiredLength = parseInt(slider.value); //store current desired password length based on slider position.

var selection = {
  upperCase: checkUpperCase,
  lowerCase: checkLowerCase,
  numerical: checkNumerical,
  special: checkSpecial
};



console.log(selection);

function generatePassword() {
  var userChoice
  var tempChoice = [];
  var output = "";
  var desiredLength = parseInt(slider.value); 

  if (!selection.upperCase.checked && !selection.lowerCase.checked && !selection.numerical.checked && !selection.special.checked) {
    alert("Please select at least one checkbox to generate password");
  } else if (selection.upperCase.checked && selection.lowerCase.checked && selection.numerical.checked && selection.special.checked) {

    userChoice = upperCaseAlpabetCharacters.concat(alphabetCharacters, numericalCharacters, specialCharacters);
    console.log(userChoice);
  } else  if (selection.upperCase.checked && selection.lowerCase.checked && selection.numerical.checked) {

    userChoice = upperCaseAlpabetCharacters.concat(alphabetCharacters, numericalCharacters);
    console.log(userChoice);
  } else if (selection.upperCase.checked && selection.lowerCase.checked) {

    userChoice = upperCaseAlpabetCharacters.concat(alphabetCharacters);
    console.log(userChoice);
  } else if (selection.upperCase.checked) {

    userChoice = upperCaseAlpabetCharacters;
    console.log(userChoice);
  } else if (selection.lowerCase.checked) {

    userChoice = alphabetCharacters;
    console.log(userChoice);
  } else if (selection.numerical.checked) {
    
    userChoice = numericalCharacters;
    console.log(userChoice);
  } else {
    userChoice = specialCharacters;
    console.log(userChoice);
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };

  choiceIndex = getRandomInt(userChoice.length - 1);
  

  for (var i = 0; i < desiredLength; i++) {
    randomIndex = userChoice[choiceIndex];
      tempChoice.push(randomIndex);
  }

  console.log(tempChoice);
}






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
