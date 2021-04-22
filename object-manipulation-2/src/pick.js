/* exported pick */
function pick(source, keys) {
  var object = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      var key = keys[i];
      object[key] = source[key];
    }

  }
  return object;
}
