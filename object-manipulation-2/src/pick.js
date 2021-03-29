/* exported pick */
function pick(source, keys) {
  var object = {};
  for (var i = 0; i < keys.length; i++) {
    for (var key in source) {
      if (key === keys[i] && source[key] !== undefined) {
        object[key] = source[key];
      }
    }
  }
  return object;
}
