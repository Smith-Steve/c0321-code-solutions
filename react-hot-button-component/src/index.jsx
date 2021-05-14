import React from 'react';
import ReactDOM from 'react-dom';
import Button from './hot-button';

class Element extends React.Component {

  render() {
    return (<Button />);
  }
}

ReactDOM.render(<Element/>, document.getElementById('root'));
