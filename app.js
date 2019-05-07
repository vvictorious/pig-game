console.log('Hello World');

let scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;

const newButton = document.querySelector('.btn-new');
const holdButton = document.querySelector('.btn-hold');
const rollButton = document.querySelector('.btn-roll');



rollButton.addEventListener('click', () => {
	let dice = Math.floor(Math.random() * 6) + 1;
	let diceDom = document.querySelector('.dice');
	diceDom.src = 'dice-' + dice + '.png'
})