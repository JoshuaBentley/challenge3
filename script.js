// Assignment Code
var specialCharArr = [ "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?", ":", ";", "~" ];
var uppercasechArarr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercasechArarr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberSetArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

 function makePasswordCriteria() {
  myNewPassword = prompt("Enter the number of characters you want in your myNewPassword");
if (myNewPassword < 8 || myNewPassword > 128){
    alert ("myNewPassword must be between 8-128 characters, please try again!");
    
 }
 return myNewPassword;
}

function generatePassword()
var myNewPassword = ""
var choiceArr = []






var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);