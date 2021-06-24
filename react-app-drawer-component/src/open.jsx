import React from 'react';

const Open = ({ handleClick, sideBarState }) => {
  return (<React.Fragment>
  <div className={`sidebar ${sideBarState}`}>
      <h1>Home</h1>
      <a onClick={handleClick}><h4>Shopping</h4></a>
      <a onClick={handleClick}><h4>Computers</h4></a>
      <a onClick={handleClick}><h4>Accessories</h4></a>
      <a onClick={handleClick}><h4>Store</h4></a>
      <a onClick={handleClick}><h4>Maps</h4></a>
      <a onClick={handleClick}><h4>Televisions</h4></a>
      <a onClick={handleClick}><h4>Posters</h4></a>
  </div>
    <div className={`backround ${sideBarState}`} onClick={handleClick}></div>
  </React.Fragment>);
};

export default Open;
