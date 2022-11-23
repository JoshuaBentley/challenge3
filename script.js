var characterLength = 8;
var userCreatedPasswordArr = [];

var specialCharArr = [ "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?", ":", ";", "~" ];
var uppercasechArarr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercasechArarr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberSetArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Assignment code 
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompts();
    var passwordText = document.querySelector("#password");

    if (correctPrompts) { 
       var newPassword = generatePassword();
       passwordText.value = newPassword;
       } else {
       passwordText.value = "";
       }
}

function generatePassword() {
  // trying to get the password to generate

  var password = "";
  for(var i = o; i < characterLength; i++) {
      var randomIndex = Math.floor(Math.random() * userCreatedPasswordArr.length);
      password = password + userCreatedPasswordArr[randomIndex];
  }
  return password;
}

function getPrompts() {
  userCreatedPasswordArr = [];

  characterLength = parseInt(prompt("How many characters would you like your password to be?"))

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("character Length must be a number between 8-128, please try again!")
    return false;
  }
   if(confirm ("Would you like uppercase letters in ypur myNewPassword?")) {
      userCreatedPasswordArr = userCreatedPasswordArr.concat(uppercasechArarr);
  }
   if(confirm("Would you like to use lowercase letters in your myNewPassword?")) {
    userCreatedPasswordArr = userCreatedPasswordArr.concat(lowercasechArarr);
  }
   if(confirm("Would you like Special characters in your myNewPassword?")) {
    userCreatedPasswordArr = userCreatedPasswordArr.concat(specialCharArr);
  }
  if(confirm("Would you like numbers in your myNewPassword?")) {
    userCreatedPasswordArr = userCreatedPasswordArr.concat(numberSetArr);
  }
  return password;
}
