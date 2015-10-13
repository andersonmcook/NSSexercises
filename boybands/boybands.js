var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
console.log(bands);
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
console.log(vegetables);
// The number of loops to perform (what if the array changes?)
var loopCount = bands.length; //+ vegetables.length;

// Keep track of which band we're on in the loop
var currentBand = bands[i];

// Keep track of which veggie we're on in the loop
var currentVeggie = vegetables[i];

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

var outputBands = "";
var outputVeggies = "";

// Start looping
for (var i = 0; i < loopCount; i += 1) {

  // Add the band names into the correct <div>
  var currentBand = bands[i];

  // Add the veggie names into the correct <div>
  //currentVeggie = ???;
  var currentVeggie = vegetables[i];

  outputBands = outputBands + "<div>" + currentBand + "</div>";
  outputVeggies = outputVeggies + "<div>" + currentVeggie + "</div>";
  //output = output + currentVeggie = "<div>" + currentVeggie + "</div>";

}

  bandElement.innerHTML = outputBands;
  veggieElement.innerHTML = outputVeggies;
console.log(bandElement);
//Loop through the two arrays provided and output each element in the arrays into their corresponding
// HTML <div> element. Ensure that each item is in a block element (e.g. li, div, p. etc...)