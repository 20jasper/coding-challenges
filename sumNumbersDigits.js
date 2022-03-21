//URL--
// https://www.codewars.com/kata/52f3149496de55aded000410
 
//INSTRUCTIONS--
/* Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. 
*/ 
 
//SOLUTION--
/* I am going to convert the numbers to a string
Then I will split each character into an element of an array
Then I will convert each element in the array to a number
Then I will add up all the number in the array

I didn't think about minus signs, so they gave me an error
I fixed this by checking to see if they are a substring, and if so, removing them
*/ 
function sumDigits(number) {
    //convert number to a string
    let string = String(number);
    //check to see if '-' is a substring
    if (string.includes('-')){
      //if so, remove it
      string = string.replace('-','')
    }
    //convert number into array of numbers
    const digitArr = string.split('');
    //convert strings in array to numbers
    let numberArr = digitArr.map(number=>Number(number))
    //add up all the numbers in the array
    return numberArr.reduce((sum, digit)=>sum+digit, 0)
  }
  //TESTCASES--
   console.log(sumDigits(10)) //1
   console.log(sumDigits(123)) //6
   console.log(sumDigits(110)) //2
   console.log(sumDigits(1)) //1
   console.log(sumDigits(-3)) //3
  