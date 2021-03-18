/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isOldEnoughToDrink(person) {
  if (person.age > 21) {
    return true;
  } else {
    return false;
  }
}

function isUnderFive(age) {
  if (age < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  number = number % 2;
  if (number === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age > 15) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(ph) {
  if (ph > 14) {
    return 'invalid pH level';
  }
  if (ph >= 7.1) {
    return 'base';
  }
  if (ph === 7) {
    return 'neutral';
  }
  if (ph <= 6.9 && ph > 0) {
    return 'acid';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if (name === 'yakko') {
    return 'We\'re the warner brothers!';
  }
  if (name === 'wakko') {
    return 'We\'re the warner brothers!';
  }
  if (name === 'dot') {
    return 'I\'m cute~';
  } else {
    return 'Goodnight everybody!';
  }
}
