var upDown = false;
var $modal = document.querySelector('.modal');
var $button = document.querySelector('.button1');
var $button2 = document.querySelector('.button2');

function handleClick(event) {
  if (upDown === false) {
    $modal.className = 'modal isUp';
    upDown = true;
  } else {
    $modal.className = 'modal';
    upDown = false;
  }
}

function handleClickModal() {
  if (upDown === true) {
    $modal.className = 'modal';
    upDown = false;
  }
}

$button.addEventListener('click', handleClick);
$button2.addEventListener('click', handleClickModal);
