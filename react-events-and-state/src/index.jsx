import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const clicked = this.state.isClicked;

    return (clicked ? <button >Thanks!</button> : <button onClick={this.handleClick}>Click Me!</button>);
  }
}

ReactDOM.render(<CustomButton/>, document.getElementById('root'));
