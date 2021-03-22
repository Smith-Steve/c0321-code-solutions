/* exported invert */
function invert(source)
{
  var newObject = {}
  var newKeys = [];
  var newValues = [];
  for(var key in source)
  {
    newKeys.push(key);
    newValues.push(source[key]);
  }

  for(var i = newKeys.length - 1; i >= 0; i--)
  {
    newObject[newValues[i]] = newKeys[i];
  }
  return newObject;
}
