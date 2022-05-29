import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

getDataOfLocalStorage();

form.addEventListener(
  'input',
  throttle(event => {
    const feedback = {
      email: email.value,
      message: message.value,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(feedback));
  }, 500)
);

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(getDataOfLocalStorage());
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
});

function getDataOfLocalStorage() {
  const savedFeedback = localStorage.getItem('feedback-form-state');

  try {
    const parsedFeedback = JSON.parse(savedFeedback);
    email.value = parsedFeedback.email;
    message.value = parsedFeedback.message;
  } catch (error) {
    console.log('Locale Storage is empty');
  }

  return {
    email: email.value,
    message: message.value,
  };
}
