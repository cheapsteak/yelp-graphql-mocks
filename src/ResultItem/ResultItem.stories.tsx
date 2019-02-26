import React from 'react';
import { storiesOf } from '@storybook/react';
import { Query } from 'react-apollo';

import * as GraphQLTypes from '../graphqlTypes';
import ResultItem from './ResultItem';
import InteractionStateContainer from '../InteractionStateContainer';
import { restaurantsQuery } from '../SearchResults';
import AutoMockedProvider from '../utils/mocks/AutoMockedProvider';
import resolvers from '../utils/mocks/resolvers';

storiesOf('SearchPage', module).add('ResultItem', () => {
  return (
    <InteractionStateContainer.Provider>
      <ResultItem
        business={{
          __typename: 'Business',
          id: 'x',
          name: 'Burger Place',
          photos: ['http://lorempixel.com/220/220/food'],
          review_count: 20,
          rating: 4,
          price: '$$',
          categories: [
            {
              __typename: 'Category',
              title: 'Burgers',
            },
          ],
        }}
      />
    </InteractionStateContainer.Provider>
  );
});

storiesOf('SearchPage (Auto-Mocked)', module).add('ResultItem', () => {
  return (
    <AutoMockedProvider mockResolvers={resolvers}>
      <Query<GraphQLTypes.RestaurantsQuery>
        query={restaurantsQuery}
        variables={{
          categories: 'restaurant',
          location: 'Toronto',
          radius: 400,
          sortBy: 'rating_value',
        }}
      >
        {({ data, loading }) => {
          if (loading || !data || !data.search) {
            return null;
          }
          return (
            <InteractionStateContainer.Provider>
              {data && data.search && data.search.business && (
                <ResultItem
                  business={
                    data.search
                      .business[0] as GraphQLTypes.RestaurantsQuery_search_business
                  }
                />
              )}
            </InteractionStateContainer.Provider>
          );
        }}
      </Query>
    </AutoMockedProvider>
  );
});
