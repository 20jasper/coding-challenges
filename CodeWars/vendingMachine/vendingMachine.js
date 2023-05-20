// @ts-check

/**
 * @constructor
 * @param {{name: string, 
 * 					code: string,
 * 					quantity: number,
 * 					price: number
 * 				}[]} items All of the snacks to choose from in the machine
 * @param {number} money the amount of change in the vending machine
 */
function VendingMachine(items, money) {
	this._items = items
};

/**
 * @param {string} selection the code entered into the machine
 * @param {number} itemMoney the amount of money the customer put in the machine
 * @returns {string} the message returned by the machine
 */
VendingMachine.prototype.vend = function (selection, itemMoney){
	const [item] = this._items
	if(item.price > itemMoney){
		return "Not enough money!"
	}
	return `Vending ${item.name}.`
};

module.exports = VendingMachine