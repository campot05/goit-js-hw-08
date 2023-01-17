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
refs.email.addEventListener('input', saveTextValue);
refs.textarea.addEventListener('input', saveTextValue);

function saveTextValue() {
  formData.message = refs.textarea.value;
  formData.email = refs.email.value;
  localStorage.setItem(keyName, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(formData);
  localStorage.removeItem(keyName);
  refs.form.reset();
}

//===================================================================================================================================

// if (keyValue) {
//   const localData = JSON.parse(keyValue);
//   console.log(localData);
// }

// refs.form.addEventListener('submit', onFormSubmit);
// refs.form.addEventListener('input', saveTextValue);

// function onFormSubmit(event) {
//   event.preventDefault();
//   localStorage.removeItem(keyName);
//   refs.textarea.value = '';
//   refs.email.value = '';
// }

// function saveTextValue(e) {
//   console.log(e.target.name);
//   formData[e.target.name] = e.target.value;
//   localStorage.setItem(keyName, JSON.stringify(formData));
// }
