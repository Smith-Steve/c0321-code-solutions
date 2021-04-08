var $iconSelectedImage = document.querySelector('.fas.fa-star');
var $iconOtherImage = document.querySelector('.far.fa-star');
var $icon = document.querySelectorAll('.fa-star');


function handleClickIcon(event) {
  var arrayOfIcons = $icon;
  console.log(event.target);

  for (let i = 0; i < arrayOfIcons.length; i++) {
    var icon = arrayOfIcons[i];
    console.log(arrayOfIcons[i], 'the index printing is ', i)
    if(icon === event.target) {
      event.target.setAttribute('class', 'fas fa-star');
      console.log(event.target, 'i am the event target')
    } else if (icon === 'fas fa-star') {
      icon.setAttribute('class', 'far fa-star')
    } else {
      icon.setAttribute('class', 'far fa-star')
    }
  }
}

$iconSelectedImage.addEventListener('click', handleClickIcon);
$iconOtherImage.addEventListener('click', handleClickIcon);
