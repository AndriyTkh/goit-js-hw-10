'use strict';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
let delay;
let state;

function makePromise(del, st) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (st) resolve();
      else reject();
    }, del);
  });
}

form.addEventListener('submit', event => {
  event.preventDefault();

  delay = Number(form.elements.delay.value);
  state = form.elements.state.value === 'fulfilled' ? true : false;

  makePromise(delay, state)
    .then(value => {
      iziToast.success({
        theme: 'dark',
        position: 'topRight',
        messageColor: '#FFFFFF',
        backgroundColor: '#59A10D',
        progressBarColor: '#326101',
        message: `Fulfilled promise in ${delay}ms`,
        title: 'OK',
        timeout: 2000,
      });
    })
    .catch(error => {
      iziToast.error({
        theme: 'dark',
        position: 'topRight',
        messageColor: '#FFFFFF',
        backgroundColor: 'red',
        progressBarColor: '#ff91a4',
        message: `Rejected promise in ${delay}ms`,
        title: 'NO',
        timeout: 2000,
      });
    });
});
