/* exported getStudentNames */
function getStudentNames(students) {
  var newArray = [];
  for (var i = 0; i < students.length; i++) {
    for (var student in students[i]) {
      newArray.push(students[i][student]);
    }
  }
  return newArray;
}
