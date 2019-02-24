import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';

import { createHttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import 'sanitize.css';

import App from './App';

injectGlobal`
  #root {
    height: 100%;
  } 
`;

const client = new ApolloClient({
  link: createHttpLink({
    uri: '/graphql',
    credentials: 'omit',
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_YELP_API_TOKEN}`,
      'Accept-Language': 'en_US',
    },
  }),
  cache: new InMemoryCache(),
});

const render = (Component: React.ComponentType) => {
  return ReactDOM.render(
    <ApolloProvider client={client}>
      <Component />
    </ApolloProvider>,
    document.getElementById('root')
  );
};

render(App);

// @ts-ignore Property 'hot' does not exist on type 'NodeModule'
if (module.hot) {
  // @ts-ignore Property 'hot' does not exist on type 'NodeModule'
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}
