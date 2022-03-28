//URL--
// https://www.codewars.com/kata/57eae65a4321032ce000002d
 
//INSTRUCTIONS--
/* Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

*/ 
 
//SOLUTION--
/* I am going to split the string into an array of digits
Then I will check to see if a number is below 5 
if so, replace it with a 0
If not, replace it with a 1
Then I will join the elements together into one array
*/ 
function fakeBin(x){
    return x.split('')
            .map(x => x < 5 ? 0 : 1)
            .join('');
  }
//TESTCASES--
console.log(fakeBin('45385593107843568')); //'01011110001100111'
console.log(fakeBin('509321967506747')); //'101000111101101'