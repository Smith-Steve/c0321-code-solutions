const Add = require('./add');
const Subtract = require('./subtract');
const Multiply = require('./multiply');
const Divide = require('./divide');

const NUMBER1 = process.argv[2];
const OPERAND = process.argv[3].toLowerCase();
const NUMBER2 = process.argv[4];

if (OPERAND === 'plus') {
  console.log(Add(NUMBER1, NUMBER2));
} else if (OPERAND === 'minus') {
  console.log(Subtract(NUMBER1, NUMBER2));
} else if (OPERAND === 'times') {
  console.log(Multiply(NUMBER1, NUMBER2));
} else if (OPERAND === 'divide') {
  console.log(Divide(NUMBER1, NUMBER2));
} else {
  console.log('Not a mathematical operator encompassed within this application. Please Enter \'Plus\',\'Minus\',\'Times\' or \'Divide\'.');
}
