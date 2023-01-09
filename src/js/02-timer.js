import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  timer: document.querySelector('.timer'),
  fields: document.querySelectorAll('.field'),
  dataValue: document.querySelectorAll('.value'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      return Notiflix.Notify.failure('Please choose a date in the future');
    }
    console.log(selectedDates[0]);
    refs.startBtn.disabled = false;
  },
};
const fp = flatpickr(refs.input, options);

refs.startBtn.disabled = true;
refs.timer.style.display = 'flex';
refs.timer.style.gap = '30px';
refs.timer.style.marginTop = '30px';

refs.fields.forEach(field => {
  field.style.display = 'flex';
  field.style.flexDirection = 'column';
  field.style.alignItems = 'center';
  field.style.fontSize = '12px';
  field.style.textTransform = 'uppercase';
});

refs.dataValue.forEach(value => {
  value.style.fontSize = '30px';
});

refs.startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick(evt) {
  refs.startBtn.disabled = true;
  refs.input.disabled = true;

  const intervalId = setInterval(() => {
    const currentTime = Date.now();
    const differenceTime = fp.selectedDates[0].getTime() - currentTime;
    const timeLeft = convertMs(differenceTime);

    refs.days.textContent = timeLeft.days;
    refs.hours.textContent = timeLeft.hours;
    refs.minutes.textContent = timeLeft.minutes;
    refs.seconds.textContent = timeLeft.seconds;

    if (differenceTime < 1000) {
      return clearInterval(intervalId);
    }
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
