//URL--
// https://www.codewars.com/kata/584e4ef56cf17fc491000e0a

//INSTRUCTIONS--
/* Create a function called shoppingList which calculates the total price for items on a shopping list. The function should return the total.

Assume that only one of each item on the list is purchased.

shoppingList(s) will be presented in the following form:

var shoppingList1 = [
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 19.50 }
  ];

Example:

shoppingList( shoppingList1 ) // -> 37.50 (11.00+7.00+19.50)
shoppingList( [{itemName:'Frogs', price: 1200.00 }] ) // -> 1200.00

Happy Shoping !

*/

//SOLUTION--
/* I am going to use reduce to add up the price of each item and return the result
*/
const shoppingList = function (items) {
    return items.reduce((sum, item) => sum + item.price, 0);
};

//TESTCASES--
console.log(shoppingList([
    { itemName: 'Bread', price: 11.00 },
    { itemName: 'Milk', price: 7.00 },
    { itemName: 'Cheese', price: 19.50 }
]), 37.50);