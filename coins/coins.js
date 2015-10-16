/* ...........YOUR MISSION...........

Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common 
American coins of quarters, dimes, nickels, and pennies.

Input: 0.67 Output: { quarters: 2, dimes: 1, nickels: 1, pennies: 2 }

*/

var Coins = {
	penny: 1,
	nickel: 5,
	dime: 10,
	quarter: 25
};

var results = document.getElementById("results");

function coinCounter (money) { // Initialize a JavaScript object to hold the coins var coinPurse = {};
 
var coinPurse = {
	pennies: 0,
	nickels: 0,
	dimes: 0,
	quarters: 0
};
console.log("money", money);

coinPurse.quarters = Math.floor(money / Coins.quarter);
console.log("coinPurse.quarters", coinPurse.quarters);

var remainder1 = (((money / Coins.quarter)) - Math.floor(money / Coins.quarter)) * 25;
console.log("remainder1", remainder1);

coinPurse.dimes = Math.floor(remainder1 / Coins.dime);
var remainder2 = (((remainder1 /Coins.dime) - Math.floor(remainder1 / Coins.dime))) * 10;
console.log("remainder2", remainder2);

coinPurse.nickels = Math.floor(remainder2 / Coins.nickel);
coinPurse.pennies = Math.round((((remainder2 /Coins.nickel) - Math.floor(remainder2 / Coins.nickel))) * 5);
console.log("coinPurse.pennies", coinPurse.pennies);

console.log("coinPurse", coinPurse);
results.innerHTML += "<div>There are " + coinPurse.quarters + " quarter(s), " + coinPurse.dimes + " dime(s), " 
	+ coinPurse.nickels + " nickel(s), and " + coinPurse.pennies + " pennies in " + money + " cents.</div>";

};

coinCounter(100);
coinCounter(89);
coinCounter(24);
coinCounter(15);
coinCounter(41);
coinCounter(82);


//Mathew's solution
/*
function coinCounter (money) { // Initialize a JavaScript object to hold the coins var coinPurse = {};
    coinPurse = {};
    var cents = money * 100;

    coinPurse.quarters = Math.floor(cents / 25);
    cents = cents % 25;

    coinPurse.dimes = Math.floor(cents / 10)
    cents = cents % 10;

    coinPurse.nickels = Math.floor(cents / 5)

    coinPurse.pennies = cents % 5;
    return coinPurse; 
}

var coins = coinCounter(13.24);

console.log("Coin", coins);
*/





