const elements = document.querySelectorAll('.text-hide');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
    }
  });
});

elements.forEach(el => observer.observe(el));
