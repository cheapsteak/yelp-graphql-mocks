import React from 'react';
import { storiesOf } from '@storybook/react';
import { css } from 'emotion';
import { MockedProvider } from 'react-apollo/test-utils';
import faker from 'faker';

import ResultsMap from './ResultsMap';
import * as GraphQLTypes from '../graphqlTypes';
import InteractionStateContainer from '../InteractionStateContainer';
import { markerInfoQuery } from './Info';
import AutoMockedProvider from '../utils/mocks/AutoMockedProvider';

import 'mapbox-gl/dist/mapbox-gl.css';

const businesses: GraphQLTypes.ResultsMapBusinessFragment[] = [
  {
    __typename: 'Business',
    id: 'x',
    coordinates: {
      __typename: 'Coordinates',
      latitude: 43.646954,
      longitude: -79.382159,
    },
  },
  {
    __typename: 'Business',
    id: 'y',
    coordinates: {
      __typename: 'Coordinates',
      latitude: 43.63316,
      longitude: -79.3922,
    },
  },
];

storiesOf('SearchPage', module)
  .addDecorator(story => (
    <div
      className={css`
        width: 100%;
        height: 100%;
      `}
    >
      <MockedProvider
        addTypename={false}
        mocks={[
          {
            request: {
              query: markerInfoQuery,
              variables: {
                businessId: 'x',
              },
            },
            result: {
              data: {
                business: {
                  id: 'x',
                  name: 'Burger Place',
                  location: {
                    address1: 'Toronto',
                    address2: 'Unit 2',
                  },
                },
              },
            },
          },
          {
            request: {
              query: markerInfoQuery,
              variables: {
                businessId: 'y',
              },
            },
            result: {
              data: {
                business: {
                  id: 'y',
                  name: 'Noodle Place',
                  location: {
                    address1: 'Toronto',
                    address2: 'Unit 1',
                  },
                },
              },
            },
          },
        ]}
      >
        {story()}
      </MockedProvider>
    </div>
  ))
  .add('ResultsMap', () => {
    return (
      <InteractionStateContainer.Provider>
        <ResultsMap businesses={businesses} />
      </InteractionStateContainer.Provider>
    );
  });

storiesOf('SearchPage', module)
  .addDecorator(story => (
    <div
      className={css`
        width: 100%;
        height: 100%;
      `}
    >
      <AutoMockedProvider
        mockResolvers={{
          Business: (root, { id }) => ({
            id: () => id,
            name: () => faker.company.companyName(),
            location: () => ({
              address1: () => faker.address.streetAddress(),
              address2: () => faker.address.secondaryAddress(),
            }),
          }),
        }}
      >
        {story()}
      </AutoMockedProvider>
    </div>
  ))
  .add('ResultsMap (Auto-Mocked)', () => {
    return (
      <InteractionStateContainer.Provider>
        <ResultsMap businesses={businesses} />
      </InteractionStateContainer.Provider>
    );
  });
