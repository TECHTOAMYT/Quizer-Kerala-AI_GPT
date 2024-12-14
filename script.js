function checkAnswer(correct) {
    clearInterval(timerInterval);
    lightIndicator.style.display = 'block';

    const wrongAudio = document.getElementById('wrongAudio');
    const rightAudio = document.getElementById('rightAudio');

    if (correct) {
        lightIndicator.classList.add('green-light');
        lightIndicator.classList.remove('red-light');
        score++;
        scoreDisplay.textContent = score;

        // Play the correct answer sound
        rightAudio.play();

        setTimeout(() => lightIndicator.style.display = 'none', 500);
    } else {
        lightIndicator.classList.add('red-light');
        lightIndicator.classList.remove('green-light');
        sadEmoji.style.display = 'inline-block';

        // Play the wrong answer sound
        wrongAudio.play();

        setTimeout(() => sadEmoji.style.display = 'none', 1000);
        setTimeout(() => lightIndicator.style.display = 'none', 1000);
    }

    currentQuestion++;
    loadQuestion();
}





// Populate available voices in a dropdown
function populateVoices() {
  const voiceSelect = document.getElementById('voiceSelect');
  voiceSelect.innerHTML = ''; // Clear previous options
  const voices = speechSynthesis.getVoices();

  voices.forEach((voice, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });
}

// Speak text in the selected voice
document.getElementById('speakButton').addEventListener('click', function () {
  const content = document.getElementById('content').innerText; // Get text content
  const utterance = new SpeechSynthesisUtterance(content); // Create a speech object

  // Get selected voice
  const voiceSelect = document.getElementById('voiceSelect');
  const voices = speechSynthesis.getVoices();
  const selectedVoice = voices[voiceSelect.value];

  if (selectedVoice) {
    utterance.voice = selectedVoice; // Set the selected voice
    utterance.lang = selectedVoice.lang; // Set the language based on the voice
  }

  // Set other properties
  utterance.rate = 1; // Speed (1 is normal)
  utterance.pitch = 1; // Pitch (1 is normal)

  // Speak the text
  speechSynthesis.speak(utterance);
});

// Wait for voices to be loaded and populate the dropdown
speechSynthesis.onvoiceschanged = populateVoices;



// Add this line to get a reference to the "gameovers.mp3" audio
const gameOverAudio = document.getElementById('gameOverAudio');

// Modify the endQuiz function to play the game over sound
function endQuiz() {
    quizPage.classList.remove('active');
    endPage.classList.add('active');
    finalScore.textContent = `Your Score: ${score}/${questions.length}`;
    
    // Play game over sound when quiz ends
    gameOverAudio.play();
}

// Modify the restartQuiz function to stop the game over sound
function restartQuiz() {
    endPage.classList.remove('active');
    welcomePage.classList.add('active');
    
    // Stop and reset the game over sound when the quiz is restarted
    gameOverAudio.pause();
    gameOverAudio.currentTime = 0;
}




//// Get audio elements for different sounds
const timerAudio = document.getElementById('timerAudio');
const gameOverAudio = document.getElementById('gameOverAudio');
const wrongAudio = document.getElementById('wrongAudio');
const rightAudio = document.getElementById('rightAudio');


// Check the selected answer
function checkAnswer(correct) {
  clearInterval(timerInterval);
  lightIndicator.style.display = 'block';

  if (correct) {
    lightIndicator.classList.add('green-light');
    lightIndicator.classList.remove('red-light');
    score++;
    scoreDisplay.textContent = score;
    rightAudio.play();
    setTimeout(() => lightIndicator.style.display = 'none', 500);
  } else {
    lightIndicator.classList.add('red-light');
    lightIndicator.classList.remove('green-light');
    sadEmoji.style.display = 'inline-block';
    wrongAudio.play();
    setTimeout(() => sadEmoji.style.display = 'none', 1000);
    setTimeout(() => lightIndicator.style.display = 'none', 1000);
  }

  

    // Play the timer sound when the timer reaches 9 seconds
    if (timeLeft === 9 && !timerAudio.paused) {
      timerAudio.play();
    }

    // Pause the timer sound when it reaches 1 second
    if (timeLeft === 1) {
      timerAudio.pause();
      timerAudio.currentTime = 0; // Reset the sound
    }

    // When time is up, end the quiz for the current question
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      checkAnswer(false);
    }
  }, 1000);
}

