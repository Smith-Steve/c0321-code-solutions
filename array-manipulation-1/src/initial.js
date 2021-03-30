/* exported initial */
function initial(array) {
  var returnArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    returnArray.push(array[i]);
  }
  return returnArray;
}
