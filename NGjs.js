//console log parameters so you know whats coming through...
//variables, event selectors, functions

var inputValue = document.querySelector('#userguess');
var yourLastGuess = document.querySelector('#yourLastGuess');
var showLastGuess = document.querySelector('#lastGuess');
var result = document.querySelector("#result");
var clearButton = document.querySelector('#clearbutton');
var resetButton = document.querySelector('#resetbutton');
var guessButton = document.querySelector('#guessbutton');

// // var inputValue = parseInt(input, 10);

guessButton.addEventListener('click', yourLastGuessWas);
guessButton.addEventListener('click', lastGuessDigits);
guessButton.addEventListener('click', checkguess);
clearButton.addEventListener('click', eraseText);
resetButton.addEventListener('click', resetGame);
resetButton.addEventListener('click', randomInteger)

randomInteger();
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
  // var eraseInputBox = inputValue.value;
  inputValue.value = ''
};

function resetGame () {
  inputValue.value = '';
  yourLastGuess.innerText = '';
  showLastGuess.innerText = '';
  result.innerText = ''
};

// var randomInteger = function(min,max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max-min)) + min;};


// reset to log last guess/display users most recent input
// reset to load new random number
// reset to log last guess

// //invalid guesses
// if (numberInput>100) {
//   alert('Please guess a number between 1 and 100')
// } else if (numberInput<100) {
//   alert('Please guess a number between 1 and 100')
// } else if (numberInput===NaN) {
//   alert('Please enter a whole number')
// } else {}
  // no alert('good guess')??

