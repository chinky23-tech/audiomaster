document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const form = e.target;
    const formData = new FormData(form);
  
    fetch('https://formspree.io/f/xvgzzwkp', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          document.getElementById('formResponse').textContent =
            'Thank you! Your message has been sent.';
          form.reset();
        } else {
          document.getElementById('formResponse').textContent =
            'Oops! Something went wrong. Please try again.';
        }
      })
      .catch((error) => {
        document.getElementById('formResponse').textContent =
          'Oops! Something went wrong. Please try again.';
      });
  });