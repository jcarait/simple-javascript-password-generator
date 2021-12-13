// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of possible Characters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*"];

var slider = document.getElementById("passLength");
var output = document.getElementById("current");
output.innerHTML = slider.value; // Display the default slider value

slider.oninput = function () {
  output.innerHTML = this.value; // Display current value based on slider position
}






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
