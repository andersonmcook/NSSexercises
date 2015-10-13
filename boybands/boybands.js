var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
console.log("bands", bands);
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
console.log("vegetables", vegetables);
// The number of loops to perform (what if the array changes?)
var loopCount = (bands.length + vegetables.length) / 2;
console.log("loopCount", loopCount);
// Keep track of which band we're on in the loop
var currentBand = bands[i];
// Keep track of which veggie we're on in the loop
var currentVeggie = vegetables[i];
// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");
console.log("bandElement", bandElement);
// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");
console.log("veggieElement", veggieElement);

var outputBands = "";
console.log("outputBands", outputBands);
var outputVeggies = "";
console.log("outputVeggies", outputVeggies);

// Start looping
for (var i = 0; i < loopCount; i += 1) {

  // Add the band names into the correct <div>
  var currentBand = bands[i];
  console.log("currentBand", currentBand);
  // Add the veggie names into the correct <div>
  //currentVeggie = ???;
  var currentVeggie = vegetables[i];
  console.log("currentVeggie", currentVeggie);
  outputBands = outputBands + "<div>" + currentBand + "</div>";
  outputVeggies = outputVeggies + "<div>" + currentVeggie + "</div>";
  //output = output + currentVeggie = "<div>" + currentVeggie + "</div>";

}

bandElement.innerHTML = outputBands;
veggieElement.innerHTML = outputVeggies;
console.log("bandElement", bandElement);
console.log("veggieElement", veggieElement);
//Loop through the two arrays provided and output each element in the arrays into their corresponding
// HTML <div> element. Ensure that each item is in a block element (e.g. li, div, p. etc...)