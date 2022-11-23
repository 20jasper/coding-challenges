//URL--
// https://kata-log.rocks/bowling-game-kata

//INSTRUCTIONS--
/* 
*/ 

//SOLUTION--
/* 
*/ 
class Name{
	constructor(){
		this._frame = 0
		this._points = 0
		this._pinsLeft = 10
	}

	roll(pinsKnockedDown){
		this._points+=pinsKnockedDown
		this._pinsLeft-=pinsKnockedDown
		
		if(this._pinsLeft===0){
			this._frame++
		}
	}
}

module.exports = Name