/*
  .....  YOUR MISSION  .....
  1. Author functions that define the Make
      and Model of a Car and the Car itself.
  2. Create three instances of your Car that
      each have a different color.
  3. Each Car you create should inherit the
      make and model name.
*/


/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
 */
var Make = function () {
  this.make = "Toyota";
};

/*
Create a function, Model, to hold the 
corresponding property and value
*/
var Model = function () {
  this.model = "Prius";
};


// What is the prototype of a Model?
Model.prototype = new Make();

// Define a Car
var Car = function (color) {
  this.color = color;
};

// What is the prototype of a Car?
Car.prototype = new Model();

// Create the first car
var firstCar = new Car("red");

// Create the second car
var secondCar = new Car("blue");

// Create the third car
var thirdCar = new Car("green");

console.log("firstCar", firstCar);
console.log("firstCar.make", firstCar.make);
console.log("firstCar.model", firstCar.model);
console.log("firstCar.color", firstCar.color);
console.log("secondCar", secondCar);
console.log("thirdCar", thirdCar);
