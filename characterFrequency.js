//URL--
// https://www.codewars.com/kata/548ef5b7f33a646ea50000b2

//INSTRUCTIONS--
/* Description

Welcome, Warrior! In this kata, you will get a message and you will need to get the frequency of each and every character!
Explanation

Your function will be called char_freq/charFreq/CharFreq and you will get passed a string, you will then return a dictionary (object in JavaScript) with as keys the characters, and as values how many times that character is in the string. You can assume you will be given valid input.
Example

charFreq("I like cats") // Returns {'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1}

*/

//SOLUTION--
/* I am going to split the character into an array
Then I will make an object with a property for each character in the array 
Then I will set their values equal to how many times they appear in the array
*/
function charFreq(message) {
	return message.split('').reduce((obj, item) => {
		if (!obj[item]) {
			obj[item] = 0;
		}
		obj[item] = obj[item] + 1;
		return obj;
	}, {});
}
//TESTCASES--
console.log(charFreq('I like cats')); //{'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1}
