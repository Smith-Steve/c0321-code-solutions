import React from 'react';
import ReactDOM from 'react-dom';
import StopWatch from './stopwatch';

class Element extends React.Component {
  render() {
    return (<StopWatch/>);
  }
}

ReactDOM.render(<Element/>, document.getElementById('root'));
