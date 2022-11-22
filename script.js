// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharArr = [ "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?", ":", ";", "~" ];
var uppercasechArarr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercasechArarr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberSetArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function createdPassword() {
   var confirmedUppercaseLetters  = confirm("would you like uppercase letters on your password?");
   var passwordOptions = {
      confirmedUppercaseLetters: confirmedUppercaseLetters
   };
   return passwordOptions;     
}

function createRandom(length) {
   var randomPassword = Math.floor(Math.random() * length);
   return randomPassword;
}

function generatePassword() {
   var userCreatedPassword = getPasswordCriteria();
   var chosenCharacterArr = [];
   var createdPasswordArr = [];
   if(userCreatedPassword.confirmedUppercaseLetters) {
     chosenCharacterArr = chosenCharacterArr.concat;(uppercasechArarr);
   }

   for(var i = 0; i < 4; i++) {
     createdPasswordArr.push(chosenCharacterArr[createRandom(availableChars.length)])
   }


 return createdPasswordArr.join("")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);