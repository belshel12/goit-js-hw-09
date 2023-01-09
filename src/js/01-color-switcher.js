function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};
let intervalId = null;
let timeoutId = null;
refs.stopBtn.disabled = true;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick(evt) {
  if (evt) {
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
  }

  timeoutId = setTimeout(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 0);

  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopBtnClick(evt) {
  if (evt) {
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
  }

  clearInterval(intervalId);
}
