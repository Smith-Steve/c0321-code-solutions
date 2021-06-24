import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isOpen: true };
  }

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const onClick = this.state.isOpen;

    if (onClick) {
      return (
        <div className="row">
          <div className="column">
            <div className="sidebar" id="sideBar">
              <h1>Home</h1>
              <a onClick={this.handleClick}><h4>Shopping</h4></a>
              <a onClick={this.handleClick}><h4>Computers</h4></a>
              <a onClick={this.handleClick}><h4>Accessories</h4></a>
              <a onClick={this.handleClick}><h4>Store</h4></a>
              <a onClick={this.handleClick}><h4>Maps</h4></a>
              <a onClick={this.handleClick}><h4>Televisions</h4></a>
              <a onClick={this.handleClick}><h4>Posters</h4></a>
            </div>
            <div className="backRound" onClick={this.handleClick}></div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row row-display">
          <div className="column">
            <i className="fas fa-bars fa-lg" onClick={this.handleClick}></i>
          </div>
        </div>
      );
    }
  }
}

export default Menu;
