/* exported numVowels */
function numVowels(string) {
  var numbers = 0;
  string = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'o' || string[i] === 'u' || string[i] === 'e' || string[i] === 'i') {
      numbers++;
    }
  }
  return numbers;
}
