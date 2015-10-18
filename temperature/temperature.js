/*
  ...........YOUR MISSION...........

  Write a program that will convert a temperature from
  fahrenheit to celsius, or from celsius to fahrenheit.

  1. In the HTML, have one input field where someone can enter
      in a temperature.
  2. Create a radio button group where Celsius or Fahrenheit 
      can be selected as the scale that the number should be 
      converted to.
  3. Create a block level element that will hold the text of the
      converted temperature.
  4. Create a button that, when clicked, displays the converted.
  5. Create another button that, when clicked, clears any text
      in the input field.
  6. Add an event handler to the input field that checks if the 
      user pressed the enter key, and if that happens, perform
      the conversion.
  7. If the temperature is greater than 90F/32C the color of 
      the converted temperature should be red.
  8. If the temperature is less than 32F/0C the color of 
      the converted temperature should be blue.
  9. For any other temperature, the color should be green.
*/

// convert fahrenheit to celsius
function toCelsius (fTemp) {
  return (fTemp - 32) / 1.8;
}

// convert celsius to fahrenheit
function toFahrenheit (cTemp) {
  return (cTemp * 1.8) + 32;
}

// Get a reference to elements in the DOM
var inputTemp = document.getElementById("input-temp");
var fahrRadio = document.getElementById("fahrenheit");
var celRadio = document.getElementById("celsius");
var converterButton = document.getElementById("converter");
var clearButton = document.getElementById("clear")
var result = document.getElementById("result");


// changes class to add color to fahrenheit
var colorChangeToFahr = function () {
  if (parseInt(result.innerHTML) > 90) {
      result.classList.toggle("red"); 
    } else if (parseInt(result.innerHTML) < 32) {
      result.classList.toggle("blue");
    } else {
      result.classList.toggle("green");
    }
};

// changes class to add color to celsius
var colorChangeToCel = function () {
  if (parseInt(result.innerHTML) > 32) {
      result.classList.toggle("red"); 
    } else if (parseInt(result.innerHTML) < 0) {
      result.classList.toggle("blue");
    } else {
      result.classList.toggle("green");
    }
};

// listen to inputTemp
var returnDegrees = function () {
  reset();
  if (fahrRadio.checked === true) {
    // run toFahrenheit on the input
    var returnFahrenheit = toFahrenheit(inputTemp.value);
    // output the result to the result id
    result.innerHTML = Math.round(returnFahrenheit);
    colorChangeToFahr();
  } else if (celRadio.checked === true) {
    // run to Celsius on the input
    var returnCelsius = toCelsius(inputTemp.value);
    // output the result to the result id
    result.innerHTML = Math.round(returnCelsius);
    colorChangeToCel();
  } 
}

//listen to converter button and run returnDegrees when clicked
converterButton.addEventListener("click", returnDegrees);

//listen for enter key to be pressed in input box
inputTemp.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    returnDegrees();
  }
});

// function to reset result
var reset = function () {
  result.innerHTML = "";
  result.className = "";
}

//function to clear input and result
var clear = function () {
  inputTemp.value = "";
  result.innerHTML = "";
  result.className = "";
}

// clears input and result when clear button is pressed
clearButton.addEventListener("click", clear);














