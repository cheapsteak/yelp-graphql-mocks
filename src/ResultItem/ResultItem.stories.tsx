import React from 'react';
import { storiesOf } from '@storybook/react';

import ResultItem from './ResultItem';
import InteractionStateContainer from '../InteractionStateContainer';

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
