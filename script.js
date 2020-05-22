// Assignment Code
var generateBtn = document.querySelector("#generate");
// All Potential CHaracters
var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM"
var lowerCase = "qwertyuiopasdfghjklzxcvbnm"
var num = "1234567890"
var specChar = "!@#$%^&*~+"
var pswd = []
var pswLength = 0



var pswLength = prompt("How many characters do you need in your password? Please select a number between 8 and 128.")
console.log(pswLength);

//Password must be between 8 and 128 characters long
while (pswLength < 8 || pswLength > 128) {
  pswLength = prompt("PLEASE select a number between 8 and 128!");
}


  //Get password parameters
  var numQues = confirm("Do you need numeric charcters in your password? Click [Cancel] for No");
  var upQues = confirm("Do you need uppercase letters in your password? Click [Cancel] for No");
  var lowQues = confirm("Do you need lowercase letters in your password? Click [Cancel] for No");
  var specQues = confirm("Do you need special characters in your password? Click [Cancel] for No");

  //Generate Password
  if (numQues) {
    numChoice = num.split("");
  } else {
    numChoice = [];
  }
  if (upQues) {
    upChoice = upperCase.split("");
  } else {
    upChoice = [];
  }
  if (lowQues) {
    lowChoice = lowerCase.split("");
  } else {
    lowChoice = [];
  }
  if (specQues) {
    specChoice = specChar.split("");
  } else {
    specChoice = [];
  }
  availableCharacters = numChoice.concat(upChoice, lowChoice, specChoice);
  console.log(availableCharacters);

  //Select characters randomly from the available set
  for (var i = 0; i < pswLength; i++) {  
    var selector = Math.floor(Math.random() * availableCharacters.length);
    console.log(selector);

    pswd.push(availableCharacters[selector]);
    console.log(pswd);
  }
    var password = pswd.join("");
    console.log(password);



  // Write password to the #password input
  function writePassword() {
  // removing this line  
  //  var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }
  // Add event listener to generate button
  alert('Click the [Generate Password] button for your password');
  generateBtn.addEventListener("click", writePassword);





