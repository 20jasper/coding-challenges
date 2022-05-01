//URL--
// https://www.codewars.com/kata/54da539698b8a2ad76000228

//INSTRUCTIONS--
/* You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

    Note: you will always receive a valid array (string in COBOL) containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).


*/

//SOLUTION--
/* If the array is not 10 long, return false
I will make an object to count the amount of each direction
If there are a different number of 'n's and 's's or 'w's and 'e's, then return false
Else return true
*/
function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false
    }
    const count = {
        'n': 0,
        'e': 0,
        's': 0,
        'w': 0,
    }
    walk.forEach(element => count[element]++);
    return (count['n'] == count['s'] && count['w'] == count['e'])
}

//TESTCASES--
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), true);
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n']), false);
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 'n', 'n']), false);
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 'n', 'n']), false);
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e',]), true);