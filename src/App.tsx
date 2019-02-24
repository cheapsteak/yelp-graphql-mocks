import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import idx from 'idx';
import { css } from 'emotion';

import * as GraphQLTypes from './graphqlTypes';
import ResultItem, { ResultItemBusinessFragment } from './ResultItem';
import ResultsMap, { ResultsMapBusinessFragment } from './ResultsMap';
import InteractionStateContainer from './InteractionStateContainer';

const restaurantsQuery = gql`
  query RestaurantsQuery {
    search(
      categories: "restaurant"
      location: "25 York Street, Toronto, ontario, canada"
      radius: 400
      sort_by: "rating_value"
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

const App = () => {
  return (
    <div className="App">
      <InteractionStateContainer.Provider>
        <Query<GraphQLTypes.RestaurantsQuery> query={restaurantsQuery}>
          {({ data, loading }) => {
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
    </div>
  );
};

export default App;
