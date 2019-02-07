import React from 'react';
import ReactDOM from 'react-dom';
import { createHttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import 'sanitize.css';
import 'semantic-ui-css/semantic.min.css';

import App from './App';

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

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
