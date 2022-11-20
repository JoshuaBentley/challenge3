// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
 var answer = prompt("Enter the number of characters you want in your password");
 if (answer < "8"){
  prompt ("password must be atleast 8 characters!")
 }

  
  

  return "This is your new password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
