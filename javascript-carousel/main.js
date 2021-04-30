var $selectedStar = document.querySelector('.fas.fa-star');
var stars = document.querySelectorAll('.fa-star');
var $iconRight = document.querySelector('.fas.fa-angle-double-right');
var $iconLeft = document.querySelector('.fa-angle-double-left');
var $container = document.querySelector('.star-container');
const images = ['./images/001.png', './images/004.png', './images/007.png', './images/025.png', './images/039.png'];

var activeStar = 0;

function handleClickIcon(event) {

  var current = event.target;

  for (var i = 0; i < stars.length; i++) {
    if (current === stars[i]) {
      activeStar = i;
      stars[i].className = 'fas fa-star';
      changeImage(stars[activeStar]);
    } else {
      stars[i].className = 'far fa-star';
    }
  }
}

function handleClickArrow(event) {

  if (event.target.className === $iconRight.className) {
    if (activeStar > 3) {
      activeStar = -1;
    }
    activeStar++;
    moveStar($selectedStar, stars, activeStar);
  }

  if (event.target.className === $iconLeft.className) {
    if (activeStar <= 0) {
      activeStar = 5;
    }
    activeStar--;
    moveStar($selectedStar, stars, activeStar);
  }
}

function moveStar(selectedStar, starNodeList, starIndex) {
  selectedStar = document.querySelector('.fas.fa-star');
  selectedStar.setAttribute('class', 'far fa-star');
  starNodeList[starIndex].setAttribute('class', 'fas fa-star');
  changeImage(starNodeList[activeStar]);
}

const moveStarInterval = (selectedStar, starNodeList) => {
  if (activeStar > 3) {
    activeStar = -1;
  }
  activeStar++;
  selectedStar = document.querySelector('.fas.fa-star');
  selectedStar.setAttribute('class', 'far fa-star');
  starNodeList[activeStar].setAttribute('class', 'fas fa-star');
  changeImage(starNodeList[activeStar]);
};

const changeImage = displayedStar => {
  const imageIndex = displayedStar.getAttribute('data-view');
  const $image = document.getElementById('pokemon');
  $image.setAttribute('src', images[imageIndex]);
};

window.setInterval(function () { moveStarInterval($selectedStar, stars); }, 2000);

$container.addEventListener('click', handleClickIcon);
$iconRight.addEventListener('click', handleClickArrow);
$iconLeft.addEventListener('click', handleClickArrow);
