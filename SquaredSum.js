//URL--
// https://www.codewars.com/kata/515e271a311df0350d00000f
 
//INSTRUCTIONS--
/* Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

*/ 
 
//SOLUTION--
/* I am going to set the total to 0
I will square the array elements and add them to the total until there is nothing else in the array then return the total
*/ 
function squareSum(numbers){
    let total = 0;
    for (let i = 0; i<numbers.length; i++){
      total += (numbers[i]**2);
    }
    return total;
  }
  
//TESTCASES--
console.log(squareSum([1,2])); //5
console.log(squareSum([1]));//1
console.log(squareSum([]));//0
console.log(squareSum([1,2,3,4]));//30