//URL--
// https://www.codewars.com/kata/57eaeb9578748ff92a000009
 
//INSTRUCTIONS--
/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

*/ 
 
//SOLUTION--
/* I am going to make a variable for the total and then add each element to the total after explicitly changing the strings to numbers then return its value
*/ 
function sumMix(x){
    let total = 0
    for (let i = 0; i<x.length; i++){
     total += Number(x[i]);
    }
    return total;
  }
  
//TESTCASES--
console.log(sumMix([9, 3, '7', '3'])); //22
console.log(sumMix(['10', 30, '7', '3'])); //50
console.log(sumMix([9, 3.5, '0', '-2']));//10.5
console.log(sumMix([9, '4', 5, '3']));//21