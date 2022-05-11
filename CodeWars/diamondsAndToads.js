//URL--
// https://www.codewars.com/kata/57fa537f8b0760c7da000407/train/javascript

//INSTRUCTIONS--
/* Base on the fairy tale Diamonds and Toads from Charles Perrault. In this kata you will have to complete a function that take 2 arguments:

    A string, that correspond to what the daugther says.
    A string, that tell you wich fairy the girl have met, this one can be good or evil.

The function should return the following count as a hash:

    If the girl have met the good fairy:
        count 1 ruby everytime you see a r and 2 everytime you see a R
        count 1 crystal everytime you see a c and 2 everytime you see a C
    If the girl have met the evil fairy:
        count 1 python everytime you see a p and 2 everytime uou see a P
        count 1 squirrel everytime you see a s and 2 everytime you see a S

*/

//SOLUTION--
/* 
I am going to make an object for each fairy.
Each object will have 2 properties with values of 0
    The good object will have properties of ruby and crystal
    The evil object will have properties of python and squirrel
I am going to count the number of lowercase and uppercase r's, c's, p's, and s's
    If the letter is uppercase, add 2 to the corresponding property
        else, add 1 to the corresponding property
if the fairy is good, return the good object
else, return the evil object
*/
function diamondsAndToads(sentence, fairy) {
    const good = {
        ruby: 0,
        crystal: 0,
    }
    const evil = {
        python: 0,
        squirrel: 0,
    }
    const arr = [...sentence]
    arr.forEach(letter => {
        lowerCaseLetter = letter.toLowerCase()
        let num
        if (letter === lowerCaseLetter) {
            num = 1
        } else {
            num = 2
        }
        if (lowerCaseLetter === 'r') {
            good.ruby += num
        }
        if (lowerCaseLetter === 'c') {
            good.crystal += num
        }
        if (lowerCaseLetter === 'p') {
            evil.python += num
        }
        if (lowerCaseLetter === 's') {
            evil.squirrel += num
        }
    });
    if (fairy === 'good') {
        return good
    }
    return evil
}

//TESTCASES--
console.log(diamondsAndToads("Ruby and Crystal", "good"), { crystal: 2, ruby: 3 });