/* exported omit */
function omit(source, keys) {
  var object = {};
  for (var i = 0; i < keys.length; i++) {
    for (var key in source) {
      if (source[key] !== keys[i]) {
        object[key] = source[key];
      }
    }
  }
  return object;
}
