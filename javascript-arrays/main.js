function renderEntry(entry) {
  var finalCard = document.createElement('div');
  var column = document.createElement('div');
  var header = document.createElement('h3');
  var boldAuthor = document.createElement('b');
  var boldTitle = document.createElement('b');
  var author1 = document.createElement('span');
  var title = document.createElement('b');
  var image = document.createElement('img');
  var cardTextHolder = document.createElement('div');
  var bookImage = entry.book_image;

  var numberHeading = document.createTextNode('#' + entry.rank);
  var authorSlot = document.createTextNode('Author: '); // entry.author
  var titleEntry = document.createTextNode('Title: '); // entry.title
  var authorNode = document.createTextNode(entry.author);

  author1.appendChild(authorNode);

  boldAuthor.appendChild(authorSlot);
  boldTitle.appendChild(titleEntry);
  header.appendChild(numberHeading);
  title.appendChild(boldTitle);

  // author.appendChild(authorEntry);

  finalCard.setAttribute('class', 'card-container');
  header.setAttribute('class', 'card-header');
  column.setAttribute('class', 'column-full');
  image.setAttribute('src', bookImage);
  cardTextHolder.setAttribute('class', 'card-text-holder');

  finalCard.appendChild(header);
  finalCard.appendChild(image);
  cardTextHolder.appendChild(boldAuthor);
  cardTextHolder.appendChild(authorNode);
  cardTextHolder.appendChild(title);
  finalCard.appendChild(cardTextHolder);
  return finalCard;
}

renderEntry();
