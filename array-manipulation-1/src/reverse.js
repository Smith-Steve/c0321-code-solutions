/* exported reverse */
function reverse(array) {
  var newArray = [];
  var arrayIndex = array.length - 1;
  for (; arrayIndex >= 0; arrayIndex--) {
    newArray.push(array[arrayIndex]);
  }
  return newArray;
}
