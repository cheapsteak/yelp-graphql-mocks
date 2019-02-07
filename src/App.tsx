import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import idx from 'idx';

import * as GraphQLTypes from './graphqlTypes';
import ResultItem, { ResultItemBusinessFragment } from './ResultItem';

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
      }
    }
  }
  ${ResultItemBusinessFragment}
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Query<GraphQLTypes.RestaurantsQuery> query={restaurantsQuery}>
          {({ data, loading }) => {
            if (loading) {
              return '...';
            }
            const businesses = idx(data, d => d.search.business) || [];
            return businesses.map(business => (
              <ResultItem business={business} key={business.id} />
            ));
          }}
        </Query>
      </div>
    );
  }
}

export default App;
