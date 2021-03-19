/* exported getWords */
function getWords(string) {
  if (string === '') {
    return [];
  } else {
    var newArray = string.split(' ');
    return newArray;
  }
}
