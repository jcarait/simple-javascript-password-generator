// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of possible Characters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*"];

var slider = document.getElementById("passLength");
var output = document.getElementById("current");
output.innerHTML = slider.value; // Display the default slider value

var checkUpperCase = document.getElementById("upper-case");
var checkLowerCase = document.getElementById("lower-case");
var checkSpecial = document.getElementById("special");

var current = function () {
  output.innerHTML = this.value;
}

slider.addEventListener ("input", current);

checkUpperCase.addEventListener("change", function() {
  if (this.checked) {
      console.log("Upper case is checked");
  } else {
      console.log("upper case is not checked");
  }
});

checkLowerCase.addEventListener("change", function() {
  if (this.checked) {
      console.log("lower case is checked");
  } else {
      console.log("lower case is not checked");
  }
});

checkSpecial.addEventListener("change", function() {
  if (this.checked) {
        checkSpecial.value = true;
  } else {
        return false;
  }
});

var length = parseInt(slider.value); //store current desired password length based on slider position

// function userPreference() {
//   isValid = false;

var selection = {
  length: parseInt(slider.value),
  upperCase: checkUpperCase.checked,
  lowerCase: checkLowerCase.checked,
  special: checkSpecial.checked
}



console.log(selection);

function generatePassword() {
  var password = selection;
  var combinations = [];
  var output = "";

  if ( !password.upperCase.checked && !password.lowerCase.checked && !password.special.checked ) {
    alert("Please select at least one checkbox to generate password");
  } else {
    console.log("Generating Password");
  }
}

// if (!upperCase || !lowerCase || !special) {
//     alert("You must select at least one checkbox for password to be generated!")
// } else {
//   isValid = true

// }
// return selection;
// }






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
