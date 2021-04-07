/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var returnFirstString = setUpString(firstString);
  var returnSecondString = setUpString(secondString);

  if(returnFirstString === returnSecondString) {
    return true;
  } else {
    return false;
  }
}


function setUpString(string) {
  string = string.toLowerCase();
  string = string.split('').sort().join('');
  string = string.trim();
  return string
}
