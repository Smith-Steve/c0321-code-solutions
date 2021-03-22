/* exported defaults */
function defaults(target, source) {
  console.log('target: ', target, 'source', source);
  for (var key in source) {
    for (var key2 in target) {
      if (target[key2] !== source[key]) {
        console.log(`${target[key2] !== source[key]}`);
        console.log(` ${key2} - target: ${target[key2]}, ${key} - source: ${source[key]}`);
      }
    }
  }
}
