// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // var copyToClipboard = document.getElementById("copytoclipboard");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page



// Password criteria variables

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!", "#", "$", "%", "&", '"', ",", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];



// Variable for user input

function getUserInput() {

  // Prompt/confirm password criteria 

  var passwordLength = parseInt(prompt("How many characters should the password have (choose a number between 8 and 128)?"));

  // If statement to direct user to enter a numeric value


  // If Password length is not a number
  if (!passwordLength) {
    alert("Please enter a numeric value!");
    // return;
  }

  // Once numeric value is entered, must confirm it is within the specified criteria < 8 and > 128.

  if ((passwordLength < 8) || (passwordLength > 128)) {
    alert("Password must be between 8 and 128 characters!");
    // return;
  }

  // else if (PasswordLength > 8 && PasswordLength < 128) {
  //   return;
  // } 
  // Prompt user to select criteria for password. 

  // Does the password require numbers?

  var confirmNumbers = confirm("Do you want the password to contain numbers?");

  // Does the password uppercase letters?

  var confirmUpperCase = confirm("Do you want the password to contain uppercase letters?");

  // Does the password lowercase letters?

  var confirmLowerCase = confirm("Do you want the password to contain lowercase letters?");

  // Does the password special characters?

  var confirmSpecialCharacters = confirm("Do you want the password to contain special characters?");

  

  if (!confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmSpecialCharacters) {
    alert("The password must contain at least one special, numeric, lowercase, or uppercase character!");
    // return;

  }

  //Take user input to generate password

  var passwordCriteria = {

    length: passwordLength,
    numbers: confirmNumbers,
    upper: confirmUpperCase,
    lower: confirmLowerCase,
    special: confirmSpecialCharacters,

  }
  return passwordCriteria;
}

function generatePassword() {

  var options = getUserInput();
  console.log(options)

  var passwordOptions = [];
  console.log(passwordOptions)

  if (options.special) {
        for (i = 0; i < specialCharacters.length; ++i) {
          passwordOptions.push(specialCharacters[i]);
      }
  } 
  if (options.numbers) {
      for (i = 0; i < numbers.length; ++i) {
      passwordOptions.push(numbers[i]);
      }
  }
  if (options.lower) {
      for (i = 0; i < lowerCase.length; ++i) {
      passwordOptions.push(lowerCase[i]);
      }
  }
  if (options.upper) {
      for (i = 0; i < upperCase.length; ++i) {
      passwordOptions.push(upperCase[i]);
      }
  }

  var completePassword = [];

  for (let i = 0; i < options.length; ++i) {
      var randomSelection = Math.floor(Math.random() * Math.floor(passwordOptions.length));
       completePassword.push(passwordOptions[randomSelection])
  }

  console.log(completePassword)

  password = completePassword.join('');
  console.log(password)

  return password;
  // document.getElementById("password").textContent = password;
}

// generateBtn.addEventListener('click', generatePassword);

// var password = "";

// function copytoClipboard() {

// document.getElementById("display").select();

// document.execCommand("Copy");

// alert("Your password has now been copied to the clipboard");

// }


// copyToClipBoardButton.addEventListener('click', copytoClipboard);

// return passwordCriteria;


// function generatePassword(a, b){
//   console.log(a)
// }
// getUserInput()

// var criteria = getUserInput();
// console.log(criteria);







// if (confirmNumbers) {
//   for (var i = 0; i < 10; i++) {
//   var num = Math.floor(Math.random() * 9) +  1;
//     // Display in console
//   console.log(num);
//   }
// }



  // console.log("length? ", promptLength)
  // console.log("numbers? ", confirmNumbers)
  // console.log("special characters? ", confirmSpecialCharacters);
  // console.log("uppercase? ", confirmUpperCase);
  // console.log("lowercase? ", confirmLowerCase);

// }