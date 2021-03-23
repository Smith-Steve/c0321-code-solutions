var state = false;
var $backRound = document.querySelector('.dark');
var $button = document.querySelector('.off');

function handleClick(event) {
  if (state === false) {
    $button.className = 'on';
    $backRound.className = 'light';
    state = true;
  } else {
    $button.className = 'off';
    $backRound.className = 'dark';
    state = false;
  }
}

$button.addEventListener('click', handleClick);
