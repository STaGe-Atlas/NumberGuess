const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        setMessage('Please enter a valid number between 1 and 100.', 'red');
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        const message = `Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`;
        setMessage(message, 'green');
        guessInput.disabled = true;

       
        playConfetti();

     
        setTimeout(() => {
            window.location.reload(); 
        }, 5000); 
    } else if (guess < randomNumber) {
        setMessage(`The number is higher than ${guess}. Try again.`, 'blue');
    } else {
        setMessage(`The number is lower than ${guess}. Try again.`, 'blue');
    }

    guessInput.value = '';
    guessInput.focus();
}

function setMessage(message, color) {
    const messageElement = document.getElementById('message');
    messageElement.style.color = color;
    messageElement.textContent = message;
}

function playConfetti() {
    const confettiImg = document.createElement('img');
    confettiImg.src = 'confetti.png'; 
    confettiImg.style.position = 'fixed';
    confettiImg.style.top = '0';
    confettiImg.style.left = '0';
    confettiImg.style.width = '100%';
    confettiImg.style.height = '100%';
    confettiImg.style.pointerEvents = 'none'; 

    document.body.appendChild(confettiImg);

   
    setTimeout(() => {
        confettiImg.remove();
    }, 5000); 
}
