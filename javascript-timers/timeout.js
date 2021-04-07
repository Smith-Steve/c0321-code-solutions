var $querySelector = document.querySelector('h1');

function changeElement(element) {
  $querySelector.innerHTML = 'Hello There!'; // innerHTML gets or sets the text of the element it is being
}

window.setTimeout(changeElement, 2 * 1000);
