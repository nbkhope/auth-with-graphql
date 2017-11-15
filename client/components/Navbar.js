import React from 'react';
import { graphql } from 'react-apollo';
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
    <li key="signup"><a href="#">Sign Up</a></li>,
    <li key="signin"><a href="#">Sign In</a></li>
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
