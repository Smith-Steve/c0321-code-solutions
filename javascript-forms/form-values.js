var $contactForm = document.getElementById('contact-form');

function handleForm(event) {
  event.preventDefault();
  console.log($contactForm.name.value);
  var userInput = { name: $contactForm.name.value, email: $contactForm.email.value, message: $contactForm.message.value };
  console.log(userInput);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', handleForm);
