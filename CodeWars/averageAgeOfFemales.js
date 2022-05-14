//URL--
// https://www.codewars.com/kata/5aa1931311dbd9358b000823

//INSTRUCTIONS--
/* You are going to be given a list of people. Their properties are name (string), gender (male/female), and age (int). Your job is to return the average age of all females in the list.

#Examples:

sortArray([{name:'Sarah', gender:'female', age:25}, {name:'Tom', gender:'male', age:18}, {name:'Tim', gender:'male', age:65}, {name:'Kim', gender:'female', age:58}]) 
should return 41.5

#Input

An array of objects.

#Output

A number, the average age of all females.

*/

//SOLUTION--
/* I am going to use a for each loop to sum all ages of the people that are female and count how many there are
If count is 0, return 0
Then I will return the sum of ages divided by the number
*/
function averageFemale(list) {
    let sum = 0;
    let count = 0;
    list.forEach(person => {
        if (person.gender === 'female') {
            sum += person.age
            count++
        }
    });
    if (count === 0) {
        return 0
    }
    return sum / count
}
//TESTCASES--
console.log(averageFemale([{ name: 'Sarah', gender: 'female', age: 25 }, { name: 'Tom', gender: 'male', age: 18 }, { name: 'Tim', gender: 'male', age: 65 }, { name: 'Kim', gender: 'female', age: 58 }]), 41.5);
console.log(averageFemale([{ name: 'Bob', gender: 'male', age: 14 }, { name: 'Tom', gender: 'male', age: 44 }, { name: 'Tim', gender: 'male', age: 52 }]), 0);
console.log(averageFemale([{ name: 'Sarah', gender: 'female', age: 25 }, { name: 'Tom', gender: 'male', age: 18 }, { name: 'Tim', gender: 'male', age: 65 }]), 25);