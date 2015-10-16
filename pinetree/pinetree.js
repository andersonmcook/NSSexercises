/*
  Create an `tree` function that accepts an integer
  as an argument. The function should create a pine
  tree out of asterisks in the browser console. The 
  height is whatever is passed as an argument to the 
  function.

  Example output with argument value of 5

            *
           ***
          *****
         *******
        *********

*/

// Create your function here. Make sure it takes the height argument.

var tree = function(height) {
  var asterisks = [];

  for (var i = 1; i <= (height * height); i++){
  asterisks.push("*");
}
  asterisks = asterisks.join("");
  console.log("asterisks", asterisks);

  for (var i = 1; i < height * 2; i += 2) {
    console.log(asterisks.slice(0 , (asterisks.length + i  - (asterisks.length))));
  }
};

tree(5);