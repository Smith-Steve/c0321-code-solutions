/* exported oddOrEven */
function oddOrEven(array) {
  var returnArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      returnArray.push('even');
    } else {
      returnArray.push('odd');
    }
  }
  return returnArray;
}
