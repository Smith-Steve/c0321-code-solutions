const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const addition = (accumulator, currentValue) => accumulator + currentValue;
const sum = numbers.reduce(addition);

const multiply = (accrue, activeIndex) => accrue * activeIndex;
const product = numbers.reduce(multiply);

function transaction(accumulator, currentvalue) {
  console.log(currentvalue.amount);
  if (currentvalue.type === 'deposit') {
    accumulator += currentvalue.amount;
  } else {
    accumulator -= currentvalue.amount;
  }
  return accumulator;
}
const balance = account.reduce(transaction, 0);

function combine(accumulator, currentValue) {
  console.log(accumulator);
  const key = Object.keys(currentValue);
  accumulator[key] = currentValue[key];
  return accumulator;
}
const composite = traits.reduce(combine);

console.log(composite);
