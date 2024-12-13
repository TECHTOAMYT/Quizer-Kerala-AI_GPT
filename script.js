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
