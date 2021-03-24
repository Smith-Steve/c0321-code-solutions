function handleClick(event) {
  console.log('button clicked');
  console.log('log event object: ', event);
  console.log('Log the target property of the event object: ', event.target);
}

function handleMouseover(event) {
  console.log('button hovered');
  console.log('log event object: ', event);
  console.log('Log the target property of the event object: ', event.target);
}

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('log event object: ', event);
  console.log('Log the target property of the event object: ', event.target);
}

var $firstButton = document.querySelector('.click-button');
$firstButton.addEventListener('click', handleClick, false);

var $secondButton = document.querySelector('.hover-button');
$secondButton.addEventListener('mouseover', handleMouseover, false);

var $thirdButton = document.querySelector('.double-click-button');
$thirdButton.addEventListener('dblclick', handleDoubleClick, false);
