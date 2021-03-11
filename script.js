//Declaration of constants
const minLength = 8;
const maxLength = 128;
//I feel like there should be some more elegant solution to generating these arrays that typing them out.  
//But typing them out works for now.  I'll circle back to come up with a better solution
//If I have time.
const listNumeric   = ["0","1","2","3","4","5", "6","7","8","9"];
const listLowerCase = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const listUpperCase = ["A", "B", "C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const listSpecial   = ["`","~","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|",":",";",'"', "'","<",",",">",".","?","/","}"];

var generateBtn = document.querySelector("#generate");
// Assignment Code

function generatePassword(myPasswordLength, myTypesToInclude){

/*this works by initializing an empty string tempPassword, adding characters to it, according
to the selections made by the user, and then randomly sorting it at the end.
The variable myTypesToInclude is an object containing four Boolean variables, one for each
type of character, as well as a number variable showing how many TRUE values have been selected.*/


var tempPassword = "";
var listAllOptions = [];
//this variables is a concatenated array containing all the possible characters that could be
//included in the password. 

//var numOfSelectedTypes = 0;

//These next four blocks check to see if a particular type of character was selected.
//if it was, they add one of those characters randomly selected to the tempPassword.
//This is to insure that at least one of each selected character type appears in the password.
  if (myTypesToInclude.numeric) {
    tempPassword = tempPassword + listNumeric[Math.floor(Math.random()*listNumeric.length)];
    listAllOptions = listAllOptions.concat(listNumeric);
  };

  if (myTypesToInclude.upperCase) {
    tempPassword += listUpperCase[Math.floor(Math.random()*listUpperCase.length)];
    listAllOptions = listAllOptions.concat(listUpperCase);
  };

  if (myTypesToInclude.lowerCase) {
    tempPassword = tempPassword + listLowerCase[Math.floor(Math.random()*listLowerCase.length)];
    listAllOptions = listAllOptions.concat(listLowerCase);
  };

  if (myTypesToInclude.special) {
    tempPassword = tempPassword + listSpecial[Math.floor(Math.random()*listSpecial.length)];
    listAllOptions = listAllOptions.concat(listSpecial);
  };
  
//This for loop fills out the tempPassword to the desired length, by picking values at random
//from listAllOptions, which includes the entire set of selected character types.
for (counter = 0; counter < myPasswordLength - myTypesToInclude.numberTypesSelected; counter++) {
  tempPassword += listAllOptions[Math.floor(Math.random()*listAllOptions.length)];
};

tempPassword = randomSort(tempPassword);
console.log(tempPassword);
console.log(listAllOptions);
  return tempPassword;
}

// Write password to the #password input
//temporary comment out...
function writePassword() {
 
  //var tempPassword = "";
  var typesToInclude = {
    numeric: false,
    lowerCase: false,
    special: false,
    upperCase: false,
    numberTypesSelected: 0
  };

  var myPrompt = "How many characters would you like in your password?\n";
  myPrompt += "(Choose a number between " + minLength + " and " + maxLength + ")";

  var passwordLength = prompt(myPrompt, 8);
  if (!(passwordLength >= minLength && passwordLength <= maxLength))  {
    alert("Pick a valid password length");
    writePassword();
  }

  var typeChoice1 = confirm("Select OK to include lower case letters");
  if (typeChoice1 === true) {
    typesToInclude.lowerCase = true;
    typesToInclude.numberTypesSelected++;
  }

  var typeChoice2 = confirm("Select OK to include numbers");
  if (typeChoice2 === true) {
    typesToInclude.numeric = true;
    typesToInclude.numberTypesSelected++;
  }

  var typeChoice3 = confirm("Select OK to include special characters");
  if (typeChoice3 === true) {
    typesToInclude.special = true;
    typesToInclude.numberTypesSelected++;
  }

  var typeChoice4 = confirm("Select OK to include upper case letters");
  if (typeChoice4 === true) {
    typesToInclude.upperCase = true;
    typesToInclude.numberTypesSelected++;
  }


  if (typesToInclude.numberTypesSelected > 0) {
  var password = generatePassword(passwordLength,typesToInclude);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  } else {
    alert("You didn't choose any types!");
  };
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function randomSort(myArray) {
//This function will allow me to sort the password characters randomly once I've created them.
//I needs this because the first 1-4 characters will be taken from each of the individual
//lists to make sure I have one from each type selected.
  var newArray = myArray;
  for (i = newArray.length -1; i > 0; i--) {
    j = Math.floor(Math.random() * i)
    k = newArray[i]
    newArray[i] = newArray[j]
    newArray[j] = k
  }
return newArray;
}

