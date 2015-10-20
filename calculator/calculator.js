// Create an HTML file that has two input fields to accept the two numbers to perform operations on.
// Create 4 buttons to perform each of the basic mathematical functions (add, subtract, multiply, divide).
// In your JavaScript, put an event listener on each of the buttons.
// Copy the code below an implement a basic calculator.
// When the user performs one of the operations, output the result to another DOM element of your choice.

var addButton = document.getElementById("add");
var subtractButton = document.getElementById("subtract");
var multiplyButton = document.getElementById("multiply");
var divideButton = document.getElementById("divide");
var firstNumber = document.getElementById("first-number");
var secondNumber = document.getElementById("second-number");

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */

var multiply = function (x, y) {
  x = parseInt(firstNumber.value);
  y = parseInt(secondNumber.value);
  console.log(x * y);
  return x * y;
};

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */

var add = function (x, y) {
	x = parseInt(firstNumber.value);
  y = parseInt(secondNumber.value);
  console.log(x + y);
  return x + y;
};

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

var subtract = function (x, y) {
  x = parseInt(firstNumber.value);
  y = parseInt(secondNumber.value);
  console.log(x - y);
  return x - y;
};

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

var divide = function (x, y) {
  x = parseInt(firstNumber.value);
  y = parseInt(secondNumber.value);
  console.log(x / y);
  return x / y;
};

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

var full = function (x, y, thing) {
  return thing(x, y);
};



addButton.addEventListener("click", add);
subtractButton.addEventListener("click", subtract);
multiplyButton.addEventListener("click", multiply);
divideButton.addEventListener("click", divide);

