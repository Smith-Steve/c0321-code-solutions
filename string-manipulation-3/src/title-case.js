/* exported titleCase */
function titleCase(title) {
  // Capitalize the first word of ALL words.
  // Capitalize all 'major words' in title, including the second
  //    part of hyphenated major words.
  // Capitalize all words four letters or more.

  title = title.split(' ');
  for (var i = 0; i < title.length; i++) {
    if (title.indexOf(title[i]) === 0) {
      // Capitalize the first word of ALL words.
      var firstWord = capitalizeFirstLetter(title[i]);
      title.splice(i, 1, firstWord); // Removing old title and inserting capitalized one into its place.
    } else {
      title.splice(i, 1, isJavaScript(title[i]));
    }
  }
  console.log(title);
}

function capitalizeFirstLetter(word) {
  word = word.split('');
  var capitalizeLetter = word[0].toUpperCase();
  word.splice(0, 1, capitalizeLetter);
  word = word.join('');
  return word;
}

function isJavaScript(word) {

  word = word.toLowerCase();
  var search = word.search('javascript');
  if (search !== -1) {
    if (search.word(':') !== -1) {
      return 'JavaScript:';
    } else {
      return 'JavaScript';
    }
  } else {
    return word;
  }
}
