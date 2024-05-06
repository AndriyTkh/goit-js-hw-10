'use strict';

// Описаний у документації
import iziToast from 'izitoast';
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import 'flatpickr/dist/flatpickr.min.css';

let userSelectedDate = new Date();
const startBtn = document.querySelector('button[data-start]');
const day = document.querySelector('span[data-days]');
const hour = document.querySelector('span[data-hours]');
const minute = document.querySelector('span[data-minutes]');
const second = document.querySelector('span[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];

    if (Date.now() > userSelectedDate.getTime()) {
      iziToast.error({
        theme: 'dark',
        position: 'topRight',
        messageColor: '#FFFFFF',
        backgroundColor: 'red',
        progressBarColor: '#ff91a4',
        message: 'Please choose a date in the future',
      });
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function updateTimer(time) {
  day.textContent = time.days.toString().padStart(2, '0');
  hour.textContent = time.hours.toString().padStart(2, '0');
  minute.textContent = time.minutes.toString().padStart(2, '0');
  second.textContent = time.seconds.toString().padStart(2, '0');
}

startBtn.addEventListener('click', event => {
  startBtn.disabled = true;
  setInterval(() => {
    let timeLeft = userSelectedDate.getTime() - Date.now();
    if (timeLeft > 0) {
      updateTimer(convertMs(timeLeft));
    }
  }, 1000);
});

flatpickr('#datetime-picker', options);

setInterval(() => {
  if (Date.now() > userSelectedDate.getTime()) {
    startBtn.disabled = true;
  } else {
    startBtn.disabled = false;
  }
}, 100);
