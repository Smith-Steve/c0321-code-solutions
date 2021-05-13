import React from 'react';
import ReactDOM from 'react-dom';

function Button() {
  return <button>Click me!</button>;
}

const component = <Button/>;
ReactDOM.render(component, document.getElementById('root'));
