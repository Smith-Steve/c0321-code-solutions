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
      return (<div className="menu-Open" onClick={this.handleClick}>
      <div className="sidenav">
        <a onClick={this.handleClick}><h2>About</h2></a>
        <a onClick={this.handleClick}><h2>Services</h2></a>
        <a onClick={this.handleClick}><h2>Clients</h2></a>
        <a onClick={this.handleClick}><h2>Contact</h2></a>
      </div>
    </div>);
    } else {
      return (
      <div className="row">
        <div className="column-left">
          <div className="Menu-Closed" onClick={this.handleClick}>
            <i className="fa fa-bars fa-lg"></i>
          </div>
        </div>
        <div className="column-right">
        </div>
      </div>
      );
    }
  }
}

export default Menu;
