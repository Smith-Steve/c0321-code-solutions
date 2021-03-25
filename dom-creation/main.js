/* exported pokedex */
function renderPokemon(pokemon) {
  var columnThird = document.createElement('div');
  var headerTwo = document.createElement('h2');
  var headerThree = document.createElement('h3');
  var paragraph = document.createElement('p');
  var card = document.createElement('div'); // card
  var image = document.createElement('img'); // image
  var cardTextHolder = document.createElement('div');// card text holder.

  // set up the pokemon
  var headingTwo = document.createTextNode(pokemon[i].name);
  var headingThree = document.createTextNode(pokemon[i].number);
  var paragraphAttach = document.createTextNode(pokemon[i].description);
  var pictureFile = pokemon[i].imageUrl;

  columnThird.setAttribute('class', 'column-third'); // set attribute for columnThird var
  card.setAttribute('class', 'pokemon-card'); // set attribute for card var
  image.setAttribute('src', pictureFile); // set attributes for image var
  cardTextHolder.setAttribute('class', 'pokemon-card-text'); // set attributes for cardTextHolder variables.

  card.appendChild(image);

  // we are now appending the information in the text content to the card
  headerTwo.appendChild(headingTwo);
  headerThree.appendChild(headingThree);
  paragraph.appendChild(paragraphAttach);

  cardTextHolder.appendChild(headerTwo);
  cardTextHolder.appendChild(headerThree);
  cardTextHolder.appendChild(paragraph);

  card.appendChild(cardTextHolder);

  columnThird.appendChild(card);

  return columnThird;
}
var pokedex = [
  {
    number: '001',
    name: 'Bulbasaur',
    description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    imageUrl: 'images/bulbasaur.png'
  },
  {
    number: '004',
    name: 'Charmander',
    description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    imageUrl: 'images/charmander.png'
  },
  {
    number: '007',
    name: 'Squirtle',
    description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    imageUrl: 'images/squirtle.png'
  },
  {
    number: '002',
    name: 'Ivysaur',
    description: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    imageUrl: 'images/ivysaur.png'
  },
  {
    number: '005',
    name: 'Charmeleon',
    description: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    imageUrl: 'images/charmeleon.png'
  },
  {
    number: '008',
    name: 'Wartortle',
    description: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    imageUrl: 'images/wartortle.png'
  },
  {
    number: '003',
    name: 'Venusaur',
    description: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    imageUrl: 'images/venusaur.png'
  },
  {
    number: '006',
    name: 'Charizard',
    description: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    imageUrl: 'images/charizard.png'
  },
  {
    number: '009',
    name: 'Blastoise',
    description: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    imageUrl: 'images/blastoise.png'
  }
];

var $row = document.querySelector('.row');
for (var i = 0; i < pokedex.length; i++) {
  var returnValue = renderPokemon(pokedex);
  $row.appendChild(returnValue);
}
