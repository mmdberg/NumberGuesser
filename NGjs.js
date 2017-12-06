//console log parameters so you know whats coming through...
//variables, event selectors, functions


var inputValue = document.querySelector('#userguess');
var yourLastGuess = document.querySelector('#yourLastGuess');
var showLastGuess = document.querySelector('#lastGuess');
var result = document.querySelector("#result");
var clearButton = document.querySelector('#clearbutton');
var resetButton = document.querySelector('#resetbutton');
var guessButton = document.querySelector('#guessbutton');

// guessButton.addEventListener('click', yourLastGuessWas);
// guessButton.addEventListener('click', lastGuessDigits);
// guessButton.addEventListener('click', checkguess);
clearButton.addEventListener('click', eraseText);
resetButton.addEventListener('click', resetGame);
resetButton.addEventListener('click', randomInteger)
guessbutton.addEventListener('click', enterNumberField)
// guessButton.addEventListener('click', buttonEnable(false));


// clearButton.disabled = true;
// resetButton.disabled = true;
buttonEnable(true);
randomInteger();

function buttonEnable(booleanvalue) {
    clearButton.disabled = booleanvalue;
    resetButton.disabled = booleanvalue;
  }

// function enableOnOff (){
//   var newInputValue = inputValue.value;
//   var numberValue = parseInt(newInputValue, 10);
// if (isNaN(numberValue) === false) {
//  buttonEnable(false)
// } else {
//   buttonEnable(true)
// }
// } 

function randomInteger() {
  min = 1; //Math.ceil(min);
  max = 101; //Math.floor(max);
  return randomInteger = Math.floor(Math.random() * (max-min)) + min;
};
  console.log(randomInteger);

function yourLastGuessWas (){
  yourLastGuess.innerText='Your last guess was:'
};

function lastGuessDigits () {
  var lastGuessDigits = inputValue.value;
  showLastGuess.innerText=lastGuessDigits;
};

function enterNumberField () {
  var newInputValue = inputValue.value;
  var numberValue = parseInt(newInputValue, 10);
  var min = 1;
  var max = 101;
if (isNaN(numberValue) === true) {
 alert('Oops! Please Enter A Number!');
} else if (numberValue < min) {
 alert('Oops! Guess must be between 1 and 100')
} else if (numberValue > max) {
 alert('Oops! Guess must be between 1 and 100')
} else {
 checkguess ();
 yourLastGuessWas ();
 lastGuessDigits ();
 };
 buttonEnable(false)
};

function checkguess(){
  var lastInput = inputValue.value;
 if (lastInput > randomInteger) {
result.innerText = 'That is too high'
} else if (lastInput < randomInteger) {
result.innerText = 'That is too low' 
} else   
  result.innerText = 'BOOM!' 
};

function eraseText () {
  inputValue.value = '';
  buttonEnable(true);
};

function resetGame () {
  inputValue.value = '';
  yourLastGuess.innerText = '';
  showLastGuess.innerText = '';
  result.innerText = '';
  buttonEnable(true);
}

// var randomInteger = function(min,max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max-min)) + min;};


