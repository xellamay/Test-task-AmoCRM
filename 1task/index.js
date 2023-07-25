const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let animateTimer = null;
const INTERVAL = 1000;

const getTimeFromSeconds = (seconds) => new Date(seconds * 1000).toISOString().slice(11, 19);
const renderDate = (value) => timerEl.innerHTML = value;
const clearInput = () => inputEl.value = '';

buttonEl.addEventListener('click', () => {
  let seconds = Number(inputEl.value);
  let date = getTimeFromSeconds(seconds);
  renderDate(date);

  if (animateTimer) {
    clearInterval(animateTimer)
  }

  animateTimer = setInterval(() => {
    seconds--;
    date = getTimeFromSeconds(seconds);
    renderDate(date);
  }, INTERVAL);

    clearInput();
});
