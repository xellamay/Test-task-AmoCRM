const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let animateTimer = null;

buttonEl.addEventListener('click', () => {
  let seconds = Number(inputEl.value);
  let date = new Date(seconds * 1000).toISOString().slice(11, 19);
  timerEl.innerHTML = date;
  if (animateTimer) {
    clearInterval(animateTimer)
  }
  animateTimer = setInterval(() => {
    seconds--;
    date = new Date(seconds * 1000).toISOString().slice(11, 19);
    timerEl.innerHTML = date;
  }, 1000);

  inputEl.value = '';
});
