/* exported takeRight */
function takeRight(array, count) {
  var newNumber = array.length;
  var start = newNumber - count;
  var newArray = array.slice(start);
  return newArray;
}
