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

//this works by initializing an empty string tempPassword, adding characters to it, according
//to the selections made by the user, and then randomly sorting it at the end.

var tempPassword = "";

//The include<type> variables indicate whether a certain type of character (Upper, Special, Numeric, Lower)
//is to be included in the password.



//this variables is a concatenated array containing all the possible characters that could be
//included in the password.  
var listAllOptions = [];

var numOfSelectedTypes = 0;

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
  
for (counter = 0; counter < myPasswordLength - myTypesToInclude.numberTypesSelected; counter++) {
  tempPassword += listAllOptions[Math.floor(Math.random()*listAllOptions.length)];
};

tempPassword = randomSort(tempPassword);
console.log(tempPassword);
console.log(listAllOptions);
  return tempPassword;
}

function containsUpperCase(myString){
//This function determines if a string includes any characters in the listUpperCase array

  var counter
  var temp = false;
  for (counter = 0; counter < myString.length; counter++ ) {
    //console.log(myString.charAt(counter));
    if (listUpperCase.includes(myString.charAt(counter))) {
      return true;
    }
  }
  return temp;
}

function containsLowerCase(myString){
    //This function determines if a string includes any characters in the listLowerCase array
  var counter
  var temp = false;
  for (counter = 0; counter < myString.length; counter++ ) {
    //console.log(myString.charAt(counter));
    if (listLowerCase.includes(myString.charAt(counter))) {
      return true;
    }
  }
  return temp;
}

function containsSpecial(myString){
//This function determines if a string includes any characters in the listSpecial array
  var counter
  var temp = false;
  for (counter = 0; counter < myString.length; counter++ ) {
    //console.log(myString.charAt(counter));
    if (listSpecial.includes(myString.charAt(counter))) {
      return true;
    }
  }
  return temp;
}

function containsNumeric(myString){
//This function determines if a string includes any characters in the listNumeric array
  var counter
  var temp = false;
  for (counter = 0; counter < myString.length; counter++ ) {
    //console.log(myString.charAt(counter));
    if (listNumeric.includes(myString.charAt(counter))) {
      return true;
    }
  }
  return temp;
}




// Write password to the #password input
//temporary comment out...
function writePassword() {
 
  var tempPassword = "";
  var typesToInclude = {
    numeric: false,
    lowerCase: false,
    special: false,
    upperCase: false,
    numberTypesSelected: 0
  };
  var passwordLength = prompt("How many characters would you like in your choose between 8 and 20", 8);
  if (!(passwordLength >= minLength && passwordLength <= maxLength))  {
    alert("Pick a valid password length");
    writePassword();
  }

  
  var typeChoice = prompt("Include Lower Case (Y/N)?");
  if (typeChoice === "Y") {
    typesToInclude.lowerCase = true;
    typesToInclude.numberTypesSelected++;
  }

  var typeChoice = prompt("Include Numerics (Y/N)?");
  if (typeChoice === "Y") {
    typesToInclude.numeric = true;
    typesToInclude.numberTypesSelected++;
  }

  var typeChoice = prompt("Include Special Characters (Y/N)?");
  if (typeChoice === "Y") {
    typesToInclude.special = true;
    typesToInclude.numberTypesSelected++;
  }

  var typeChoice = prompt("Include Upper Case (Y/N)?");
  if (typeChoice === "Y") {
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

// this is the variable that will store the password's length


//these variables will hold the choices about which types are included
//in the password







//This function will allow me to sort the password characters randomly once I've created them.
//I needs this because the first 1-4 characters will be taken from each of the individual
//lists to make sure I have one from each type selected.

function randomSort(myArray) {
  var newArray = myArray;
  for (i = newArray.length -1; i > 0; i--) {
    j = Math.floor(Math.random() * i)
    k = newArray[i]
    newArray[i] = newArray[j]
    newArray[j] = k
  }
return newArray;
}


//Testing area...
