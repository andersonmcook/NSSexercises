/*Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

A score between 50-60 is an F
A score between 61-70 is a D
A score between 71-80 is a C
A score between 81-90 is a B
A score between 91-100 is an A
Start with array of random scores in your JavaScript
*/
/*
Your assignment

Use console.log to output the following criteria:

How many of each grade?
What is the lowest grade?
What is the highest grade?
*/



var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
console.log("scores", scores);
var scoreA = [];
var scoreB = [];
var scoreC = [];
var scoreD = [];
var scoreF = [];
/*for (var i=0; i < scores.length; i++) {
	var score = scores[i];
	switch (score) {
		case (score > 90):
			console.log(scores[i] + " is an A");
			break;
		default:
			console.log(scores[i] + " is an F");
	}
} */

for (var i=0; i < scores.length; i++) {
	var score = scores[i];
	if (score > 90) {
		scoreA.push(score);
		console.log(score + " is an A");
	} else if (score > 80) {
			scoreB.push(score);
			console.log(score + " is a B");
	} else if (score > 70) {
			scoreC.push(score);
			console.log(score + " is a C");
	} else if (score > 60) {
			scoreD.push(score);
			console.log(score + " is a D");
	} else {
			scoreF.push(score);
			console.log(score + " is an F");
	}
} 

console.log("There are " + scoreA.length + " A's" + " and they are " + scoreA);
console.log("There are " + scoreB.length + " B's" + " and they are " + scoreB);
console.log("There are " + scoreC.length + " C's" + " and they are " + scoreC);
console.log("There are " + scoreD.length + " D's" + " and they are " + scoreD);
console.log("There are " + scoreF.length + " F's" + " and they are " + scoreF);

score = scores.sort();
console.log("score array sorted",score);

var highestGrade = score[score.length - 1];
console.log("highestGrade", highestGrade);
var lowestGrade = score[0];
console.log("lowestGrade", lowestGrade);


/*
for (var i =0; i < scores.length; i++) {
	if (scores[i] > (scores[i+1] && 90)) {
		highestGrade = scores[i];
	} else if (scores[i] < scores[i+1]) {
		lowestGrade = scores[i];
	}
}
*/

console.log("The highest grade is " + highestGrade);
console.log("The lowest grade is " + lowestGrade);

// Steve's code below
console.log("Steve's code is below");

var currentScore,
		highestScore = 0,
		lowestScore = 101,
		gradeA=[],
		gradeB=[],
		gradeC=[],
		gradeD=[],
		gradeF=[];

for (var i = 0; i < scores.length; i++) {
	currentScore = scores[i];

	if (currentScore > highestScore) {
		highestScore = currentScore;
	}

	if (currentScore < lowestScore) {
		lowestScore = currentScore;
	}


switch (true) {
	case (currentScore < 61):
		gradeF.push(currentScore);
		break;
	case (currentScore > 60 && currentScore < 71):
		gradeD.push(currentScore);
		break;
	case (currentScore > 70 && currentScore < 81):
		gradeC.push(currentScore);
		break;
	case (currentScore > 80 && currentScore < 91):
		gradeB.push(currentScore);
		break;
	case (currentScore > 90):
		gradeA.push(currentScore);
		break;
	}
}

console.log("There are " + gradeA.length + " A's");
console.log("There are " + gradeB.length + " B's");
console.log("There are " + gradeC.length + " C's");
console.log("There are " + gradeD.length + " D's");
console.log("There are " + gradeF.length + " F's");
console.log("The highest grade is " + highestScore);
console.log("The lowest grade is " + lowestScore);







