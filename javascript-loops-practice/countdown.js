/* exported countdown */
function countdown(number) {
  var array = [];
  for (; number >= 0; number--) {
    array.push(number);
  }
  return array;
}
