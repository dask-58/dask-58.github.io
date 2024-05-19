console.log("Did you come to inspect my website ? ")
console.log("Go ahead!")

const toggleBtn = document.querySelector('.toggle-btn');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-mode');
});