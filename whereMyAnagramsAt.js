//URL--
// https://www.codewars.com/kata/523a86aa4230ebb5420001e1
 
//INSTRUCTIONS--
/* Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. 
*/ 
 
//SOLUTION--
/* I am going to split the strings into arrays and then sort the arrays alphabetically
If they are the same, return the word
*/ 
function anagrams(word, words) {
    return words.filter(x=>alphabetic(word)===alphabetic(x));
  }
  function alphabetic(string) {
    return string.split('')
                  .sort((a,b)=>{
                    if (a>b){
                      return 1
                    } else {
                      return -1
                    }
                  })
                  .join('');
  }
  //after doing it, I found out that .sort() will sort without any arguments so I could have just written it like this
  function anagrams(word, words) {
    return words.filter(x=>alphabetic(word)===alphabetic(x));
  }
  function alphabetic(string) {
    return string.split('')
                  .sort()
                  .join('');
  }
  //TESTCASES--
  console.log(anagrams('abcd', ['aabb', 'dcba', 'bbaa', 'dada'])) //['dcba']
  console.log(anagrams('abdc', ['aabb', 'obama', 'bbaa', 'dada'])) //[]
  console.log(anagrams('abc', ['cba', 'obama', 'bbaa', 'acb'])) //['cba', 'acb']