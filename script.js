// Assignment Code
var generateBtn = document.querySelector("#generate");
var myNewPassword = ""
var choiceArr = []
var specialCharArr = [ "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?", ":", ";", "~" ];
var uppercasechArarr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercasechArarr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberSetArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

function userSetPasswordCriteria() {
  myNewPassword = prompt("Enter the number of characters you want in your myNewPassword");
if (myNewPassword < 8 || myNewPassword > 128){
    alert ("myNewPassword must be between 8-128 characters, please try again!");
}

function generatePassword() {

else if (myNewPassword > 8 && myNewPassword < 129) {
   myNewPassword = confirm ("Would you like uppercase letters in ypur myNewPassword?");
    
}

if (myNewPassword) {
   myNewPassword = confirm("Would you like to use lowercase letters in your myNewPassword?")
}

if (myNewPassword) {
   myNewPassword = confirm("Would you like Special characters in your myNewPassword?")
}

if (myNewPassword) {
  myNewPassword = confirm("Would you like numbers in your myNewPassword?")
}

if (myNewPassword) {
}

return myNewPassword = choiceArr.concat(uppercasechArarr, lowercasechArarr, specialCharArr, numberSetArr)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);