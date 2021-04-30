var $letters = document.querySelectorAll('span');
let currentLetter = 0;

document.addEventListener('keydown', function (event) {
  if ($letters[currentLetter].textContent.toLowerCase() === event.key) {
    $letters[currentLetter].style.color = 'chartreuse';
    $letters[currentLetter].className = 'letter';
    $letters[currentLetter + 1].className = 'letter underline';
    currentLetter++;
  } else if ($letters[currentLetter] !== undefined) {
    $letters[currentLetter].style.color = 'maroon';
  } else {
    process.exit();
  }
});
