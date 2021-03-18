var num1 = 10;
var num2 = 31;
var num3 = 42;

var maximumValue = Math.max(num1, num2, num3);
console.log('Maximum Value: ' + maximumValue);
var heros = ['Gopee', 'Gopooh', 'Goku', 'Gohan'];
var randomNumber = Math.random();
randomNumber = randomNumber * heros.length;
var randomIndex = Math.floor(randomNumber);
console.log(randomIndex);
var randomHero = heros[randomIndex];
console.log('Your favorite random hero is: ' + randomHero);

console.log('========== Array Methods Section ========== ');
var library = [{ title: 'The History of Rome', author: 'Theodor Mommsen' }, { title: 'React and React Node', author: 'Adam Boduch' }, { title: 'HTML \\& CSS', author: 'Jon Duckett' }];
var lastbook = library.pop();
console.log(lastbook);
var firstBook = library.shift();
console.log(firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1);
console.log(library);
console.log('========== String Methods ========== ');
var fullName = 'Steve Smith';
var firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log(sayMyName);
