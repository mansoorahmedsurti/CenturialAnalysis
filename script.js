const music = document.getElementById('bg-music');
const btn = document.getElementById('toggle-music');
const footer = document.querySelector('footer');

music.volume = 0.1;

btn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    btn.textContent = 'Turn Music Off';
  } else {
    music.pause();
    btn.textContent = 'Turn Music On';
  }
});

window.addEventListener('scroll', () => {
  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (footerTop < windowHeight) {
    if (!music.paused) music.pause();
  } else {
    if (btn.textContent === 'Turn Music On') music.play();
  }
});
