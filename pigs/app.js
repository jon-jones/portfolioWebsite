/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, previousScore;

init();


document.querySelector('.btn-roll').addEventListener('click', function()  {
    
    if (gamePlaying) {
    //1. random number for dice
    var dice =  Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    //if two 6s in a row are rolled player loses total points and goes to next players turn
    if (dice == 6 && dice2 == 6) {
        scores[activePlayer] = 0;
        nextPlayer();
    }
    //2. Display the result
    var diceDOM = document.querySelector('.dice');
    var diceDOM2 = document.querySelector('.dice2');
    diceDOM.style.display = 'block';
    diceDOM2.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    diceDOM2.src = 'dice-' + dice2 + '.png';
    
    //3. Update the round score IF neither dice is a 1
    if (dice == 1 || dice2 == 1) {
        
        nextPlayer();
        
    } else {
        //Add score
        roundScore += dice + dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    }
    
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;
    
    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    var input = document.querySelector('.final-score').value;
    var winningScore;
    if (input) {
        winningScore = input;
    } else {
        winningScore = 100;
    }
    //check if player won the game
    if (scores[activePlayer] >= winningScore) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {
        //Next Player
        nextPlayer();
    }
    }
    
});

function nextPlayer() {
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 1';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}

function finalScoreSet() {
    inputScore = document.createElement("INPUT");
    inputScore.setAttribute("type", "text");
    inputScore.setAttribute("")
}

//document.querySelector('#current-' + activePlayer).textContent = dice;
////document.querySelector('current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//
//var x = document.querySelector('#score-0').textContent;
//console.log(x);