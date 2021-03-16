var student = { firstName: 'Stevie-boy', lastName: 'smith', age: 32 };
console.log('Students name: ', student.firstName);
console.log('Students last name: ', student.lastName);

student.fullName = student.firstName + ' ' + student.lastName;
console.log('The student\'s full name is: ', student.fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Data Analyst';
console.log('Student live\'s in Irvine: ', student.livesInIrvine);
console.log('Student\'s previous occupation', student.previousOccupation);

var vehicle = { make: 'Subaru', model: 'Impreza', year: 2016 };
vehicle['color'] = 'Dark Blue';
vehicle['isConvertible'] = false;
console.log('the color of the student\'s vehicle is: ', vehicle.color);
console.log('the student\'s vehhicle is a convertible', vehicle.isConvertible);
console.log('The value of vehicle: ', vehicle);
console.log('Now onto the pet object.');
var pet = { name: 'none', type: 'none' };
delete pet.name;
delete pet.type;
console.log(pet);
