/* exported getKeys */
function getKeys(object)
{
  var returnArray = [];
  for(var key in object)
  {
    returnArray.push(key);
  }
  return returnArray;
}
