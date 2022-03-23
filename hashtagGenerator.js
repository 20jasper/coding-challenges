//URL--
// https://www.codewars.com/kata/52449b062fb80683ec000024
 
//INSTRUCTIONS--
/* The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.

Examples

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/ 
 
//SOLUTION--
/* 
I am going to separate the string by spaces
Then I will trim each element in the new array
Then I will capitalize the first character
Then I will join the array into a string
Then I will check to see if the string is less than 140 characters or is empty
If so, return false
If not return #string

After doing it, I noticed I didn't need to trim the whitespace since it just creates empty strings, which don't change the final answer
*/ 
function generateHashtag (str) {
    let hashtag = str.split(' ')
                        .map((x)=>x.charAt(0).toUpperCase() + x.slice(1))
                        .join('')
    if (hashtag=='' || !(hashtag.length<140)){
      return false;
    } else {
      return `#${hashtag}`
    }
  }
//Testcases  
  console.log(generateHashtag("")) // false 
  console.log(generateHashtag(" ")) // false 
  console.log(generateHashtag("       ")) // false 
  console.log(generateHashtag("Hi")) // "#Hi"
  console.log(generateHashtag("hi hi")) // "#HiHi"
  console.log(generateHashtag("I am doing codewars")) // "#IAmDoingCodewars"
  console.log(generateHashtag("h".repeat(139))) // "#Hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" (but with 139 hs)
  console.log(generateHashtag("H".repeat(140))) // false