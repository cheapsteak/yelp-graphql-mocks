import React, { ReactNode } from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
  IMocks,
} from 'graphql-tools';
import { InMemoryCache } from 'apollo-cache-inmemory';

import createApolloLinkFromSchema from './createApolloLinkFromSchema';

const AutoMockedProvider: React.FunctionComponent<{
  children: ReactNode;
  mockResolvers?: IMocks;
}> = ({ children, mockResolvers }) => {
  const executableSchema = makeExecutableSchema({
    // eslint-disable-next-line import/no-webpack-loader-syntax
    typeDefs: require('raw-loader!../../../schema.graphql'),
  });
  addMockFunctionsToSchema({ schema: executableSchema, mocks: mockResolvers });

  const mockedLink = createApolloLinkFromSchema(executableSchema);

  const client = new ApolloClient({
    link: mockedLink,
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default AutoMockedProvider;
