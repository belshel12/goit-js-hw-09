import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delayInput: document.querySelector("input[name='delay']"),
  stepInput: document.querySelector("input[name='step']"),
  amountInput: document.querySelector("input[name='amount']"),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  const amount = Number(refs.amountInput.value);
  const delay = Number(refs.delayInput.value);
  const step = Number(refs.stepInput.value);

  for (i = 1; i <= amount; i += 1) {
    const nextDelay = delay + step * (i - 1);

    createPromise(i, nextDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });

  return promise;
}
