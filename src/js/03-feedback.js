import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');
const { email, message } = feedbackForm.elements;

feedbackForm.addEventListener('input', throttle(inputToLS, 500));

feedbackForm.addEventListener('submit', e => {
  e.preventDefault();
  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }
  console.log(load('obj'));
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  feedbackForm.reset();
});

function inputToLS(event) {
  //   let email;
  //   let message;
  //   if (event.target.name === 'email') {
  //     email = ev.value;
  //     console.log(email);
  //   }
  //   if (event.target.name === 'message') {
  //     message = event.target.value;
  //     console.log(message);
  //   }
  //   const message = event.target.value;

  const obj = {
    email: email.value.trim() || '',
    message: message.value.trim() || '',
  };

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(obj));
}
let data;
function load() {
  data = localStorage.getItem(LOCAL_STORAGE_KEY) || '';
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
}

function loadFromLS() {
  if (load('obj') === '') {
    return;
  }
  const obj = load('obj');
  email.value = obj.email;
  message.value = obj.message;
}
loadFromLS();
