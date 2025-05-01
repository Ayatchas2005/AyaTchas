document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.getElementById('swiperWrapper');
  wrapper.innerHTML += wrapper.innerHTML; 
  let pos = 0;
  const speed = 1; 
  function animate() {
    pos -= speed;
    const wrapperWidth = wrapper.scrollWidth / 2; 
    if (Math.abs(pos) >= wrapperWidth) {
      pos = 0;
    }
    wrapper.style.transform = `translateX(${pos}px)`;
    requestAnimationFrame(animate);
  }
  animate(); 
});

const themeToggle = document.getElementById('themeToggle');
const musicBtn = document.getElementById('musicToggle');

let normalAudio = new Audio('Around.mp3');
let darkAudio = new Audio('Eiffel.mp3');
let isPlaying = false;
let isDarkMode = false;

musicBtn.addEventListener('click', () => {
  if (isPlaying) {
    if (isDarkMode) {
      darkAudio.pause();
    } else {
      normalAudio.pause();
    }
  } else {
    if (isDarkMode) {
      darkAudio.play();
    } else {
      normalAudio.play();
    }
  }
  isPlaying = !isPlaying;
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  isDarkMode = document.body.classList.contains('dark-mode');

  themeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';

  if (isPlaying) {
    if (isDarkMode) {
      normalAudio.pause();
      darkAudio.currentTime = 0;
      darkAudio.play();
    } else {
      darkAudio.pause();
      normalAudio.currentTime = 0;
      normalAudio.play();
    }
  }
});
