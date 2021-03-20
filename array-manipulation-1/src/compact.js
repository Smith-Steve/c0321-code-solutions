/* exported compact */
function compact(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'undefined' && array[i] !== false && array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
