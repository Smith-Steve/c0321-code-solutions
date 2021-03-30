var $tabContainer = document.querySelector('.tab-container');
var $tabNodeList = document.querySelectorAll('.tab');
var $viewNodeList = document.querySelectorAll('.view');

function handleClick(event) {

  // checks to see if the event.target matches('.tab') to ensure that the user has to actually click on a '.tab' to change the page.
  if (event.target.matches('.tab') === false) {
    return;
  }

  for (let i = 0; i < $tabNodeList.length; i++) {

    var nodeListItem = $tabNodeList[i];
    if (nodeListItem === event.target) {
      nodeListItem.setAttribute('class', 'tab active');
    } else {
      nodeListItem.setAttribute('class', 'tab');
    }
  }

  var dataview = event.target.getAttribute('data-view');

  // we must do the same thing we did ABOVE below.
  for (let i = 0; i < $viewNodeList.length; i++) {
    var useListItem = $viewNodeList[i]; // list item for use. To append to and etc...
    var compareListItem = $viewNodeList[i].getAttribute('data-view'); // list item for purposes of comparison.
    if (compareListItem === dataview) {
      useListItem.setAttribute('class', 'view');
    } else {
      useListItem.setAttribute('class', 'view hidden');
    }
  }

}

$tabContainer.addEventListener('click', handleClick);
