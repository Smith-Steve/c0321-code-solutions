/* exported chunk */
function chunk(array, size) {
  var outerArray = [];
  var rotations = array.length / size;
  var startArg = 0;
  var endArg = size;
  while (rotations > 0) {
    var innerArray = array.slice(startArg, endArg);
    outerArray.push(innerArray);
    startArg += size;
    endArg += size;
    rotations--;
  }
  return outerArray;
}
