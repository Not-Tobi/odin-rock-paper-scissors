// The computer and the player play the game
let i = 0; //Rounds
let playerScore = 0;
let computerScore = 0;
let computerSelection;
let player;    
let playerTracker = new Array();
let sameMove;
// The player choose their options and start the round
const btn = document.querySelectorAll('button');

btn.forEach((buttons) => {
    buttons.addEventListener('click', () => {
        playerSelection(buttons);
        computerSelection = getComputerChoice();
        playRound(buttons);
    })
})

function playerSelection (buttons) {
    if (buttons.classList.contains("rock")) {
        return player = 'rock';
    }
    else if (buttons.classList.contains("paper")) {
        return player = 'paper';
    }
    else if (buttons.classList.contains("scissors")) {
        return player = 'scissors';
    }
}

// The computer make a choice
function getComputerChoice (computerSelection) {
    playerTracker.push(player);
    // Display the computer's choice using an image
    function computerImageUpdate () {
        const computerImage = document.querySelector('.computerImage');
        computerImage.style.transform = 'scaleX(-1)';
        computerImage.setAttribute('src', `images/${computerSelection}`)
    }
    
    // Reset playerTracker
    function resetPlayerTracker () {
        for (let c = 0; c < player.length; c++) {
            playerTracker.pop();
        }
    }

    // Change computer move if the player play the same move often
    if (playerTracker.length === 3 && playerTracker[0] === playerTracker[1] && playerTracker[0] === playerTracker[2]) {
        console.log('hi')
        if (player === 'rock') {
            computerSelection = 'paper'
        }
        else if (player === 'paper') {
            computerSelection = 'scissors'
        }
        else if (player === 'scissors') {
            computerSelection = 'rock'
        }
        resetPlayerTracker();
        computerImageUpdate();
        return computerSelection
    }

    else if (playerTracker.length === 3) {
        resetPlayerTracker();
    }
    
    let num = Math.floor(Math.random() * 3);
    const computerOptions = ["rock", "paper", "scissors"];
    computerSelection = (computerOptions[num]);
    computerImageUpdate();
    return computerSelection;
} 

// Rounds and results
function playRound (buttons) { 
    let roundResult = document.querySelector('.roundResult'); 
    if (player === 'scissors' && computerSelection === 'paper') 
    {
        roundResult.textContent = "You Win the Round! " + changeDisplayResult();
        playerScore++;
    }
    else if (player === 'paper' && computerSelection === 'rock') 
    {
        roundResult.textContent = "You Win the Round! " + changeDisplayResult();
        playerScore++;
    }
    else if (player === 'rock' && computerSelection === 'scissors') 
    {
        roundResult.textContent = "You Win the Round! " + changeDisplayResult();
        playerScore++;
    }
    else if (player === computerSelection) 
    {
        roundResult.textContent = "Tie";
    }
    else {
        roundResult.textContent = "You Lose the Round! " + changeDisplayResult();
        computerScore++;
    }
   
    function changeDisplayResult() { 
        if ((player === 'scissors' && computerSelection === 'paper')  || (computerSelection === 'scissors' && player === 'paper')) {
            return "Scissors beats paper"
        }
        else if ((player === 'paper' && computerSelection === 'rock') || (computerSelection === 'paper' && player === 'rock')) {
            return "Paper beats Rock"
        }
        else if ((player === 'rock' && computerSelection === 'scissors')  || (computerSelection === 'rock' && player === 'scissors')) {
            return "Rock beats Scissors"
        }
    }

    // Change round and scores
    i++
    changeMainDisplay();
    function changeMainDisplay() {
        let round = document.querySelector('.round');
        let playerScoreDisplay = document.querySelector('.playerScoreDisplay');
        let computerScoreDisplay = document.querySelector('.computerScoreDisplay');

        round.textContent = 'Round: ' + i;
        playerScoreDisplay.textContent = 'Player Scores: ' + playerScore;
        computerScoreDisplay.textContent = 'Computer Scores: ' + computerScore;
    }

    // Result of the game between the player and the computer
    let finalResult = document.querySelector('.finalResult');

    if (playerScore == 5 || computerScore == 5) {
        btn.forEach((buttons) => {buttons.disabled = true;}) 
        if (playerScore == 5) {
            finalResult.textContent = 'You Win!'
            resetGame();
        }
        else {
            finalResult.textContent = 'Computer Win!'
            resetGame();
        }
    }

    // Reset game
    function resetGame() {
        // Create the reset button
        const lastBox = document.querySelector('.gameResult');
        const resetBtnCreated = document.createElement('button');
        lastBox.appendChild(resetBtnCreated);
        resetBtnCreated.textContent = 'Play Again';
        resetBtnCreated.classList.add('resetBtn');

        // Reset button in affect
        const resetBtn = document.querySelector('.resetBtn');
        resetBtn.addEventListener('click', () => {
            btn.forEach((buttons) => {buttons.disabled = false;})
            const computerImage = document.querySelector('.computerImage');
            computerImage.setAttribute('src','images/robot')
            roundResult.textContent = "First Person Reach 5 Points Win";
            playerScore = 0;
            computerScore = 0; 
            i = 0;
            finalResult.textContent = '';
            changeMainDisplay();
            lastBox.removeChild(resetBtnCreated);
        })
    }
}     