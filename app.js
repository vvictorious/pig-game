console.log('Hello World');


//these are going to be the scores and active players
	var scores, roundScore, activePlayer;
	init();


//these are the buttons
const newButton = document.querySelector('.btn-new');
const holdButton = document.querySelector('.btn-hold');
const rollButton = document.querySelector('.btn-roll');



rollButton.addEventListener('click', () => {
	let dice = Math.floor(Math.random() * 6) + 1;
	let diceDom = document.querySelector('.dice');
	diceDom.src = 'dice-' + dice + '.png'
	if (dice !== 1) {
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	} else { //if ya roll a 1
		nextPlayer();
	}
});


//hold botton event listener
//on this click I need the round score to go to scores array
//then I need to display that in dom under id of score-
//next step is change the roundScore back to 0
//then change the active class and active player to the next player
//finally when the score reaches a certain 
holdButton.addEventListener('click', () => {
	//hold the overall score in a variable
	scores[activePlayer] = scores[activePlayer] + roundScore;
	//update the ui
	document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
	//see if they won the game 
	if(scores[activePlayer] >= 15){
		document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
	} else {
		nextPlayer();
	}

})

newButton.addEventListener('click', init);


function nextPlayer(){
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
}



function init(){
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;		
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';	
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
	document.querySelector('.player-0-panel').classList.remove('winner');	
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');	
	document.querySelector('.player-1-panel').classList.remove('active');
}