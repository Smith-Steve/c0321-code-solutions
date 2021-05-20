import React from 'react';
import ReactDOM from 'react-dom';
import ToggleSwitch from './toggle-switch';

class Element extends React.Component {

  render() {
    return (
      <ToggleSwitch/>);
  }
}

ReactDOM.render(<Element/>, document.getElementById('root'));
