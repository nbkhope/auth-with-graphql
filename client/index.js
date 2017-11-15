import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, hashHistory as history, Route, IndexRoute } from 'react-router';

import App from './components/App';
import Main from './components/Main';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    // important to have otherwise cookies won't be included in request
    credentials: 'same-origin',
  },
});
const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id,
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Main} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
