// 1.) add logic
// 2.) add favicon
var passwordLenght = document.getElementById("passwordLength");
var button = document.querySelector("button");
button.addEventListener("click", clickedCheckBoxes);

function clickedCheckBoxes() {
  var functionList = {
    generateLowerCase: function() {
      var lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      var lowerCaseRandomGeneratedOutput = [];
      for (var i = 0; i < passwordLenght.value; i++) {
        var randomLowerCaseGeneratedNumber = Math.floor(Math.random() * 26);
        var randomLowerCaseLetter = lowerCaseList[randomLowerCaseGeneratedNumber];
        }
      return randomLowerCaseLetter; },
    generateUpperCase: function() {
      var upperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      var upperCaseRandomGeneratedOutput = [];
      for (var i = 0; i < passwordLenght.value; i++) {
        var randomUpperCaseGeneratedNumber = Math.floor(Math.random() * 26);
        var randomUpperCaseLetter = upperCaseList[randomUpperCaseGeneratedNumber];
        }
      return randomUpperCaseLetter; },
    generateSymbol: function() {
      var symbolList = ["!", "£", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "]", "[", "{", "}", "#", "'", ";", ":", "/", ".", "?"];
      var symbolRandomGeneratedOutput = [];
      for (var i = 0; i < 1; i++) {
        var randomSymbolGeneratedNumber = Math.floor(Math.random() * 23);
        var randomSymbolLetter = symbolList[randomSymbolGeneratedNumber];
        }
      return randomSymbolLetter; },
    generateNumber: function() {
      var numberList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
      var numberRandomGeneratedOutput = [];
      for (var i = 0; i < 1; i++) {
        var randomNumberGeneratedNumber = Math.floor(Math.random() * 10);
        var randomNumberLetter = numberList[randomNumberGeneratedNumber];
        }
      return randomNumberLetter; }
  };
    var chosen = [];
  var lCPick = document.getElementById("lowCase");
  var lowerCaseFunction = functionList['generateLowerCase'];
  if (lCPick.checked) {
    chosen.push(lowerCaseFunction);
  } else {
    var indexOfLowerCaseFunction = chosen.indexOf(lowerCaseFunction);
    if (indexOfLowerCaseFunction >= 0) {
      chosen.splice(indexOfLowerCaseFunction, 1);
    }
  }
  var uCPick = document.getElementById("uppCase");
  var upperCaseFunction = functionList['generateUpperCase'];
  if (uCPick.checked) {
    chosen.push(upperCaseFunction);
  } else {
    var indexOfUpperCaseFunction = chosen.indexOf(upperCaseFunction);
    if (indexOfUpperCaseFunction >= 0) {
      chosen.splice(indexOfUpperCaseFunction, 1);
    }
  }
  var sPick = document.getElementById("symbol");
  var symbolFunction = functionList['generateSymbol'];
  if (sPick.checked) {
    chosen.push(symbolFunction);
  } else {
    var indexOfSymbolFunction = chosen.indexOf(symbolFunction);
    if (indexOfSymbolFunction >= 0) {
      chosen.splice(indexOfSymbolFunction, 1);
    }
  }
  var nPick = document.getElementById("number");
  var numberFunction = functionList['generateNumber'];
  if (nPick.checked) {
    chosen.push(numberFunction);
  } else {
    var indexOfNumberFunction = chosen.indexOf(numberFunction);
    if (indexOfNumberFunction >= 0) {
      chosen.splice(indexOfNumberFunction, 1);
    }
  }
   if (chosen.length > 0) {
     var listForIndividualClassCharacterGeneration = [];
     var randomizedOrderCharacterOutput = [];
     for (var repeat = 0; repeat < passwordLength.value; repeat++) {
       var randomNumberPickedFromChosen = Math.floor(Math.random() * chosen.length);
       var newGeneratedElement = chosen[randomNumberPickedFromChosen]();
       var newCharacterInIndividualList = listForIndividualClassCharacterGeneration.concat(newGeneratedElement);
       randomizedOrderCharacterOutput.push(newCharacterInIndividualList);
     }
     document.getElementById("rectangle").innerHTML = randomizedOrderCharacterOutput.join("");
   } else {
     document.getElementById("rectangle").innerHTML = "None selected";
   }
}

// console.log() is your biggest friend
