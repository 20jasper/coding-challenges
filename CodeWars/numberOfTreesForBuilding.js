//URL--
// https://www.codewars.com/kata/6011915d02134e001bc4fbba

//INSTRUCTIONS--
/*  Return the sum of trees needed, rounded up.

The function recieves a array of tuples, input. The first element of tuple is the amount of logs needed for the model, and the second element of tuple is the number of models built.

Also, the function recieves an integer number num, which is the amount of logs per tree.

All inputs are integers and valid.
Examples:

  inp = [[10, 5], [30, 4], [8, 6]]
  num = 5

output --> 44

picture
*/

//SOLUTION--
/* I'm going to use reduce to get the number of logs needed
    Multiply both numbers in each touple and add the products
Divide the number of logs needed by the logs needed per tree
return the result rounded up
*/
function numOfTrees(inp, num) {
    const numOfLogs = inp.reduce((sum, touple) => sum + touple[0] * touple[1], 0)
    return Math.ceil(numOfLogs / num)
}

//TESTCASES--
console.log(numOfTrees([[10, 5], [30, 4], [8, 6]], 5), 44);
console.log(numOfTrees([[2, 9]], 5), 4);
console.log(numOfTrees([[3, 8]], 9), 3);