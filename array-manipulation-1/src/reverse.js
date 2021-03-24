/* exported reverse */
function reverse(array) {
  var newArray = [];
  for (var arrayIndex = array.length - 1; arrayIndex >= 0; arrayIndex--) {
    newArray.push(array[arrayIndex]);
  }
  return newArray;
}
