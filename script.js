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

var desiredLength = parseInt(slider.value); //convert string value to integer and store based on slider position.

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



  if (!selection.upperCase.checked && !selection.lowerCase.checked && !selection.numerical.checked && !selection.special.checked) {
    alert("Please select at least one checkbox to generate password");
  } else if (selection.upperCase.checked && selection.lowerCase.checked && selection.numerical.checked && selection.special.checked) {

    userChoice = upperCaseAlpabetCharacters.concat(alphabetCharacters, numericalCharacters, specialCharacters);
    finalLength = desiredLength - 4; //Included a reduction to length of password since one of each desired criteria will be added to final array of characters
  } else if (selection.upperCase.checked && selection.lowerCase.checked && selection.numerical.checked) {

    userChoice = upperCaseAlpabetCharacters.concat(alphabetCharacters, numericalCharacters);
    finalLength = desiredLength - 3;
  } else if (selection.upperCase.checked && selection.lowerCase.checked && selection.special.checked) {

    userChoice = upperCaseAlpabetCharacters.concat(alphabetCharacters, specialCharacters);
    finalLength = desiredLength - 3;
  } else if (selection.special.checked && selection.lowerCase.checked && selection.numerical.checked) {

    userChoice = specialCharacters.concat(alphabetCharacters, numericalCharacters);
    finalLength = desiredLength - 3;
  } else if (selection.upperCase.checked && selection.lowerCase.checked) {

    userChoice = upperCaseAlpabetCharacters.concat(alphabetCharacters);
    finalLength = desiredLength - 2;
  } else if (selection.upperCase.checked && selection.numerical.checked) {

    userChoice = upperCaseAlpabetCharacters.concat(numericalCharacters);
    finalLength = desiredLength - 2;
  } else if (selection.upperCase.checked && selection.special.checked) {

    userChoice = upperCaseAlpabetCharacters.concat(specialCharacters);
    finalLength = desiredLength - 2;
  } else if (selection.lowerCase.checked && selection.numerical.checked) {

    userChoice = alphabetCharacters.concat(numericalCharacters);
    finalLength = desiredLength - 2;
  } else if (selection.lowerCase.checked && selection.special.checked) {

    userChoice = alphabetCharacters.concat(specialCharacters);
    finalLength = desiredLength - 2;
  } else if (selection.numerical.checked && selection.special.checked) {

    userChoice = numericalCharacters.concat(specialCharacters);
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


// From https://stackoverflow.com/a/22581382 - not required for this assignment
document.getElementById("copy").addEventListener("click", function() {
  copyToClipboardMsg(document.getElementById("password"), "msg");
});

function copyToClipboardMsg(elem, msgElem) {
  var succeed = copyToClipboard(elem);
  var msg;
  if (!succeed) {
      msg = "Copy not supported or blocked.  Press Ctrl+c to copy."
  } else {
      msg = "Password copied to the clipboard."
  }
  if (typeof msgElem === "string") {
      msgElem = document.getElementById(msgElem);
  }
  msgElem.innerHTML = msg;
  setTimeout(function() {
      msgElem.innerHTML = "";
  }, 2000);
}

function copyToClipboard(elem) {
  // create hidden text element, if it doesn't already exist
  var targetId = "_hiddenCopyText_";
  var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
  var origSelectionStart, origSelectionEnd;
  if (isInput) {
      // can just use the original source element for the selection and copy
      target = elem;
      origSelectionStart = elem.selectionStart;
      origSelectionEnd = elem.selectionEnd;
  } else {
      // must use a temporary form element for the selection and copy
      target = document.getElementById(targetId);
      if (!target) {
          var target = document.createElement("textarea");
          target.style.position = "absolute";
          target.style.left = "-9999px";
          target.style.top = "0";
          target.id = targetId;
          document.body.appendChild(target);
      }
      target.textContent = elem.textContent;
  }
  // select the content
  var currentFocus = document.activeElement;
  target.focus();
  target.setSelectionRange(0, target.value.length);
  
  // copy the selection
  var succeed;
  try {
      succeed = document.execCommand("copy");
  } catch(e) {
      succeed = false;
  }
  // restore original focus
  if (currentFocus && typeof currentFocus.focus === "function") {
      currentFocus.focus();
  }
  
  if (isInput) {
      // restore prior selection
      elem.setSelectionRange(origSelectionStart, origSelectionEnd);
  } else {
      // clear temporary content
      target.textContent = "";
  }
  return succeed;
}