var isLightBulbOn = false;
var $backRound = document.querySelector('.dark');
var $button = document.querySelector('.off');

function handleClick(event) {
  if (isLightBulbOn === false) {
    $button.className = 'on';
    $backRound.className = 'light';
    isLightBulbOn = true;
  } else {
    $button.className = 'off';
    $backRound.className = 'dark';
    isLightBulbOn = false;
  }
}

$button.addEventListener('click', handleClick);
