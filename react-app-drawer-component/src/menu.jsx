import React from 'react';
import Open from './open';
import Closed from './closed';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isOpen: true, sideBar: 'open', icon: 'closed' };
  }

  handleClick() {
    let sideBarControl;
    let iconControl;
    if (this.state.sideBar === 'open') {
      sideBarControl = 'closed';
      iconControl = 'open';
    } else {
      sideBarControl = 'open';
      iconControl = 'closed';
    }
    this.setState({ isOpen: !this.state.isOpen, sideBar: sideBarControl, icon: iconControl });
  }

  render() {
    return (
        <div className="row">
              <Open handleClick={this.handleClick} sideBarState={this.state.sideBar}></Open>
              <Closed handleClick={this.handleClick} iconState={this.state.icon}></Closed>
        </div>);
  }
}

export default Menu;
