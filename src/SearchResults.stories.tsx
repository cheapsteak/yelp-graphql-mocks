import React from 'react';
import { storiesOf } from '@storybook/react';
import { css } from 'emotion';
import { MockedProvider } from 'react-apollo/test-utils';
import faker from 'faker';

import SearchResults from './SearchResults';
import * as GraphQLTypes from './graphqlTypes';
import { markerInfoQuery } from './ResultsMap/Info';
import AutoMockedProvider from './utils/mocks/AutoMockedProvider';

import 'mapbox-gl/dist/mapbox-gl.css';

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
