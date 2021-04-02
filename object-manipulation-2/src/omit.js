/* exported omit */
function omit(source, keys) {
  var object = {};
  for (var key in source) {
    if (!keys.includes(key)) {
      object[key] = source[key];
    }
  }
  return object;
}

// go through the objet
// if key not keys[] omit
