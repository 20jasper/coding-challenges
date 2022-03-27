//URL--
// https://www.codewars.com/kata/55a70521798b14d4750000a4
 
//INSTRUCTIONS--
/* Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]

*/ 
 
//SOLUTION--
/* I am going to use a template literal so that I can put a variable in the middle of the sentence
*/ 
function greet(name){
    return `Hello, ${name} how are you doing today?`
  }
//TESTCASES--
console.log(greet("Ryan")) // Hello, Ryan how are you doing today?
console.log(greet("Bill")) // Hello, Bill how are you doing today?