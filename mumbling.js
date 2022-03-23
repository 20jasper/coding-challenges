//URL--
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
 
//INSTRUCTIONS--
/* This time no story, no theory. The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.

*/ 
 
//SOLUTION--
/* I am going to split the string into an array
Then I will add the lowercase string the value of the index times to each string
Then I will join the strings by a dash

I did not realise the first letter was capitalized, so I just did that and it worked
*/ 
function accum(s) {
	return s.split('')
    .map((x,i)=>x.toUpperCase()+x.toLowerCase().repeat(i))
    .join('-')
}
//TESTCASES--
console.log(accum('X'))//X
console.log(accum('Xyz'))//X-yy-zzz
console.log(accum('XabC'))//X-aa-bbb-Cccc
//TESTCASES--
console.log(accum('X'))//X
console.log(accum('Xyz'))//X-yy-zzz
console.log(accum('XabC'))//X-aa-bbb-Cccc