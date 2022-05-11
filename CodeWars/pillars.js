//URL--
// https://www.codewars.com/kata/5bb0c58f484fcd170700063d

//INSTRUCTIONS--
/* There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

    number of pillars (≥ 1);
    distance between pillars (10 - 30 meters);
    width of the pillar (10 - 50 centimeters).

Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

*/

//SOLUTION--
/* 
*/
function pillars(num_pill, dist, width) {
    if (num_pill === 1) {
        return 0
    }
    const distCM = dist * 100
    return (num_pill - 2) * width + (num_pill - 1) * distCM
}
//TESTCASES--
console.log(pillars(1, 10, 10), 0);
console.log(pillars(2, 20, 25), 2000);
console.log(pillars(11, 15, 30), 15270);