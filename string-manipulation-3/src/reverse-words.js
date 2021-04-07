/* exported reverseWords */
function reverseWords(string) {
  var workingString = [];
  var finalString = [];
  workingString = string.split(' ');
  for(var i = 0; i < workingString.length; i++) {
    var newWord = workingString[i].split('');
    newWord.reverse();
    finalString.push(newWord.join(''));
  }
  finalString = finalString.join(' ');
  return finalString;
}
