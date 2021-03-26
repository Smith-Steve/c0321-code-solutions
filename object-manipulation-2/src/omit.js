/* exported omit */
function omit(source, keys) {
  var newObject = {};
  var increment = 0;
  for (var key in source) {
    if (keys[increment] !== source[key]) {
      increment++;
      newObject[key] = source[key];

    } else {
      increment++;
    }
  }
  return newObject;
}
