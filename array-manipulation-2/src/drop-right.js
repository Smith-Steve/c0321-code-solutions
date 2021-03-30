/* exported dropRight */
function dropRight(array, count) {
  var end = array.length - count;
  var returnArray = array.slice(0, end);
  return returnArray;
}
