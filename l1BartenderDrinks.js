//URL--
// https://www.codewars.com/kata/568dc014440f03b13900001d

//INSTRUCTIONS--
/* Complete the function that receives as input a string, and produces outputs according to the following table:
Input 	Output
"Jabroni" 	"Patron Tequila"
"School Counselor" 	"Anything with Alcohol"
"Programmer" 	"Hipster Craft Beer"
"Bike Gang Member" 	"Moonshine"
"Politician" 	"Your tax dollars"
"Rapper" 	"Cristal"
anything else 	"Beer"

Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

*/

//SOLUTION--
/* I am going to make a Map and replace each input with the appropriate output
 */
const Map = {
	jabroni: 'Patron Tequila',
	'school counselor': 'Anything with Alcohol',
	programmer: 'Hipster Craft Beer',
	'bike gang member': 'Moonshine',
	politician: 'Your tax dollars',
	rapper: 'Cristal',
};
function getDrinkByProfession(param) {
	return Map[param.toLowerCase()] || 'Beer';
}
//TESTCASES--
console.log(getDrinkByProfession('jabrOni')); //'Patron Tequila'
console.log(getDrinkByProfession('school counselor')); //'Anything with Alcohol'
console.log(getDrinkByProfession('programMer')); //'Hipster Craft Beer'
console.log(getDrinkByProfession('bike gang member')); //'Moonshine'
console.log(getDrinkByProfession('politician')); //'Your tax dollars'
console.log(getDrinkByProfession('rappeR')); //'Cristal'
console.log(getDrinkByProfession('hi, beans')); //'Beer'
