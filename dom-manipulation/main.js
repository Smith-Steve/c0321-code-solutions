function handleClick(event) {
  var $clickcount = document.querySelector('.click-count');
  $clickcount.textContent = 'Clicks: ' + incrementer++;
}

function changeText(event) {
  if (incrementer <= 4) {
    $button.className = 'hot-button cold';
  } else if (incrementer < 7) {
    $button.className = 'hot-button cool';
  } else if (incrementer < 10) {
    $button.className = 'hot-button tepid';
  } else if (incrementer < 13) {
    $button.className = 'hot-button warm';
  } else if (incrementer < 16) {
    $button.className = 'hot-button hot';
  } else if (incrementer > 17) {
    $button.className = 'hot-button nuclear';
  }
}

var $button = document.querySelector('.hot-button');
var incrementer = 0;
$button.addEventListener('click', handleClick);
$button.addEventListener('click', changeText);
