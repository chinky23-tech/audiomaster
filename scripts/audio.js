
document.addEventListener("DOMContentLoaded", function () {
    // Select all audio players
    const allAudioPlayers = document.querySelectorAll(".custom-audio-player");
  
    allAudioPlayers.forEach(playerElement => {
        initAudioPlayer(playerElement);
    });
  
    // Function to initialize a custom audio player
    function initAudioPlayer(playerElement) {
        const playPauseBtn = playerElement.querySelector(".play-pause-btn");
        const songElement = playerElement.querySelector(".song");
        const audioElement = new Audio(); // Create a new audio element
  
        // Set the initial audio source
        audioElement.src = songElement.getAttribute("data-audio");
  
        // Play/Pause Button
        playPauseBtn.addEventListener("click", () => {
            if (audioElement.paused) {
                audioElement.play();
                playPauseBtn.textContent = "⏸️";  // Change button to pause
            } else {
                audioElement.pause();
                playPauseBtn.textContent = "▶️";  // Change button to play
            }
        });
  
        // Handle audio end
        audioElement.addEventListener("ended", () => {
            playPauseBtn.textContent = "▶️";  // Reset to play when audio ends
        });
  
        // Switch audio source when the song element is clicked
        songElement.addEventListener("click", () => {
            audioElement.src = songElement.getAttribute("data-audio");
            if (!audioElement.paused) {
                audioElement.play(); // Continue playing if audio was already playing
            }
        });
    }
});
