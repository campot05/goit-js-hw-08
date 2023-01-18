import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('[name=email'),
  textarea: document.querySelector('[name=message]'),
  button: document.querySelector('[type=submit]'),
};
const keyName = 'feedback-form-state';
const keyValue = localStorage.getItem(keyName);
const formData = {};

if (keyValue) {
  const formData = JSON.parse(keyValue);
  console.log(formData);
  refs.textarea.value = formData.message;
  refs.email.value = formData.email;
}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(saveTextValue, 1000));

function saveTextValue() {
  formData.message = refs.textarea.value;
  formData.email = refs.email.value;
  localStorage.setItem(keyName, JSON.stringify(formData));
  console.log(keyName);
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(formData);
  localStorage.removeItem(keyName);
  refs.form.reset();
}
