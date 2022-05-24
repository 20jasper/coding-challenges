//URL--
// https://www.codewars.com/kata/5875b200d520904a04000003

//INSTRUCTIONS--
/* The Story:

Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
Task Overview:

You have to write a function that accepts three parameters:

    cap is the amount of people the bus can hold excluding the driver.
    on is the number of people on the bus excluding the driver.
    wait is the number of people waiting to get on to the bus excluding the driver.

If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
Usage Examples:

cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

*/

//SOLUTION--
/* 

P: 
    cap (an integer) amount of people the bus can hold excluding the driver
    on (an interger) on is the number of people on the bus excluding the driver.
    wait (an integer) the number of people waiting to get on to the bus excluding the driver.
R: An integer
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take

E: 
console.log(enough(1, 1, 0), 0);
console.log(enough(1, 1, 5), 5);
console.log(enough(4, 1, 5), 2);
P: 
find the number of passengers he can't take
    Subtract on from cap to get the available space
    subtract the available space from the people waiting
    If the number is positive, return that number
    Else return 0
*/
function enough(cap, on, wait) {
    const availableSpace = cap - on
    const extraPassengers = wait - availableSpace
    if (extraPassengers > 0) {
        return extraPassengers
    }
    return 0
}
//TESTCASES--
console.log(enough(1, 1, 0), 0);
console.log(enough(1, 1, 5), 5);
console.log(enough(4, 1, 5), 2);
console.log(enough(4, 1, 2), 0);