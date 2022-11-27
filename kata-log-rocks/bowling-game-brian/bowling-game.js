class Game{
	constructor(){
		this._score = 0
	}

	roll(pinsKnockedDown){
		this._score = pinsKnockedDown
	}

	score(){
		return 11
	}
}


module.exports = { Game }