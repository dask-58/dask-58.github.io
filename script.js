const navbar = document.querySelector('.nav');

window.addEventListener('scroll', function() {
  if (window.scrollY > navbar.offsetHeight) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});