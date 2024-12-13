document.getElementById('speakButton').addEventListener('click', function () {
  const content = document.getElementById('content').innerText; // Get text content
  const utterance = new SpeechSynthesisUtterance(content); // Create a speech object

  // Set language to Malayalam
  utterance.lang = 'ml-IN'; // Language code for Malayalam
  utterance.rate = 1; // Speed (1 is normal)
  utterance.pitch = 1; // Pitch (1 is normal)

  // Log available voices (for debugging)
  speechSynthesis.onvoiceschanged = function () {
    console.log(speechSynthesis.getVoices());
  };

  // Check if Malayalam voice is supported
  const voices = speechSynthesis.getVoices();
  const malayalamVoice = voices.find(voice => voice.lang === 'ml-IN');

  if (malayalamVoice) {
    utterance.voice = malayalamVoice;
  } else {
    alert('Malayalam TTS is not supported in this browser.');
  }

  // Speak the text
  speechSynthesis.speak(utterance);
});
