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

var length = parseInt(slider.value); //store current desired password length based on slider position.

var selection = {
  length: parseInt(slider.value),
  upperCase: checkUpperCase,
  lowerCase: checkLowerCase,
  numerical: checkNumerical,
  special: checkSpecial
}



console.log(selection);

function generatePassword() {
  var userChoice = [];
  var output = "";

  if (!selection.upperCase.checked && !selection.lowerCase.checked && !selection.numerical.checked && !selection.special.checked) {
    alert("Please select at least one checkbox to generate password");
  } else {
    console.log("Generating Password");
  }

  if (selection.upperCase.checked && !selection.lowerCase.checked && !selection.special.checked) {

    userChoice.push(upperCaseAlpabetCharacters);
    console.log(userChoice);
  } else if (!selection.upperCase.checked && selection.lowerCase.checked && !selection.special.checked) {

    userChoice.push(alphabetCharacters);
    console.log(userChoice);
  } else if (!selection.upperCase.checked && !selection.lowerCase.checked && selection.special.checked) {

    userChoice.push(specialCharacters);
    console.log(userChoice);
  } else if (selection.upperCase.checked && selection.lowerCase.checked && !selection.special.checked) {

    userChoice.push(alphabetCharacters, upperCaseAlpabetCharacters);
    console.log(userChoice);
  }
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
