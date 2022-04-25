//URL--
// https://www.codewars.com/kata/5541f58a944b85ce6d00006a

//INSTRUCTIONS--
/* The Fibonacci numbers are the numbers in the following integer sequence (Fn):

    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

    F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

    F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)

depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)

F(n) being the smallest one such as F(n) * F(n+1) > prod.
*/

//SOLUTION--
/* I am going to calculate the product of the first 2 fibonacci numbers
If it is less than the target, set the first number to the second number and the second number to the sum of the first and second
Repeat this until the product is equal to or more than the target

return an array with the first number, the second number, and then true if the target is equal to the product, and false if not
*/
function productFib(target, num1 = 0, num2 = 1) {
    const product = num1 * num2
    if (target > product) {
        const sum = num1 + num2
        return productFib(target, num2, sum)
    }
    return [num1, num2, target === product]
}
//TESTCASES--
console.log(productFib(0), [0, 1, true]);
console.log(productFib(1), [1, 1, true]);
console.log(productFib(5895), [89, 144, false]);
console.log(productFib(74049690), [6765, 10946, true]);
console.log(productFib(84049690), [10946, 17711, false]);