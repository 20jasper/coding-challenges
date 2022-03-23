//URL--
// https://www.codewars.com/kata/514b92a657cdc65150000006
 
//INSTRUCTIONS--
/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/ 
 
//SOLUTION--
/* I am going to make an array of numbers divisible by 3 or 5
Then I will add them all up

After starting, I realized the array was unnecessary, and I just added a number to the sum if it was divisible by 3 or 5
*/ 
function solution(number){
    let sum = 0;
    for(let i = 0; i<number; i++){
      if (i%5===0||i%3===0){
        sum+=i;;
      }
    }
    return sum;
  }
//TESTCASES--
console.log(solution(-1))//0
console.log(solution(0))//0
console.log(solution(2))//0
console.log(solution(5))//8
console.log(solution(10))//23