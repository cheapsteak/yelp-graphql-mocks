import { graphql, print, GraphQLSchema } from 'graphql';
import { ApolloLink, Observable } from 'apollo-link';

export default (executableSchema: GraphQLSchema) =>
  new ApolloLink(operation => {
    const { query, operationName, variables } = operation;
    return new Observable(observer => {
      graphql(
        executableSchema,
        print(query),
        null,
        null,
        variables,
        operationName
      )
        .then(result => {
          observer.next(result);
          observer.complete();
        })
        .catch(observer.error.bind(observer));
    });
  });
