/*
*  GAME RULES
* The Game has 2 players, playing in rounds
* In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
* BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
* The player can chose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
* The first player to reach 100 points on GLOBAL score wins the game
* */

let scores, roundScore, activePlayer, dice;

init();

document.querySelector('.btn--roll').addEventListener('click', function () {
  //Roll a dice
  let dice = Math.floor(Math.random() * 6) + 1;

  //Show results
  let diceDom = document.querySelector('.dice');
  diceDom.style.display = 'block';
  diceDom.src = 'dice-' + dice + '.png';
  document.querySelector('#current-' + activePlayer).textContent = dice;

  //Update round result if its not rolled 1
  if (dice !== 1) {
    //add score
    roundScore += dice;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
  } else {
    // Next player
      nextPlayer();
  }

});

document.querySelector('.btn--hold').addEventListener('click', function () {

  //Add CURRENT score to GLOBAL score
  scores[activePlayer] += roundScore;

  //Update the UI
  document.querySelector(
      '#score--' + activePlayer).textContent = scores[activePlayer];

  //Check if player won the game
  if (scores[activePlayer] >= 10){
    document.querySelector('#name--' + activePlayer).textContent = 'Winner!'
    document.querySelector('.btn--hold').style.display = 'none';
    document.querySelector('.btn--roll').style.display = 'none';
    document.querySelector('.player--' + activePlayer ).classList.add('player--winner');
  }else{
    nextPlayer();
  }

});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;

  document.querySelector('.player--0').classList.toggle('player-active');
  document.querySelector('.player--1').classList.toggle('player-active');

  document.querySelector('.dice').style.display = 'none';
}

function init(){
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;

  document.getElementById('score--0').textContent = '0';
  document.getElementById('score--1').textContent = '0';

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.btn--hold').style.display = 'block';
  document.querySelector('.btn--roll').style.display = 'block';

  document.querySelector('#name--0').textContent = 'Player 1'
  document.querySelector('#name--1').textContent = 'Player 2'

  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  document.querySelector('.player--0').classList.remove('player-active');
  document.querySelector('.player--0').classList.add('player-active');
  document.querySelector('.player--1').classList.remove('player-active');


}
