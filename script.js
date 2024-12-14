





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
