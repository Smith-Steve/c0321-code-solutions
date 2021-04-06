/* exported capitalizeWords */
function capitalizeWords(string) {
  var words = string.toLowerCase();
  var sentence = words.split(' ');
  var newSentence = [];
  for (var i = 0; i < sentence.length; i++) {
    var word = sentence[i];
    var newWord = '';
    for (var k = 0; k < word.length; k++) {
      if (k === 0) {
        newWord += word[k].toUpperCase();
      } else {
        newWord += word[k].toLowerCase();
      }
    }
    newSentence.push(newWord);
  }
  newSentence = newSentence.join(' ');
  return newSentence;
}
