console.log('Hello World');


//these are going to be the scores and active players
let scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;


//these are the buttons
const newButton = document.querySelector('.btn-new');
const holdButton = document.querySelector('.btn-hold');
const rollButton = document.querySelector('.btn-roll');



rollButton.addEventListener('click', () => {
	let dice = Math.floor(Math.random() * 6) + 1;
	let diceDom = document.querySelector('.dice');
	diceDom.src = 'dice-' + dice + '.png'
	if (dice !== 1) { //add score
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	} else {
		//this is where I change the active player
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;
	}
});





// nextPlayer() => {
// 	if (activePlayer === 0) {

// 	}
// }


// function nextPlayer (){
// 		activePlayer === 0  ? activePlayer = 1 : activePlayer = 0;
// 		roundScore = 0;
// 		document.getElementById('current-0').textContent = '0';
// 		document.getElementById('current-1').textContent = '0';
// 		document.querySelector('.player-0-panel').classList.toggle('active');
// 		document.querySelector('.player-1-panel').classList.toggle('active');
// 		document.querySelector('.dice').style.display = 'none';	
// }