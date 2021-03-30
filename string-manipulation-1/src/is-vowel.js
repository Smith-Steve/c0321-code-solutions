/* exported isVowel */
function isVowel(character) {
  var newChar = character.toUpperCase();
  if (newChar === 'A' || newChar === 'E' || newChar === 'I' || newChar === 'O' || newChar === 'U') {
    return true;
  } else {
    return false;
  }
}
