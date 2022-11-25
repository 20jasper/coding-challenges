//URL--
// https://kata-log.rocks/bowling-game-kata

//INSTRUCTIONS--
/* 
Bowling Rules

The game consists of 10 frames. In each frame the player has two rolls to knock down 10 pins. The score for the frame is the total number of pins knocked down, plus bonuses for strikes and spares.

A spare is when the player knocks down all 10 pins in two rolls. The bonus for that frame is the number of pins knocked down by the next roll.

A strike is when the player knocks down all 10 pins on his first roll. The frame is then completed with a single roll. The bonus for that frame is the value of the next two rolls.

In the tenth frame a player who rolls a spare or strike is allowed to roll the extra balls to complete the frame. However no more than three balls can be rolled in tenth frame.
Requirements

Write a class Game that has two methods

    void roll(int) is called each time the player rolls a ball. The argument is the number of pins knocked down.
    int score() returns the total score for that game.

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
		this._scoreMultiplierQueue = [1, 1]
	}

	roll(pinsKnockedDown){
		this.updateScore(pinsKnockedDown)
		this._pinsLeft-=pinsKnockedDown
		
		this._rollsThisFrame++

		this.updateScoreMultiplier()
		this.frameAdvanceCheck()
	}
	
	updateScoreMultiplier(){
		this._scoreMultiplierQueue.pop()
		this._scoreMultiplierQueue.unshift(1)

		if(this._pinsLeft!==0){
			return
		}

		// if it's a strike
		if(this._rollsThisFrame===1){
			this._scoreMultiplierQueue[0]++
			this._scoreMultiplierQueue[1]++
		}
		// if it's a spare
		else {
			this._scoreMultiplierQueue[1]++
		}
	}

	frameAdvanceCheck(){
		//reset lane after all pins are knocked down before the third roll on the tenth frame
		if(this._frame === 10 && this._rollsThisFrame<3 && this._pinsLeft === 0){
			this._pinsLeft = 10
		}
		else if(this._rollsThisFrame===2 || this._pinsLeft===0){
			//advance frame 
			this._frame++
			this._pinsLeft = 10
			this._rollsThisFrame = 0
		}
	}

	updateScore(pinsKnockedDown){
		const scoreMultiplier = this._scoreMultiplierQueue[1]

		this._points += pinsKnockedDown * scoreMultiplier
	}

	score(){
		return this._points
	}
}

module.exports = Name