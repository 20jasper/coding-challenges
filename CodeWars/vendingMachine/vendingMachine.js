// @ts-check

/**
 * @typedef {{name: string,
 * 					code: string,
 * 					quantity: number,
 * 					price: number
 * 				}} item
 */

/**
 * @constructor
 * @param {item[]} items All of the snacks to choose from in the machine
 * @param {number} money the amount of change in the vending machine
 */
function VendingMachine(items, money) {
  this._items = items;
  this._money = money;
}

/**
 * @param {string} selection the code entered into the machine
 * @param {item[]} items All of the snacks to choose from in the machine
 * @returns {item | undefined} the item selected or `undefined` if it doesn't exist
 */
const getItem = (selection, items) =>
  items.find(({ code }) => code === selection);

/**
 * @param {number} money the amount of change in the vending machine
 */
const buildInvalidSelectionMessage = (money) =>
  `Invalid selection! : Money in vending machine = ${money.toFixed(2)}`;

/**
 * @param {string} name name of the item
 * @param {number} change the difference between the price and amount of money
 * inserted into the machine
 * 
 * called when item is in stock
 */
const buildCorrectSelectionMessage = (name, change) => {
  if (change < 0) {
    return "Not enough money!";
  } else if (change === 0) {
    return `Vending ${name}.`;
  }
  return `Vending ${name} with ${change.toFixed(2)} change.`;
}

/**
 * @param {string} name name of the item
 * called when item is out of stock
 */
const buildOutOfStockMessage = (name) => `${name}: Out of stock!`;

/**
 * @param {string} selection the code entered into the machine
 * @param {number} itemMoney the amount of money the customer put in the machine
 * @returns {string} the message returned by the machine
 */
VendingMachine.prototype.vend = function (selection, itemMoney) {
  const item = getItem(selection, this._items);

  if (item === undefined) {
    return buildInvalidSelectionMessage(this._money);
  }

  const { price, name, quantity } = item;

  if (quantity === 0) {
    return buildOutOfStockMessage(name) 
  }

  const change = itemMoney - price;
  if(change >= 0){
    item.quantity -= 1
  }
  return buildCorrectSelectionMessage(name, change)
};

module.exports = VendingMachine;
