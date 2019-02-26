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
      latitude: 43.642079,
      longitude: -79.3784532,
    },
  },
  {
    __typename: 'Business',
    id: 'z',
    coordinates: {
      __typename: 'Coordinates',
      latitude: 43.64522,
      longitude: -79.38385,
    },
  },
];

storiesOf('SearchPage', module)
  .addDecorator(story => (
    <div
      className={css`
        width: 100%;
        height: 100vh;
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
                    address1: 'Toronto St',
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
                    address1: 'Toronto St',
                    address2: 'Unit 1',
                  },
                },
              },
            },
          },
          {
            request: {
              query: markerInfoQuery,
              variables: {
                businessId: 'z',
              },
            },
            result: {
              data: {
                business: {
                  id: 'z',
                  name: 'Sushi Place',
                  location: {
                    address1: 'Toronto st',
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

storiesOf('SearchPage (Auto-Mocked)', module)
  .addDecorator(story => (
    <div
      className={css`
        width: 100%;
        height: 100vh;
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
  .add('ResultsMap', () => {
    return (
      <InteractionStateContainer.Provider>
        <ResultsMap businesses={businesses} />
      </InteractionStateContainer.Provider>
    );
  });
