/* exported capitalizeWord */
function capitalizeWord(word) {
  var newString = '';
  var firstLetter = word[0];

  var javaScript = word.toLowerCase().endsWith('script');

  if (javaScript === true) {
    return 'JavaScript';
  } else {
    for (var i = 0; i < word.length; i++) {
      if (word[i] === firstLetter) {
        newString += word[i].toUpperCase();
      } else {
        newString += word[i].toLowerCase();
      }
    }
  }

  return newString;
}
