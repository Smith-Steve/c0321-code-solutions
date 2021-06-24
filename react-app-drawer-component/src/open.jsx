import React from 'react';

const Open = props => {
  <React.Fragment>
  <div className="sidebar">
      <h1>Home</h1>
      <a onClick={props.handleClick}><h4>Shopping</h4></a>
      <a onClick={props.handleClick}><h4>Computers</h4></a>
      <a onClick={props.handleClick}><h4>Accessories</h4></a>
      <a onClick={props.handleClick}><h4>Store</h4></a>
      <a onClick={props.handleClick}><h4>Maps</h4></a>
      <a onClick={props.handleClick}><h4>Televisions</h4></a>
      <a onClick={props.handleClick}><h4>Posters</h4></a>
  </div>
    <div className="backRound" onClick={props.handleClick}></div>
  </React.Fragment>;
};

export default Open;
