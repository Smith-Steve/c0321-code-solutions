/* exported pick */
function pick(source, keys) {
  var newObject = {};

  for(var i = 0; i < keys.length; i++)
  {
    for(const key in source)
    {
      if(key === keys[i] && source[key] !== undefined)
      {
        newObject[key] = source[key];
      }
    }
  }
  return newObject;
}
