//URL--
// https://www.codewars.com/kata/60a94f1443f8730025d1744b

//INSTRUCTIONS--
/* Task:

You need to write a function grid that returns an alphabetical grid of size NxN, where a = 0, b = 1, c = 2....
Examples:

grid(4)

a b c d
b c d e
c d e f
d e f g

grid(10)

a b c d e f g h i j
b c d e f g h i j k
c d e f g h i j k l
d e f g h i j k l m
e f g h i j k l m n
f g h i j k l m n o
g h i j k l m n o p
h i j k l m n o p q
i j k l m n o p q r
j k l m n o p q r s

Notes:

    After "z" comes "a"
    If function receive N < 0 should return:

    null

*/

//SOLUTION--
/* I am going to make a loop that rows that are n + 1 long
The nth character in the first row is equal to 0+n

The nth row is the same as the first row, but every number is increased by n- 1

Then I will use a map to change the numbers into letters

If the number is more than 26, set it equal to the remainder of the number/26
*/
function grid(n) {
    if (n < 0) {
        return null
    }
    let grid = ''

    for (let row = 0; row < n; row++) {
        let arr = []
        for (let i = row + 0; i < n + row; i++) {
            arr.push(i % 26)
        }
        const alphabet = arr.map(x => String(x).replace(x, Map[x]))
        grid += alphabet.join(' ')
        if (row < n - 1) {
            grid += '\n'
        }
    }

    return grid
}
const Map = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e',
    5: 'f',
    6: 'g',
    7: 'h',
    8: 'i',
    9: 'j',
    10: 'k',
    11: 'l',
    12: 'm',
    13: 'n',
    14: 'o',
    15: 'p',
    16: 'q',
    17: 'r',
    18: 's',
    19: 't',
    20: 'u',
    21: 'v',
    22: 'w',
    23: 'x',
    24: 'y',
    25: 'z',
}
//TESTCASES--
console.log(grid(0)); //''
console.log(grid(1)); //'a'
console.log(grid(2)); //'a b\nb c'
console.log(grid(4)); //'a b c d\nb c d e\nc d e f\nd e f g'
console.log(grid(15)); //'a b c d\nb c d e\nc d e f\nd e f g'
console.log(grid(-1)); //null