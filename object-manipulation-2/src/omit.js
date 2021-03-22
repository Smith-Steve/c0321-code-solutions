/* exported omit */
function omit(source, keys)
{
  var newObject = {};
  var i = 0
    for(var key in source)
    {
      if(key !== keys[i])
      {
        newObject[key] = source[key];
        i++;
      }
    }
  return newObject;
}
