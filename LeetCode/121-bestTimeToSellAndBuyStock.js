//URL--
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

//INSTRUCTIONS--
/* You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

 

Constraints:

    1 <= prices.length <= 105
    0 <= prices[i] <= 104


*/

//SOLUTION--
/* 
set max price to 0
Iterate through the array
    set the current element as the buy price
    check every element after to see what the profit would be at every sell price
        if the current profit is more than the max profit, set the max profit as the current profit
return the maxProfit

This solution has an O(n^2) time comlexity and O(1) space complexity
*/
/**
 * @param {number[]} prices
 * @return {number}
 */
// const maxProfit = function (prices) {
//     let maxProfit = 0
//     //iterate through the array
//     for (let i = 0; i < prices.length; i++) {
//         const buyPrice = prices[i];
//         //iterate through the array after the buy price
//         for (let j = i + 1; j < prices.length; j++) {
//             const sellPrice = prices[j];
//             const profit = sellPrice - buyPrice
//             //if profit is more than maxProfit, set max profit to profit
//             if (profit > maxProfit) {
//                 maxProfit = profit
//             }
//         }
//     }
//     // return the difference of the sell price and the buy price
//     return maxProfit
// };
/*
The first solution was too slow to be accepted, so this time I am going to keep track of the smallest price as well as the max profit

Set max price to 0
Set buy price to the first price
Iterate through the array
    check the profit if the stock were sold now
        if the current profit is more than the max profit, set the max profit as the current profit
    check if the current price is less than the buy price
        If so, set the buy price to the current price
return the maxProfit

This solution has a time complexity of O(n) and a space complexity of O(1)
*/
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    //if the array is one long or empty, return 0
    if (prices.length < 2) {
        return 0
    }
    let maxProfit = 0
    let buyPrice = prices[0]
    //iterate through the array
    for (let i = 1; i < prices.length; i++) {
        //iterate through the array after the buy price
        const sellPrice = prices[i];
        const profit = sellPrice - buyPrice
        //if profit is more than maxProfit, set max profit to profit
        if (profit > maxProfit) {
            maxProfit = profit
        }
        //if buy price is less than the sell price, set buy price to the sell price
        else if (buyPrice > sellPrice) {
            buyPrice = sellPrice
        }
    }
    // return the difference of the sell price and the buy price
    return maxProfit
};

//TESTCASES--
console.log(maxProfit(prices = [7, 6, 4, 3, 1]), 0);
console.log(maxProfit(prices = [7, 1, 5, 3, 6, 4]), 5);
