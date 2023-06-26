// The computer and the player play the game
let i = 1; //Rounds
let playerScore = 0;
let computerScore = 0;


let computerSelection;
let player;    

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

// The computer make a randon choice
function getComputerChoice (computerSelection) {
    let num = Math.floor(Math.random() * 3);
    const computerOptions = ["rock", "paper", "scissors"];
    computerSelection = (computerOptions[num]);

    // Display the computer's choice using an image
    const computerImage = document.querySelector('.computerImage');
    computerImage.style.transform = 'scaleX(-1)';
    computerImage.setAttribute('src', `images/${computerSelection}`)

    return computerSelection;
} 

// Rounds and results
function playRound (buttons) { 
    let roundResult = document.querySelector('.roundResult');  
    switch (player + '=' + computerSelection) {
    // The player win
        case ('scissors=paper'):
            roundResult.textContent = "You Win the Round! Scissors beats Paper";
            playerScore++;
            break;  

        case ('paper=rock'):
            roundResult.textContent = "You Win the Round! Paper beats Rock";
            playerScore++;
            break;  

        case ('rock=scissors'):
            roundResult.textContent = "You Win the Round! Rock beats Scissors";
            playerScore++;
            break;  
    
    // The computer win
        case ('paper=scissors'):
            roundResult.textContent = "You Lose the Round! Scissors beats Paper";
            computerScore++;
            break;    

        case ('rock=paper'):
            roundResult.textContent = "You Lose the Round! Paper beats Rock";
            computerScore++;
            break;  

        case ('scissors=rock'):
            roundResult.textContent = "You Lose the Round! Rock beats Scissors";
            computerScore++;
            break;  
    
    // Tie
        default:
            roundResult.textContent = "Tie";
    }
    i++; 

    // Result of the rounds
    changeDisplay();
    function changeDisplay() {
        let round = document.querySelector('.round');
        let playerScoreDisplay = document.querySelector('.playerScoreDisplay');
        let computerScoreDisplay = document.querySelector('.computerScoreDisplay');

        round.textContent = 'Round: ' + i;
        playerScoreDisplay.textContent = 'Player Scores: ' + playerScore;
        computerScoreDisplay.textContent = 'Computer Scores: ' + computerScore;
    }

    // Result of the game between the player and the computer
    // Display the button to reset the game
    let finalResult = document.querySelector('.finalResult');

    if (playerScore == 5 || computerScore == 5) {
        btn.forEach((buttons) => {buttons.disabled = true;}) 
        if (playerScore == 5) {
            finalResult.textContent = 'You Win!'
            resetGame();
        }
        else if (computerScore == 5) {
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
            i = 1;
            finalResult.textContent = '';
            changeDisplay();
            lastBox.removeChild(resetBtnCreated);
        })
    }
}     
            



