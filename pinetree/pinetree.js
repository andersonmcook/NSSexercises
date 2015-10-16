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
  var spaces = [];

  for (var i = 1; i <= (height * height); i++){
  asterisks.push("*");
  spaces.push("/");
}
  asterisks = asterisks.join("");
  spaces = spaces.join("");
  console.log("asterisks", asterisks);
  console.log("spaces", spaces);

  for (var i = 1; i < height * 2; i += 2) {
    console.log(spaces.slice(0, ((height - 1 + height) - i)) +
     (asterisks.slice(0 , (asterisks.length + i  - (asterisks.length)))));
  }
};

tree(5);