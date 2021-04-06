/* exported pick */
function pick(source, keys) {
  var object = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      for (var key in source) {
        if (key === keys[i]) {
          object[key] = source[key];
        }
      }
    }

  }
  return object;
}
