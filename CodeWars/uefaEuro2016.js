//URL--
// https://www.codewars.com/kata/57613fb1033d766171000d60

//INSTRUCTIONS--
/* Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
*/

//SOLUTION--
/* I am going to make a switch to check which one. 
I am going to make a string for which teams are playing 
Then I am going to check to see if the first team's score is 0, 1, or 2, and add it to the original string
*/
function uefaEuro2016(teams, scores) {
	let string = `At match ${teams[0]} - ${teams[1]},`;
	if (scores[0] === 0) {
		return `${string} ${teams[1]} won!`;
	}
	if (scores[0] === 1) {
		return `${string} teams played draw.`;
	}
	if (scores[0] === 2) {
		return `${string} ${teams[0]} won!`;
	}
}
//TESTCASES--
console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0])); //"At match Germany - Ukraine, Germany won!"
console.log(uefaEuro2016(['Belgium', 'Italy'], [0, 2])); //"At match Belgium - Italy, Italy won!"
console.log(uefaEuro2016(['Portugal', 'Iceland'], [1, 1])); //"At match Portugal - Iceland, teams played draw."
