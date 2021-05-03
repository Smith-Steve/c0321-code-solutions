/* exported equal */
function equal(first, second) {
  let x = 0;

  while (x < first.length) {
    if (first[x].includes(second[x])) {
      x++;
    } else {
      return false;
    }
  }
  return true;
}
