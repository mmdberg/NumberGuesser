//console log parameters so you know whats coming through...
//variables, event selectors, functions

// var minimum = 1;
// var maximum = 100;
// randomInteger();
// console.log(realRandom);

var inputValue = document.querySelector('#userguess');
var yourLastGuess = document.querySelector('#yourLastGuess');
var showLastGuess = document.querySelector('#lastGuess');
var result = document.querySelector("#result");
var clearButton = document.querySelector('#clearbutton');
var resetButton = document.querySelector('#resetbutton');
var guessButton = document.querySelector('#guessbutton');
var minimum = document.querySelector('#usermin');
var maximum = document.querySelector('#usermax');
var rangeButton = document.querySelector('#rangebutton');
// var realRandom = randomInteger(minimum,maximum);
var rangeText = document.querySelector('#userrange')

clearButton.addEventListener('click', eraseText);
resetButton.addEventListener('click', resetGame);
guessButton.addEventListener('click', enterNumberField)
inputValue.addEventListener('keyup', textPresent)
usermax.addEventListener('keyup', textMax)
rangeButton.addEventListener('click', randomInteger)
rangeButton.addEventListener('click', showRange)

clearEnable(true);
resetEnable(true);
guessEnable(true);
rangeEnable(true);

function clearEnable(booleanvalue) {
    clearButton.disabled = booleanvalue;
  }

function resetEnable(booleanvalue) {
    resetButton.disabled = booleanvalue;
  }

function guessEnable(booleanvalue) {
    guessButton.disabled = booleanvalue;
}

function rangeEnable(booleanvalue) {
    rangeButton.disabled = booleanvalue;
}

function showRange(event) {
  event.preventDefault();
  var minValue = minimum.value; 
  var maxValue = maximum.value;
  rangeText.innerText= 'Now guess! Enter a number between ' + minValue + ' and ' + maxValue;
  rangeEnable(true);
}

//   var userMin = minimum.value;
//   var userMax = maximum.value;

//   if 
//   randomInteger(userMin,userMax);
// }

function randomInteger() {
  min = Math.ceil(minimum.value);
  max = Math.floor(maximum.value);
  return realRandom = Math.floor(Math.random() * (max-min+1)) + min;
};

// function showRange(minimum,maximum) {
//   rangeText.innerText="'Pick a number between ' + minimum + ' and ' maximum;"
// }

function enterNumberField () {
  var newInputValue = inputValue.value;
  var numberValue = parseInt(newInputValue, 10);
  // var min = parseInt(minimum.value,10);
  // var max = parseInt(maximum.value,10);
if (isNaN(numberValue) === true) {
 alert('Oops! Please Enter A Number!');
} else if (numberValue < min) {
 alert('Oops! Guess must be between ' + min + ' and ' + max)
} else if (numberValue > max) {
 alert('Oops! Guess must be between ' + min + ' and ' + max)
} else {
 yourLastGuessWas ();
 lastGuessDigits ();
 checkguess ()
 };
 clearEnable(false);
 resetEnable(false);
};

function yourLastGuessWas (){
  yourLastGuess.innerText='Your last guess was:'
};

function lastGuessDigits () {
  var lastGuessDigits = inputValue.value;
  showLastGuess.innerText=lastGuessDigits;
};

function checkguess(){
  var lastInput = inputValue.value;
 if (lastInput > realRandom) {
result.innerText = 'That is too high'
} else if (lastInput < realRandom) {
result.innerText = 'That is too low' 
} else   
  result.innerText = 'BOOM!' 
};

function textPresent() {
  clearEnable(false);
  guessEnable(false);
}

function textMax () {
  rangeEnable(false);
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
  minimum.value = '';
  maximum.value = '';
  clearEnable(true);
  resetEnable(true);
  guessEnable(true);
  randomInteger(1,100);
  console.log(realRandom);
  rangeText.innerText= 'Please Pick a New Range';
}


