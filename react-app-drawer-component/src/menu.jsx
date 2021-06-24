import React from 'react';
import Open from './open';
import Closed from './closed';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isOpen: true, sideBar: 'open' };
  }

  handleClick() {
    let sideBarControl;
    if (this.state.sideBar === 'open') {
      sideBarControl = 'slideClosed';
    } else {
      sideBarControl = 'open';
    }
    this.setState({ isOpen: !this.state.isOpen, sideBar: sideBarControl });
  }

  classChange() {

  }

  render() {
    const onClick = this.state.isOpen;

    return (
        <div className="row">
          <div className="column">
            <div className={`sideBar ${onClick ? 'open' : 'closed'}`}>
              <Open handleClick={this.handleClick}></Open>
          </div>
        </div>
        </div>);
  }
}

export default Menu;
