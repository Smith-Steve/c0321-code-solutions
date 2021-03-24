var $letters = document.querySelectorAll('span');
var lettersArray = [];
for (var i = 0; i < $letters.length; i++) {
  lettersArray.push($letters[i].innerHTML); // created if needed.
}
