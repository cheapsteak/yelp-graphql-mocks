import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import idx from 'idx';
import { css } from 'emotion';

import * as GraphQLTypes from './graphqlTypes';
import ResultItem, { ResultItemBusinessFragment } from './ResultItem';
import ResultsMap, { ResultsMapBusinessFragment } from './ResultsMap';
import InteractionStateContainer from './InteractionStateContainer';

export const restaurantsQuery = gql`
  query RestaurantsQuery(
    $categories: String!
    $location: String!
    $radius: Float!
    $sortBy: String!
  ) {
    search(
      categories: $categories
      location: $location
      radius: $radius
      sort_by: $sortBy
    ) {
      business {
        ...ResultItemBusinessFragment
        ...ResultsMapBusinessFragment
      }
    }
  }
  ${ResultItemBusinessFragment}
  ${ResultsMapBusinessFragment}
`;

const SearchResults = () => {
  return (
    <InteractionStateContainer.Provider>
      <Query<GraphQLTypes.RestaurantsQuery>
        query={restaurantsQuery}
        variables={{
          categories: 'restaurant',
          location: '25 York Street, Toronto, ontario, canada',
          radius: 400,
          sortBy: 'rating_value',
        }}
      >
        {({ data, loading, error }) => {
          if (error) throw error;
          if (loading) {
            return '...';
          }
          const businesses = idx(data, d => d.search.business) || [];
          return (
            <div
              className={css`
                display: flex;
                height: 100%;
              `}
            >
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  width: 400px;
                  overflow-y: auto;
                `}
              >
                {businesses.map(business => (
                  <ResultItem business={business} key={business.id} />
                ))}
              </div>
              <div
                className={css`
                  position: relative;
                  background-color: #ddd;
                  flex-grow: 1;
                `}
              >
                <div
                  className={css`
                    position: sticky;
                    top: 0;
                    width: 100%;
                    height: 100vh;
                  `}
                >
                  <ResultsMap businesses={businesses} />
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    </InteractionStateContainer.Provider>
  );
};

export default SearchResults;
