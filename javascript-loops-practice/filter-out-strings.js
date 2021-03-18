/* exported filterOutStrings */
function filterOutStrings(values) {
  var newArray = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === 'string') {
      // do nothing. Is there a better way to do this?
    } else {
      newArray.push(values[i]);
    }
  }
  return newArray;
}
