import React from 'react';
import ReactDOM from 'react-dom';

const reactElement = React.createElement('h1', null, 'Hello!');

ReactDOM.render(reactElement, window.getElementById('root'));
