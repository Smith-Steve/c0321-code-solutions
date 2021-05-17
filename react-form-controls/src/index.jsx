import React from 'react';
import ReactDOM from 'react-dom';

class NewsLetter extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { userInput: '' };
  }

  handleChange(event) {
    this.setState({ userInput: event.target.value });
  }

  handleSubmit(event) {
    console.log('State.userInput: ', this.state.userInput);
    event.preventDefault();
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <label>
        User E-mail:
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <button onSubmit={this.handleSubmit}>Submit</button>
      </label>
    </form>);
  }

}

ReactDOM.render(<NewsLetter/>, document.getElementById('root'));
