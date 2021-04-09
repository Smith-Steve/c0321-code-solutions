function getPokemonData(name) {
  var xhr = new XMLHttpRequest(); // to create a new XHR object.
  xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + name); // to set the request method and URL.
  xhr.responseType = 'json'; // to automatically parse the JSON response body into JavaSCript objects.
  xhr.addEventListener('load', function () { // this is an event listener being added to the XHR function, which is an instantiation of the HMLHttpRequest.
    console.log(xhr.status);
    console.log(xhr.response);
  });
  xhr.send();
}

getPokemonData('cubone');
