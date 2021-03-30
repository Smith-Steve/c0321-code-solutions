/* exported isUpperCased */
function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    var letter = word[i];
    var tester = letter.toUpperCase();
    if (letter !== tester) {
      return false;
    }
  }
  return true;
}
