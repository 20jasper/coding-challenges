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
		this._rollsThisFrame = 0
		this._lastFrameWasSpare = false
		this._lastFrameWasStrike = false
		this._secondToLastFrameWasStrike = false
	}

	roll(pinsKnockedDown){
		this.updateScore(pinsKnockedDown)
		this._pinsLeft-=pinsKnockedDown
		
		this._rollsThisFrame++

		this.spareCheck()
		this.strikeCheck()
		this.frameAdvanceCheck()
	}
	
	spareCheck(){
		if(this._rollsThisFrame===2 &&
			this._pinsLeft===0
			){
			this._lastFrameWasSpare = true
		}
		else {
			this._lastFrameWasSpare=false
		}
	}

	strikeCheck(){
		this._secondToLastFrameWasStrike = this._lastFrameWasStrike
		
		if(this._rollsThisFrame===1 &&
			this._pinsLeft===0
			){
			this._lastFrameWasStrike = true
		}
		else {
			this._lastFrameWasStrike=false
		}
	}

	frameAdvanceCheck(){
		if(this._rollsThisFrame===2 || 
			this._pinsLeft===0
			){
			this._frame++
		}
	}

	updateScore(pinsKnockedDown){
		this._points+=pinsKnockedDown
		if(this._lastFrameWasSpare || this._lastFrameWasStrike || this._secondToLastFrameWasStrike){
			this._points+=pinsKnockedDown
		}
	}

	score(){
		return this._points
	}
}

module.exports = Name