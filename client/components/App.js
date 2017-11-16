import React from 'react';

import Navbar from './Navbar';

export default (props) => (
  <div className="container">
    <Navbar onLogout={() => props.router.push('/')}/>
    {props.children}
  </div>
);
