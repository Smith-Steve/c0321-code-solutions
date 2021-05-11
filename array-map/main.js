const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(number => number * 2);
console.log(doubled);
const prices = numbers.map(price => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price));
console.log(prices);
const upperCased = languages.map(language => language.toUpperCase());
console.log(upperCased);
const firstLetters = languages.map(langaugeFirst => langaugeFirst.charAt(0).toUpperCase() + langaugeFirst.slice(1));
console.log(firstLetters);
