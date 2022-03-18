//URL--https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
// 
 
//INSTRUCTIONS--
/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

*/ 
 
//SOLUTION--
/* I am going to split the string into an array by spaces and assign it to a new variable
Then I will take the first character of each and output them separated by a period

I missed the part where the initials needed to be capital, so I had to convert the elements to uppercase before it worked 
*/ 
function abbrevName(name){
    let nameArr = name.split(" ");
    let firstName = nameArr[0].toUpperCase();
    let lastName = nameArr[1].toUpperCase();
    return (`${firstName[0]}.${lastName[0]}`);
  }
  
//TESTCASES--
abbrevName("Sam Harris");
abbrevName("BIll Nye");
abbrevName("Bob Bill");
abbrevName("B Samuel");
abbrevName("Cameron David");