const takeAChance = require('./take-a-chance');

const name = takeAChance('Steve');

name.then(resolve => {
  console.log(resolve);
}, reason => {
  console.error(reason.message);
});
