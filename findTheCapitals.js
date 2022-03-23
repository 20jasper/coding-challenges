//URL--
// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript
 
//INSTRUCTIONS--
/* Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
*/ 
 
//SOLUTION--
/* I am going to split the strings into arrays 
Then I will check to see if the lowercase version of a character is not the same as the regular version
If so, put its index in an array

I ended up getting undefined for anything that didn't match, so I filtered anything that was undefined from the array
*/ 
const capitals = function (word) {
	const arr = word.split('');
  const indexArr = arr.map((letter, index)=>{
    if (letter!==letter.toLowerCase()) {
      return index;
    }
  })
  .filter(x=>x!==undefined)
  return indexArr;
};
//TESTCASES--
 console.log(capitals('hi'))//[]
 console.log(capitals('HHHi'))//[0,1,2]
 console.log(capitals('hiH'))//[2]
 console.log(capitals('hJJdi'))//[1,2]

