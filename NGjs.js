//console log parameters so you know whats coming through...
//variables, event selectors, functions

var inputValue = document.querySelector('#userguess');
var result = document.querySelector("#result");
var clearButton = document.querySelector('#clearbutton');
var resetButton = document.querySelector('#resetbutton');
var guessButton = document.querySelector('#guessbutton');

// // var inputValue = parseInt(input, 10);
randomInteger();
function randomInteger() {
  min = 1; //Math.ceil(min);
  max = 101; //Math.floor(max);
  return randomInteger = Math.floor(Math.random() * (max-min)) + min;};
  console.log(randomInteger)



// var randomInteger = function(min,max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max-min)) + min;};


guessButton.addEventListener('click', function(){
  inputValue = document.querySelector('#userguess').value})

guessButton.addEventListener('click', function(){
   yourLastGuess.innerText='Your last guess was:';
 })

guessButton.addEventListener('click', function(){
   lastGuess.innerText=inputValue;
 })

guessButton.addEventListener('click', checkguess )

  function checkguess(){
  if (inputValue > randomInteger) {
  result.innerText = "That is too high"
  } else if (inputValue < randomInteger) {
  result.innerText = "That is too low" 
  } else   
    result.innerText = "BOOM!" 
}

resetButton.addEventListener('click', function() {
  window.location.reload(true)}); 


// resetButton.addEventListener('click', function() {
//   min = 1; //Math.ceil(min);
//   max = 101; //Math.floor(max);
//   return randomInteger = Math.floor(Math.random() * (max-min)) + min;});
// //randomInteger(1,101));

clearButton.addEventListener('click', function eraseText() {
    document.getElementById("userguess").value = "";
})



// //clear input field when .clearbutton is clicked

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

