'use strict';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
let delay;
let state;

function makePromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
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
        message: `Fulfilled promise in ${value}ms`,
        title: 'OK',
        timeout: 2000,
      });
    })
    .catch(value => {
      iziToast.error({
        theme: 'dark',
        position: 'topRight',
        messageColor: '#FFFFFF',
        backgroundColor: 'red',
        progressBarColor: '#ff91a4',
        message: `Rejected promise in ${value}ms`,
        title: 'NO',
        timeout: 2000,
      });
    });
});
