
function graduate(credential) {
  return function (fullName) {
    return fullName + ', ' + credential;
  };
}

var lawschool = graduate('j.d.');
var medschool = graduate('m.d');

console.log(lawschool('Tyson'));
console.log(medschool('David'));
