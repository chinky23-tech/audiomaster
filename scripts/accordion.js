let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active"); // Toggle the active class
    const faqitem = this.nextElementSibling;
    
    // Correctly checking and toggling maxHeight
    if (faqitem.style.maxHeight) {
      faqitem.style.maxHeight = null;
    } else {
      faqitem.style.maxHeight = faqitem.scrollHeight + "px";
    }
  });
}
