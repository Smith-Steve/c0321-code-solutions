import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: true };
  }

  handleClick() {
    const clicked = this.state.isClicked;
    this.setState({ isClicked: !clicked });
  }

  render() {
    const buttonClicked = this.state.isClicked;
    if (buttonClicked) {
      return (
        <div className="container">
          <div className="box" onClick={this.handleClick}>
            <div className="slide-on">
              <div className="on"></div>
              <div>
                <div className="text">ON</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="box" onClick={this.handleClick}>
        <div className="slide-off">
          <div className="off"></div>
          <div>
            <div className="text">OFF</div>
          </div>
        </div>
      </div>
    );
  }
}
export default ToggleSwitch;
