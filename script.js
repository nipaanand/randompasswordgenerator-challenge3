// Assignment Code
//Global variables
var confirmLength;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var cinfirmLowercase;

//create a button variable and store the value
var generateBtn = document.querySelector("#generate");

//Arrays of variable to input values for password
const uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const specillcharacterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

//function to get the options from user to input
function generatePassword(){
  var confirmLength = prompt("How many characters would you like your password to contain?");
  
  while(confirmLength<=7 || confirmLength>=129){
    
  
    alert("Password length must be 8 to 128 characters Try again!");
    return;
  }
  //repeat back how many characters user will have
  alert(`Your password will have ${confirmLength} characters`);
  
    //determine parameters of password
    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
  
    while(confirmUppercase === false && confirmLowercase === false && confirmSpecialCharacter === false ||
    confirmNumericCharacter== false){
    alert("You must choose at least one option");
    exit();
  }
    //Assign and action to the password parameters need to fix this
    var passwordCharacters =[];

    if(confirmSpecialCharacter){
      passwordCharacters=passwordCharacters.concat(specillcharacterArray);
    }
    if(confirmNumericCharacter){
      passwordCharacters=passwordCharacters.concat(numbArray);
    }
    if(confirmUpperCase){
      passwordCharacters=passwordCharacters.concat(uppercaseArray);
    }
    if(confirmLowerCase){
      passwordCharacters=passwordCharacters.concat(lowercaseArray);
    }
    console.log(passwordCharacters);
    var randomPassword ="";
    for(let i=0;i<confirmLength;i++){
      randomPassword =randomPassword + passwordCharacters[Math.floor(Math.random()*passwordCharacters.length)];
      console.log(randomPassword);
    }

    return randomPassword;
    
  }
  
    
 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

//console.log(generateBtn);
