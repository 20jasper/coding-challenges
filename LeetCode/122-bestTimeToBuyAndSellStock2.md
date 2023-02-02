# Explanation
<!-- Describe your first thoughts on how to solve this problem. -->
Since there is no penalty for buying or selling stocks and we can only have one at a time, we should always sell our current stock (if we have one) and buy a new one if profit can be made, or in other words, currPrice is more than lastPrice.

You can also think of it as being able to predict the future instead of change the past like I did.


## Example
Selling any time profit can be made or waiting until a local max price is reached will give the same results, but the first results in simpler logic, so I went with that

```ts
[1,2,3] // 2
[1,3]   // 2

```
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) where n is the length of the array

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
I solved this problem with TDD and left all of my test cases as comments under my solution so you can see how I got to my solution

```ts
function maxProfit(prices: number[]): number {
  let total = 0

  for(let i = 1; i < prices.length; i++){
    const currPrice = prices[i]
    const lastPrice = prices[i - 1]
    
    if(currPrice > lastPrice){
      total += (currPrice - lastPrice)
    }
  }
  
  return total
};

// should not buy any stocks if no profit can be made
// maxProfit([1]) // 0
// maxProfit([100, 99, 9]) // 0

// should not sell before buying
// maxProfit([1,0]) //0

// should sell if next price is higher (should sell at absolute max)
// maxProfit([1, 5]) // 4

// should wait to sell if peak price is not adjacent to lowest price 
// maxProfit([1, 5, 9]) // 8 

// should buy at a local minimum
// maxProfit([3, 1, 9]) // 8

// should buy and sell at multiple local minimums and maximums
// maxProfit([1, 9, 1, 9]) //16
// maxProfit([1,2,3,4,5,1,2,9]) //12
```