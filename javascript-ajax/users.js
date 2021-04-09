var $userList = document.getElementById('user-list');

function getUserData() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    var arrayOfUsers = xhr.response;
    for (var i = 0; i < arrayOfUsers.length; i++) {
      var user = renderEntry(arrayOfUsers[i]);
      $userList.appendChild(user);
    }
  });
  xhr.send();
}

function renderEntry(entry) {
  var lineItem = document.createElement('li');
  var boldElement = document.createElement('b');
  var person = entry.name;
  boldElement.innerHTML = person;
  lineItem.appendChild(boldElement);
  return lineItem;
}

getUserData();
