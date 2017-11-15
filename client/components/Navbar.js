import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import query from '../queries/CurrentUser';

const renderAuthActions = ({ data }) => {
  if (data.loading) {
    return <div />;
  }
  else if (data.user) {
    return <li><a href="#">Sign Out</a></li>;
  }

  // else, if not logged in
  return [
    <li key="signup"><Link to="/signup">Sign Up</Link></li>,
    <li key="signin"><Link to="/login">Sign In</Link></li>
  ];
};

const Navbar = (props) => {
  console.log(props);
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">Auth with GraphQL</a>
        <ul id="nav-mobile" className="right hide-on-small-only">
          {renderAuthActions(props)}
        </ul>
      </div>
    </nav>
  )
};

export default graphql(query)(Navbar);
