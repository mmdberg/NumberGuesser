//console log parameters so you know whats coming through...
//variables, event selectors, functions

var inputValue = document.querySelector('#userguess');
var yourLastGuess = document.querySelector('#yourLastGuess');
var showLastGuess = document.querySelector('#lastGuess');
var result = document.querySelector("#result");
var clearButton = document.querySelector('#clearbutton');
var resetButton = document.querySelector('#resetbutton');
var guessButton = document.querySelector('#guessbutton');
var min = document.querySelector('#usermin')
var max = document.querySelector('#usermax')

// guessButton.addEventListener('click', yourLastGuessWas);
// guessButton.addEventListener('click', lastGuessDigits);
// guessButton.addEventListener('click', checkguess);
clearButton.addEventListener('click', eraseText);
resetButton.addEventListener('click', resetGame);
resetButton.addEventListener('click', randomInteger)
guessbutton.addEventListener('click', enterNumberField)
inputValue.addEventListener('keyup', textPresent)

clearEnable(true);
resetEnable(true);


function clearEnable(booleanvalue) {
    clearButton.disabled = booleanvalue;
  }

function resetEnable(booleanvalue) {
    resetButton.disabled = booleanvalue;
  }

// function randomInteger() {
//   min = 1; 
//   max = 101; 
//   return randomInteger = Math.floor(Math.random() * (max-min)) + min;
// };

  var randomInteger = function(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min+1)) + min;};

  randomInteger(0,100);
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
 clearEnable(false);
 resetEnable(false);
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

function textPresent() {
  clearEnable(false)
}

function eraseText () {
  inputValue.value = '';
  clearEnable(true);
};

function resetGame () {
  inputValue.value = '';
  yourLastGuess.innerText = '';
  showLastGuess.innerText = '';
  result.innerText = '';
  clearEnable(true);
  resetEnable(true);
  console.log(randomInteger);
}

// var randomInteger = function(min,max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max-min)) + min;};


