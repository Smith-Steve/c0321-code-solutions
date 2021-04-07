var $querySelector = document.querySelector('h1');
var incrementingVariable = 4;

var intervalVariable = window.setInterval(changeElement, 500);

function changeElement(element) {
  $querySelector.innerHTML = incrementingVariable;
  if (incrementingVariable === 0) {
    $querySelector.innerHTML = '~Earth Beeeelooowww Us~';
    clearInterval(intervalVariable); // we can/should put the variable from setInterval in clearInterval. But documentation reports and experience confirms that any integer will stop it. Why?
  }
  --incrementingVariable;
}
