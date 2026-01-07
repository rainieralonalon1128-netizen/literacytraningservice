// Select all elements with the fade-in class
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1, // triggers when 10% of the element is visible
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      // Fade in when in viewport
      entry.target.classList.add('show');
    } else {
      // Fade out when out of viewport
      entry.target.classList.remove('show');
    }
  });
}, appearOptions);

// Observe each element
faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


