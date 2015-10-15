/*
  ...........YOUR MISSION...........

  Write JavaScript functions that perform the following tasks.

  1. document.write() the characters of any string in reverse order.
  2. document.write() the characters of any string in alphabetical order.
  3. document.write() true, or false, if the passed string is a palidrome.

  Note: document.write() is a fast way to put content into the DOM 
  without the need for a getElementById() and innerHTML.
*/
/*var testString = "A car, a man, a maraca";

document.write("<div>" + testString + "</div>");

function reversal(origString) {
  var reversedString = origString.split("").reverse().join("");
  document.write(reversedString);

  
  return reversedString;
}

function alphabits(origString) {
  document.write("<div>" + origString.split("").sort().join("") + "</div>");
}

function palindrome(origString) {
  var newString = origString.replace(/[\s,]/g, "").toLowerCase();
  var reversedNewString = reversal(newString);

  if (newString === reversedNewString) {
    document.write("<div>\"" + origString + "\" is a palidrome</div>");
    
  } else {
    document.write("<div>\"" + origString + "\" is not a palindrome</div>");
    
  }
}



reversal(testString);
alphabits(testString);
palindrome(testString);*/

/*
var Car = {
	make: "Nissan",
	wheels: 4,
	model: "Xterra",
	options: {
		ac: true,
		bulletProof: false,
		underlighting: false,
		spinners: true
	}
};
console.log(Car.options.spinners);
*/

function add(one, two) {
	return one + two;
}

var result = add(1, 2);
console.log("result", result);


















