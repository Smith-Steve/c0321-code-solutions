/* exported defaults */
function defaults(target, source) {
  for (var key in source) {
    if (source[key] !== target[key]) {
      target[key] = source[key];
    }
  }
  return target;
}
