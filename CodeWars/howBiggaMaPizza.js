//URL--
// https://www.codewars.com/kata/5e9c06f95ea5b30033903194

//INSTRUCTIONS--
/* Kata Task

Welcome to ma pizza shop!

I hava the bigga spherical blob of dough.

And I wanna squisha ma dough to a circle to maka ma famous pizza base!

You just choosa the "crispy" crust or the "thick" crust.

So, how bigga ma pizza gonna be?
Input

    blob = my dough blob diameter

    crust = "crispy" or "thick"

Output

    Pizza radius

Notes

    All data is valid

    Blob diameter is >= 0

    Input/Output units are same

    The "crispy" crust pizzas are 1 unit deep

    The "thick" crust pizzas are 5 units deep

    Near enough is good enough. If your answer is correct withn 0.001 then the test should pass.

*/

//SOLUTION--
/* I am going to calculate the volume of dough with 4/3*Math.PI*radius**3
If the crust is crispy, height is 1
else, height is 5
Then I am going to find the radius of the new pizza with the formula Math.sqrt(volume / (Math.PI * height))
*/
function howBiggaMaPizza(blob, crust) {
    const radius = blob / 2
    const volume = 4 / 3 * Math.PI * radius ** 3
    let height;
    if (crust === 'crispy') {
        height = 1
    } else {
        height = 5
    }
    return Math.sqrt(volume / (Math.PI * height))
}
//TESTCASES--
console.log(howBiggaMaPizza(5, "crispy"), 4.564);
console.log(howBiggaMaPizza(5, "thick"), 2.041);
console.log(howBiggaMaPizza(10, "crispy"), 12.909);
console.log(howBiggaMaPizza(10, "thick"), 5.773);