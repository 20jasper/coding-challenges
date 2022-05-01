//URL--
// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064
 
//INSTRUCTIONS--
/* Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8


*/ 
 
//SOLUTION--
/* I know the nth row will have n numbers in it
I need to find the index of the first number in the nth row
Then I will find the last number in that row
Then I will find the sum of those numbers 
*/ 
function rowSumOddNumbers(n){
    const rowIndex = (n) => {
      let sum = 0;
      for(let i = 0; i<n; i++){
          sum +=i
      }
      return sum;
  }
    const firstNumber = rowIndex(n)*2 +1
    const lastNumber = firstNumber+(n-1)*2
    const sum = n*(firstNumber+lastNumber)/2
    return sum;
  }
//TESTCASES--
 console.log(rowSumOddNumbers(1)) //1
 console.log(rowSumOddNumbers(42)) //74088