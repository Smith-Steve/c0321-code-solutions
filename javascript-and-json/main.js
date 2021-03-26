var bookArray =
[
  {
    isbn: '12345',
    title: 'The History of Rome',
    author: 'Theodor Mommsen'
  },
  {
    isbn: '123456',
    title: 'Blood Meridian: Or The Evening Redness in the West',
    author: 'Cormac McCarthy'
  },
  {
    isbn: '1234567',
    title: 'Julius Caesar',
    author: 'William Shakespeare'
  }
];

for (var i = 0; i < bookArray.length; i++) {
  console.log('type of: ', typeof bookArray[i]);
}
var stringObjectBooks = JSON.stringify(bookArray);
console.log('Console log type of stringObjectBooks Variable: ', typeof stringObjectBooks);
console.log('Console log stringObject Books variable: ', stringObjectBooks);

var student = '{"numberId": "123456", "name": "Stevie" }';
console.log('Console log type of student variable: ', typeof student);
console.log('Console log student variable: ', student);

var parsedStudent = JSON.parse(student);
console.log('Console log of parsed student variable: ', parsedStudent);
