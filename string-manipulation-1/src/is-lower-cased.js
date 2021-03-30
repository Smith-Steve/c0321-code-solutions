/* exported isLowerCased */
function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    var letter = word[i];
    var tester = letter.toLowerCase();
    if (letter !== tester) {
      return false;
    }
  }
  return true;
}
