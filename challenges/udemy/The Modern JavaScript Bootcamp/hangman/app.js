const wordEl = document.querySelector('#word')
const triesEl = document.querySelector('#tries')
const msgEl = document.querySelector('#msg')
const word = 'Hello, World!'
const game = new Hangman(word, 3)
wordEl.textContent = game.puzzle
document.addEventListener('keypress', (e) => {
	if ('abcdefghijklmnopqrstuvwxyz'.includes(e.key.toLowerCase())) {
		game.makeGuess(e.key)
	}
	if (game.status === 'lost') {
		msgEl.textContent = 'You lose! the word was ' + game.word
	} else if (game.status === 'win') {
		msgEl.textContent = 'You win!'
	}
	wordEl.innerHTML = ``
	game.puzzle.split(``).forEach(char => {
		const spanEl = document.createElement(`span`)
		spanEl.textContent = char
		wordEl.append(spanEl)
	});
	triesEl.textContent = game.tries
	console.log(game.status)
})