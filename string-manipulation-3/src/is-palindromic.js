/* exported isPalindromic */
function isPalindromic(string) {
  var newString = '';
  for (var i = string.length - 1; i >= 0; i--) {
    if (string[i] === ' ') {
      newString += string[i - 1];
      newString += ' ';
      i -= 2; // I had to give myself around of applause on this one. It's the little things in life.
    }
    newString += string[i];
  }
  if (newString === string) {
    return true;
  } else {
    return false;
  }
}
