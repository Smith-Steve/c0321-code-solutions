var width = 10;
var height = 10;
var area = width * height;

console.log('the area variable equals: ', area);
console.log('the area variable has a type of: ', typeof area);

var bill = 5000;
var payment = 5100;
var change = payment - bill;
console.log('the change on the bill is: ', change);
console.log('the change variable has a type of: ', typeof change);

var quizzes = 100;
var midterm = 100;
var final = 100;
var grade = (quizzes + midterm + final) / 3;
console.log('your final grade is: ', grade);
console.log('the type of variable grade is is: ', typeof grade);

var firstName = 'Stephen';
var lastName = 'Smith';
var fullName = firstName + ' ' + lastName;
console.log('your full name is: ', fullName);
console.log('your fullName variable type of is: ', typeof fullName);

var pH = 4;
var isAcidic = pH < 7;
console.log('is the water acidic?: ', isAcidic);
console.log('the type of variable isAcidic is is: ', typeof isAcidic);

var headCount = 14;
var isSparta = headCount === 300;
console.log('Is this sparta?: ', isSparta);
console.log('the type of variable is isSparta is: ', typeof isSparta);

var motto = 'plus ultra ';
motto = motto + fullName;
console.log('value of motto: ', motto);
console.log('type of motto: ', typeof motto);
