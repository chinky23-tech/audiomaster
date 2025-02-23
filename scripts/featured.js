const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});



/*
function createVisualizer(audioElementId,) {
    const audio = document.getElementById(audioElementId);
    
  
  
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
  
    const source = audioContext.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioContext.destination);
  
    analyser.fftSize = 256; // Determines frequency data detail
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
  
    canvas.width = 300;
    canvas.height = 150;
  
    function drawVisualizer() {
      requestAnimationFrame(drawVisualizer);
  
      analyser.getByteFrequencyData(dataArray);
  
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      const barWidth = (canvas.width / bufferLength) * 2.5;
      let barHeight;
      let x = 0;
  
      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
  
        const red = (barHeight + 50) % 256;
        const green = 250 - barHeight;
        const blue = 50;
  
        ctx.fillStyle = `rgb(${red},${green},${blue})`;
        ctx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);
  
        x += barWidth + 1;
      }
    }
  
    audio.addEventListener("play", () => {
      if (audioContext.state === "suspended") {
        audioContext.resume();
      }
      drawVisualizer();
    });
  }
  
  // Initialize the visualizers for "Before" and "After"
  createVisualizer("audio-before", "canvas-before");
  createVisualizer("audio-after", "canvas-after");
*/
/*
  //slideshow
  let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
*/

// Get all the images inside the slideshow container
const slides = document.querySelectorAll('.show-slideshow .slideshow-img');
let currentSlide1 = 0; // Start from the first image

// Function to show a particular slide by index
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');  // Remove the 'active' class from all slides
    if (i === index) {
      slide.classList.add('active');  // Add 'active' class to the current slide
    }
  });
}

// Function to go to the next slide
function nextSlide1() {
  currentSlide1 = (currentSlide1 + 1) % slides.length;  // Move to the next slide
  showSlide(currentSlide1);
}

// Automatically change slides every 2 seconds
setInterval(nextSlide1, 2000);

// Show the first slide initially
showSlide(currentSlide1);
