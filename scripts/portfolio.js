 /*document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".landing-section");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );
  
    observer.observe(section);
  });
 */




// audio section original and mastered
const playBtns = document.querySelectorAll('.play-btn');
const toggleBtns = document.querySelectorAll('.toggle-btn');
const audio = new Audio();
let isPlaying = false;

playBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card'); // Get the closest card container
    const icon = card.querySelector('.icon'); // Get the icon inside the card
    const activeToggle = card.querySelector('.toggle-btn.active'); // Get the active toggle button
    const audioSrc = activeToggle.dataset.audio; // Get the audio source from the active toggle

    if (!isPlaying) {
      audio.src = audioSrc; // Set the audio source
      audio.play(); // Play the audio
      isPlaying = true;
      btn.textContent = "⏸️"; // Change button to pause icon
      // If the "Mastered" track is playing, make the icon dance
      if (audioSrc === "assets/Mixed Final.m4a") {
        icon.classList.add('dancing');
      }

    } else {
      audio.pause(); // Pause the audio
      isPlaying = false;
      btn.textContent = "▶️"; // Change button to play icon
    }
    // If the "Mastered" track is paused, stop the icon from dancing
    if (audioSrc === "assets/Mixed Final.m4a") {
      icon.classList.remove('dancing');
    }
  });
});

toggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card'); // Get the closest card container
    const icon = card.querySelector('.icon'); // Get the icon inside the card
    const playBtn = card.querySelector('.play-btn'); // Get the play button inside the card

    // Remove active class from all toggle buttons in the card
    toggleBtns.forEach(toggle => toggle.classList.remove('active'));
    btn.classList.add('active'); // Add active class to the clicked toggle button

    // Update the audio source and play it
    audio.src = btn.dataset.audio;
    audio.play();
    isPlaying = true; // Set playing state to true
    playBtn.textContent = "⏸️"; // Change play button to pause icon

    // Only add the 'dancing' class if the "Mastered" button was clicked
    if (btn.dataset.audio === "assets/Mixed Final.m4a") { // Compare audio file path to identify "Mastered"
      icon.classList.add('dancing'); // Add dancing class to the icon
    } else {
      icon.classList.remove('dancing'); // Remove dancing class if it's "Original"
    }

    // Handle audio end event
    audio.addEventListener('ended', () => {
      isPlaying = false;
      playBtn.textContent = "▶️"; // Change button to play icon
      icon.classList.remove('dancing'); // Remove dancing class from the icon when audio ends
    });
  });
});
