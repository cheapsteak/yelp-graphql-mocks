import React from 'react';
import _ from 'lodash';
import { storiesOf } from '@storybook/react';
import { css } from 'emotion';
import { MockedProvider } from 'react-apollo/test-utils';

import SearchResults from './SearchResults';
import AutoMockedProvider from './utils/mocks/AutoMockedProvider';

import 'mapbox-gl/dist/mapbox-gl.css';
import resolvers from './utils/mocks/resolvers';

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
        mocks={[require('./SearchResults.mocks').default]}
      >
        {story()}
      </MockedProvider>
    </div>
  ))
  .add('SearchResults', () => {
    return <SearchResults />;
  });

storiesOf('SearchPage (Auto-Mocked)', module)
  .addDecorator(story => (
    <div
      className={css`
        width: 100%;
        height: 100%;
      `}
    >
      <AutoMockedProvider
        mockResolvers={{
          ...resolvers,
          Business: (...args) => ({
            ...resolvers.Business(...args),
            coordinates: () => ({
              latitude: () => 43.64695 + _.random(-0.01, 0.01),
              longitude: () => -79.38215 + _.random(-0.01, 0.01),
            }),
          }),
        }}
      >
        {story()}
      </AutoMockedProvider>
    </div>
  ))
  .add('SearchResults', () => {
    return <SearchResults />;
  });
