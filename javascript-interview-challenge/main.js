var colors = ['red', 'white', 'blue'];

console.log(colors[0], colors[1], colors[2]);

console.log('America is ', colors[0], ' ', colors[1], ' ', colors[2]);

colors.splice(2, 1, 'green');
console.log(colors);

console.log('Mexico is ', colors[0], ' ', colors[1], ' ', colors[2], ' and Italy is ', colors[2], ' ', colors[1], ' ', colors[0]);
console.log(colors);
var students = ['Steve', 'Dave', 'Thomas'];
var numberOfStudents = students.length;
console.log('There are ' + numberOfStudents + ' students in the class');
var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];
console.log(lastStudent);
console.log(students);
