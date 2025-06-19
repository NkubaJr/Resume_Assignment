document.addEventListener('DOMContentLoaded', function () {
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile menu toggle
  const menuBtn = document.querySelector('.menu-btn');
  const navUl = document.getElementById('main-nav');

  menuBtn.addEventListener('click', function () {
    navUl.classList.toggle('show');
  });

  // Smooth scrolling for nav links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });

      // Close mobile menu if open
      if (navUl.classList.contains('show')) {
        navUl.classList.remove('show');
      }
    });
  });

  // Contact form submission with animation
  const contactForm = document.getElementById('contact-form');
  const submitBtn = contactForm.querySelector('button');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields');
      return;
    }

    if (!email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    // Change button text & style to success
    submitBtn.textContent = "We'll keep in touch";
    submitBtn.classList.add('success');
    submitBtn.disabled = true;

    // Reset after 4 seconds
    setTimeout(() => {
      contactForm.reset();
      submitBtn.textContent = "Send Message";
      submitBtn.classList.remove('success');
      submitBtn.disabled = false;
    }, 4000);
  });
});
