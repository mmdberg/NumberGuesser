//get input when submit is clicked
var numberInput = document.getElementById('Enteryourguess');
console.log(numberInput)

//convert input to strings (parseInt())
var realNumberInput = parseInt(numberInput, 10)

//Display the user’s most recent guess
var lastGuess = document.querySelector('#lastguess');
var submitButton = document.querySelector('#guessbutton');
submitButton.addEventListener('click', function(){
  lastGuess.innerText=realNumberInput;
})

//clear input field when .clearbutton is clicked

//generate random number
function randomInteger (min,max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max-min)) + min;
};
randomInteger(1,101)

//compare input to random number number


//show result of comparison
submitButton.addEventListener('click', function() {
var response = document.querySelector(#response);
if (realNumberInput is > randomnumber) {
  response.innerText = "That is too high"
} else if (realNumberInput is < randomnumber) {
  response.innerText = "That is too low" {
  else (realNumberInput is === randomnumber)
  } response.innerText = "BOOM!"
}
 


// reset to log last guess/display users most recent input
// reset to load new random number
// reset to log last guess

//invalid guesses
if (numberInput>100) {
  alert('Please guess a number between 1 and 100')
} else if (numberInput<100) {
  alert('Please guess a number between 1 and 100')
} else if (numberInput===Nan) {
  alert('Please enter a whole number')
} else {
  // no alert('good guess')??

