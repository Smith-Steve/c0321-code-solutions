/* exported todos */
var keyItemString = 'javascript-local-storage';
var todos = [];
function handleUnloadEvent(event) { // per MDN this must be added for chrome browser after prevent default statement.
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem(keyItemString, todosJSON);

}

window.addEventListener('click', handleUnloadEvent);

var previousToDoJSON = localStorage.getItem(keyItemString); // this is a variable that is assigned whatever was previously in the local storage.
if (previousToDoJSON !== null) {
  todos = JSON.parse(previousToDoJSON);
}
