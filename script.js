// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

// password criteria variables

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!", "#", "$", "%", "&", '"', ",", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];



// variable for user input

function getUserInput() {

  // prompt password criteria

  var passwordLength = parseInt(prompt("How many characters should the password have (choose a number between 8 and 128)?"));

  // If statement to direct user to enter a numeric value


  // if a valid password length is not entered

  if (!passwordLength) {
    alert("Please enter a numeric value!");
    return;
  }

  // once numeric value is entered, must confirm it is within the specified criteria > 8 and < 128.

  if ((passwordLength < 8) || (passwordLength > 128)) {
    alert("Password must be between 8 and 128 characters!");
    return;
  }

  // prompt user to select criteria for password.

  // does the password require numbers?

  var confirmNumbers = confirm("Do you want the password to contain numbers?");

  // does the password uppercase letters?

  var confirmUpperCase = confirm("Do you want the password to contain uppercase letters?");

  // does the password lowercase letters?

  var confirmLowerCase = confirm("Do you want the password to contain lowercase letters?");

  // does the password special characters?

  var confirmSpecialCharacters = confirm("Do you want the password to contain special characters?");

  // prompts user to select at least one of the criteria for password

  if (!confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmSpecialCharacters) {
    alert("The password must contain at least one special, numeric, lowercase, or uppercase character!");
  }

  // combine user input to generate password

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
}

function copyToClipboard() {
  var copyText = password;
  navigator.clipboard.writeText(copyText);

  var tooltip = document.getElementById("tooltip");
  tooltip.innerHTML = "Password Copied!"
  console.log("copyText", copyText);
}

function outTooltip() {
  var tooltip = document.getElementById("tooltip");
  tooltip.innerHTML = "Copy To Clipboard";
}
