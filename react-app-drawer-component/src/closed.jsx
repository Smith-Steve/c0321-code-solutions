import React from 'react';

const Closed = ({ iconState, handleClick }) => <i className={`fas fa-bars fa-lg ${iconState}`} onClick={handleClick}></i>;

export default Closed;
