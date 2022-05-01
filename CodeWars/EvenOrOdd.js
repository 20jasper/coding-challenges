//URL-- 
//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
 
//INSTRUCTIONS-- 
//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
 
//SOLUTION--
//I am going to make a function that checks if the input is an integer
//if it is, then I will check to see if its remainder is 0 when divided by 0
//If it is, then it is even, and if not, it is odd

function even_or_odd(number) {
    if (Number.isInteger(number)) {
      if (number%2===0) {
        console.log(`${number} is even`);
        return "Even";
      } else {
        console.log(`${number} is odd`);
        return "Odd";
      }
    } else {console.log("input an integer");
           }
  }

//TESTCASES--
even_or_odd(10); //even
even_or_odd(0); //even
even_or_odd(-1); //odd
even_or_odd(-1343); //odd
even_or_odd(-1256); //even