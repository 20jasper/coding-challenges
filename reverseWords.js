//URL--
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
 
//INSTRUCTIONS--
/* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
*/ 
 
//SOLUTION--
/* I am going to split the string by spaces and then reverse them. 
Then I will join them with a space

I found that you can't reverse a string with the reverse() method, so I split all the strings into arrays

It turned out that you cannot spit a string by a character that isn't a substring, so I added logic to only split the string if a space is a substring
*/ 
function reverseWords(str) {
    let arr = str;
    let reverseStr=[];
    if (arr.includes(' ')){
    arr = arr.split(' ');
    for (let i = 0; i<=arr.length-1; i++) {
      reverseStr.push(arr[i].split('').reverse().join(''))
    } return reverseStr.join(' ');
    } else {
        for (let i = 0; i<=arr.length-1; i++) {
           reverseStr.push(arr.split('').reverse().join(''))
        return reverseStr.join('');
        } 
    } 
  }
  
  //TESTCASES--
   console.log(reverseWords('double  spaced  words')); //'elbuod  decaps  sdrow'
   console.log(reverseWords('abc')); //'abc'
   console.log(reverseWords('a b c')); //'abc'
   console.log(reverseWords('ab ba ca')); //'ba ab ac'
   console.log(reverseWords('apple')); //'elppa'
  