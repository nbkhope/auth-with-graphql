import React from 'react';

import Navbar from './Navbar';

export default (props) => (
  <div className="ui container">
    <Navbar />
    {props.children}
  </div>
);
