import { introspectSchema, makeRemoteExecutableSchema } from 'graphql-tools';
import { HttpLink } from 'apollo-link-http';

export default async (graphqlEndpointUrl: string) => {
  const link = new HttpLink({
    uri: graphqlEndpointUrl,
    fetch,
  });

  return makeRemoteExecutableSchema({
    schema: await introspectSchema(link),
    link,
  });
};
