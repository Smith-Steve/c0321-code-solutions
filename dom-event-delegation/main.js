var $taskList = document.querySelector('.task-list');

function handleClick(event) {
  console.log('event.target: ');
  console.log(event.target);
  console.log('Event.target tagname: ', event.target.tagName);
  if (event.target.matches('Button')) {
    var $closestAncestor = event.target.closest('.task-list-item');
    console.log($closestAncestor);
    $closestAncestor.remove();
  }
}

$taskList.addEventListener('click', handleClick);
