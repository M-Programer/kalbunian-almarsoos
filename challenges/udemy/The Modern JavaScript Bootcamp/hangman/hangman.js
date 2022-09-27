function HangmanF(word, tries) {
	word = word.toLowerCase()
	this.word = word.toLowerCase()
	this.letters = word.split('').filter(char => `qwertyuiopasdfghjklzxcvbnm`.includes(char))
	this.tries = tries
	this.guesses = '*'.repeat(word.split('').filter(char => `qwertyuiopasdfghjklzxcvbnm`.includes(char)).length).split('')
	this.status = 'playing'
}

HangmanF.prototype.calcStatus = function (guess) {
	if (!this.letters.includes(guess)) {
		if (--this.tries <= 0) {
			this.status = 'lost'
		}
	}
	if (!this.guesses.includes('*')) {
		this.status = 'win'
	}
}

HangmanF.prototype.makeGuess = function (guess) {
	if (this.status === 'playing') {
		guess = guess.toLowerCase()
		const i = this.letters.findIndex(letter => letter === guess)
		this.guesses[i] = guess
	}
	this.calcStatus(guess)
}

HangmanF.prototype.getPuzzle = function () { return this.guesses.join('') }

class HangmanC {
	constructor(word, tries) {
		word = word.toLowerCase()
		this.word = word.toLowerCase()
		this.letters = word.split('').filter(char => `qwertyuiopasdfghjklzxcvbnm`.includes(char))
		this.tries = tries
		this.guesses = '*'.repeat(word.split('').filter(char => `qwertyuiopasdfghjklzxcvbnm`.includes(char)).length).split('')
		this.status = 'playing'
	}
	calcStatus(guess) {
		if (!this.letters.includes(guess)) {
			if (--this.tries <= 0) {
				this.status = 'lost'
			}
		}
		if (!this.guesses.includes('*')) {
			this.status = 'win'
		}
	}
	makeGuess(guess) {
		if (this.status === 'playing') {
			guess = guess.toLowerCase()
			const i = this.letters.findIndex(letter => letter === guess)
			if (this.guesses.includes(guess)) {

			}
			this.guesses[i] = guess
		}
		this.calcStatus(guess)
	}
	// was a method "getPuzzle"
	get puzzle() { return this.guesses.join('') }
}

const Hangman = HangmanC