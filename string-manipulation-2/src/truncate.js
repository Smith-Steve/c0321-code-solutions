/* exported truncate */
function truncate(length, string) {
  var newString = string.substring(0, length) + '...';
  return newString;
}
