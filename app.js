/*
*  GAME RULES
* The Game has 2 players, playing in rounds
* In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
* BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
* The player can chose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
* The first player to reach 100 points on GLOBAL score wins the game
* */

let scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;


document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn--roll').addEventListener('click', function () {
  //Roll a dice
  let dice = Math.floor(Math.random() * 6) + 1;

  //Show results
  let diceDom = document.querySelector('.dice');
  diceDom.style.display = 'block';
  diceDom.src = 'dice-' + dice + '.png';
  document.querySelector('#current-' + activePlayer).textContent = dice;

  //Update round result if its not rolled 1
  if (dice !== 1){
    //add score
    roundScore += dice;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
  }else{
    // Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer =0;
  }

});