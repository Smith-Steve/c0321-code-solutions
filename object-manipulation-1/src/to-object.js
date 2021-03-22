/* exported toObject */
function toObject(keyValuePair) {
  var newObj = new Object();
  newObj.keyValuePair[0] = keyValuePair[1];

  return newObj;
}
