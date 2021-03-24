/* exported getKeys */
function getKeys(object) {
  var newObject = [];
  for (var key in object) {
    newObject.push(key);
  }
  return newObject;
}
