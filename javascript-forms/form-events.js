var $nameField = document.getElementById('user-name');
var $emailField = document.getElementById('user-email');
var $userMessage = document.getElementById('user-message');

function handleFocus(event) {
  console.log('focus event fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log('event.target.name fired: ', event.target.name);
  console.log('event.target.value fired: ', event.target.value);
}

$nameField.addEventListener('click', handleFocus);
$nameField.addEventListener('keydown', handleInput);
$nameField.addEventListener('blur', handleBlur);

$emailField.addEventListener('click', handleFocus);
$emailField.addEventListener('blur', handleBlur);
$emailField.addEventListener('keydown', handleInput);

$userMessage.addEventListener('click', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('keydown', handleInput);
