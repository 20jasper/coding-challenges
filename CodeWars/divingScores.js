//URL--
// https://www.codewars.com/kata/5c97be7d856e611dbb78805f

//INSTRUCTIONS--
/* Description

For this Kata you will need to create a function which works out the score of a dive in an Olympic diving competition and displays it in the correct format. The function will take 2 arguments:

    An array of numbers representing the judges scores called scores
    A number representing the degree of difficulty of the dive called tariff

The 2 lowest and 2 highest scores by the judges are discarded and the 3 remaining scores are added together. The result of this is then multiplied by the degree of difficulty (tariff) to get the score for the dive.

https://www.britannica.com/story/how-is-diving-scored

The answer should be a string and always have exactly 2 digits after the decimal point as this is how diving scores are displayed

Note. The scores will only contain numbers between 0 - 10 and the tariff will always be greater than 0
Example

  scoreOfDive([7, 7.5, 8, 7.5, 6, 7, 7], 3) --> '64.50'


*/

//SOLUTION--
/* I am going to sort the array then use reduce to add every element but the first and last 2
return the sum times the tariff rounded to two decimal places
*/
function scoreOfDive(scores, tariff) {
    scores.sort((a, z) => a - z)
    const countedScores = scores.slice(2, -2)
    const sum = countedScores.reduce((sum, value) => sum + value, 0)
    const totalScore = sum * tariff
    return totalScore.toFixed(2)
}
//TESTCASES--
console.log(scoreOfDive([7, 7.5, 8, 7.5, 6, 7, 7], 3), '64.50');
console.log(scoreOfDive([5, 6.5, 5.5, 5, 6, 4.5, 6], 3.2), '52.80');
console.log(scoreOfDive([7, 7, 7, 7.5, 6.5, 7, 7], 2.6), '54.60');