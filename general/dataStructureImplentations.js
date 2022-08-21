// Stack

class Stack {
	constructor() {
		this._storage = {}
		this._length = 0
	}

	peek() {
		return this._storage[this._length - 1]
	}
	pop() {
		if (this._length === 0) {
			return
		}
		const temp = this._storage[this._length - 1]
		delete this._storage[this._length - 1]
		this._length--
		return temp
	}
	push(value) {
		this._storage[this._length] = value
		this._length++
	}
}

const stack = new Stack()

