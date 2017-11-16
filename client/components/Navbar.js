import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import query from '../queries/CurrentUser';
import mutation from '../mutations/Logout';

const onLogoutClick = (props) => {
  props.mutate({
    refetchQueries: [
      { query },
    ],
  });
}

const renderAuthActions = (props) => {
  const { data } = props;

  if (data.loading) {
    return <div />;
  }
  else if (data.user) {
    return <li><a onClick={() => onLogoutClick(props)}>Sign Out</a></li>;
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
        <a href="#" className="brand-logo"><i className="material-icons">account_circle</i>Auth with GraphQL</a>
        <ul id="nav-mobile" className="right hide-on-small-only">
          {renderAuthActions(props)}
        </ul>
      </div>
    </nav>
  )
};

export default graphql(mutation)(
  graphql(query)(Navbar)
);
