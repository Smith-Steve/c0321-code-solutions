import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.revert = this.revert.bind(this);
    this.state = { incrementor: 0, timerActivated: false };
  }

  handleClick() {
    let seconds = this.state.incrementor;
    if (!this.state.timerActivated) {
      this.setState({ timerActivated: true });
      this.timeId = setInterval(() => {
        if (this.state.incrementor >= 5) {
          clearInterval(this.timeId);
          this.revert();
        } else {
          this.setState({ incrementor: seconds++ });
        }
      }, 1000);
    } else {
      this.setState({ timerActivated: false });
    }
  }

  revert(event) {
    this.setState({ timerActivated: false, incrementor: 0 });
    clearInterval(this.timeId);
  }

  render() {
    if (!this.state.timerActivated) {
      return (<React.Fragment>
        <div className="container">
          <div className="counter-display">{this.state.incrementor}</div>
          <i className="far fa-circle fa-10x"></i>
        </div>
        <i className="fa fa-play play-pause" onClick={this.handleClick}></i>
      </React.Fragment>);
    } else {
      return (
        <React.Fragment>
          <div className="container">
            <div className="counter-display">{this.state.incrementor}</div>
            <i className="far fa-circle fa-10x"></i>
          </div>
          <i className="fa fa-pause play-pause" onClick={this.revert}></i>
        </React.Fragment>
      );
    }
  }
}

export default StopWatch;
