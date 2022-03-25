//URL--
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018
 
//INSTRUCTIONS--
/* Complete the solution so that it reverses the string passed into it. 
*/ 
 
//SOLUTION--
/* I am going to split the string into an array 
Then I will reverse it and join it
*/ 
function solution(str){
  return str.split('')
            .reverse()
            .join('')
}
//TESTCASES--
console.log(solution('world')) // 'dlrow'
console.log(solution('hello')) // 'olleh'
console.log(solution('')) // ''
console.log(solution('h')) // 'h'