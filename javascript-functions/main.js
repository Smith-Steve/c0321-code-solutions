function convertMinutesToSeconds(minutes) {
  return (minutes * 60);
}

var seconds = convertMinutesToSeconds(6);
console.log('6 minutes is equivalent to: ' + seconds + ' seconds');

function greet(name) {
  var returnValue = 'Hello ' + name;
  return returnValue;
}
var name = 'Steve';
console.log(greet(name));

function getArea(width, height) {
  return width * height;
}
var area = getArea(6, 6);
console.log('The area of the rectangle is: ' + area);

function getFirstName(name) {
  return name.firstName;
}

var person = { firstName: 'Steve', lastName: 'Smith' };
console.log('The person\'s first name is: ', getFirstName(person));

function getLastElement(array) {
  var lastElement = array.length - 1;
  return array[lastElement];
}
var array = ['Steve', 'Bob', 'Davis', 'Thomas', 'Oliver'];
var result = getLastElement(array);
console.log('The last element in the array is: ' + result);
