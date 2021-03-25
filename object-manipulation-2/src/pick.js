/* exported pick */
function pick(source, keys) {
  var returnObject = {};
  var increment = 0;
  for (var key in source) {
    if (key === keys[increment]) {
      returnObject[key] = source[key];
    }
    increment++;
  }
  return returnObject;
}
