//URL--
// https://www.codewars.com/kata/520b9d2ad5c005041100000f
 
//INSTRUCTIONS--
/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
*/ 
 
//SOLUTION--
/* I am going to split the string by spaces
I will then check to see if each element is a word or punctuation
If it is a word, move the first character at the end followed by ay
If it is punctuation, do nothing
Then I will join the array again by spaces
*/ 
function pigIt(str){
    return str.split(' ')
              .map(x=> x.toLowerCase()!==x.toUpperCase() ? x.slice(1) + x.charAt(0) + 'ay' : x)
              .join(' ')
  }  
  //TESTCASES--
  console.log(pigIt('Pig Latin')) //'igPay atinLay'
  console.log(pigIt('Hi !')) //'iHay !'
  console.log(pigIt('Pig latin is cool')) //'igPay atinlay siay oolcay'