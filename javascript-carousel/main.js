var $selectedStar = document.querySelector('.fas.fa-star');
var $iconOtherImage = document.querySelector('.far.fa-star');
var stars = document.querySelectorAll('.fa-star');
// var $containerForArrows = document.querySelectorAll('.container-2');
var $iconRight = document.querySelector('.fa-angle-double-right');
var $iconLeft = document.querySelector('.fa-angle-double-left');
var $container = document.querySelector('.star-container');

var activeStar = 0;

function handleClickIcon(event) {

  var current = event.target;

  for (var i = 0; i < stars.length; i++) {
    if (current === stars[i]) {
      activeStar = i;
      stars[i].className = `fas fa-star ${activeStar}`;
    } else {
      stars[i].className = `far fa-star ${i}`;
    }
  }
}

function handleClickArrow(event) {
  var starsArray = stars;
  var dataView = $selectedStar.getAttribute('data-view');
  console.log(activeStar);
  if (activeStar > 4 || activeStar === -1) {
    activeStar = 0;
  }

  if(event.target === $iconRight) {
    var starlistItem = stars[activeStar]; /// for appending purposes.
    var compareListItem = stars[activeStar].getAttribute('data-view');
    console.log(compareListItem === dataView)
    if(compareListItem === dataView) {
      activeStar++
      $selectedStar.setAttribute('class', 'far fa-star')
    } else {
      starlistItem.setAttribute('class', 'fas fa-star')
    }
  }

  if (event.target === $iconLeft) {
    activeStar--;
    if (starsArray[activeStar] === $selectedStar) {
      $selectedStar.className = `far fa-star ${activeStar}`;
    } else {
      for (var k = stars.length - 1; k > stars.length; k--) {
        stars[k].className = `fas fa-star ${k}`;
      }
      stars[activeStar].className = `fas fa-star ${activeStar}`;
    }
  }

}

$container.addEventListener('click', handleClickIcon);
$iconRight.addEventListener('click', handleClickArrow);
$iconLeft.addEventListener('click', handleClickArrow);

/*
1. Handle Click Arrow.
  a. remove for loop.
2. rename variables
3. handle overflow

*/

// function handleClickArrowRight(event) {

//   console.log(activeIndex);

//   for (var i = 0; i < stars.length; i++) {
//     if ($selectedStar === stars[i]) {
//       $selectedStar.className = `far fa-star ${i}`;
//     } else {
//       stars[i].className = `far fa-star ${i}`;
//       stars[activeIndex].className = `fas fa-star ${activeIndex}`;
//     }
//   }
//   activeIndex++;
// }

  // if (event.target === $iconRight) {
  //   activeStar++;
  //   if (starsArray[activeStar] === $selectedStar) {
  //     $selectedStar.className = `far fa-star ${activeStar}`;
  //     // stars[activeStar].className = `fas fa-star ${activeStar}`;
  //   } else {
  //     for (var i = 0; i < stars.length; i++) {
  //       stars[i].className = `far fa-star ${i}`;
  //     }
  //     stars[activeStar].className = `fas fa-star ${activeStar}`;
  //   }
