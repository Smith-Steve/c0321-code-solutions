import React from 'react';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { incrementor: 0 };
  }

  handleClick() {
    const newValue = this.state.incrementor + 1;
    this.setState({ incrementor: newValue });
  }

  render() {
    const incrementorValue = this.state.incrementor;
    let returnValue;
    if (incrementorValue <= 3) {
      returnValue = <button onClick={this.handleClick} className={'className'}>Hot Button!</button>;
    } else if (incrementorValue <= 6) {
      returnValue = <button onClick={this.handleClick} className={'className2'}>Hot Button!</button>;
    } else if (incrementorValue <= 9) {
      returnValue = <button onClick={this.handleClick} className={'className3'}>Hot Button!</button>;
    } else if (incrementorValue <= 12) {
      returnValue = <button onClick={this.handleClick} className={'className4'}>Hot Button!</button>;
    } else if (incrementorValue <= 15) {
      returnValue = <button onClick={this.handleClick} className={'className5'}>Hot Button!</button>;
    } else if (incrementorValue < 18) {
      returnValue = <button onClick={this.handleClick} className={'className6'}>Hot Button!</button>;
    } else {
      return <button className={'className6'}>Hot Button!</button>;
    }
    return (returnValue);
  }
}
export default CustomButton;
