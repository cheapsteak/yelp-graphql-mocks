import React from 'react';
import { css } from 'emotion';
import gql from 'graphql-tag';
import { Rating } from 'semantic-ui-react';

import * as GraphQLTypes from '../graphqlTypes';

export const ResultItemBusinessFragment = gql`
  fragment ResultItemBusinessFragment on Business {
    id
    name
    photos
    review_count
    rating
    location {
      address1
      address2
      address3
      city
      state
      postal_code
      country
      formatted_address
    }
    coordinates {
      latitude
      longitude
    }
  }
`;

const ResultItem: React.FunctionComponent<{
  business: GraphQLTypes.ResultItemBusinessFragment;
}> = ({ business }) => {
  return (
    <div>
      <div
        className={css`
          background: #f0f0f0;
          ${business.photos &&
            css`
              background-image: url('${business.photos[0]}');
              background-size: cover;
              background-position: center;
            `}
          height: 200px;
        `}
      />
      <div
        className={css`
          display: flex;
        `}
      >
        {business.name}
        {business.rating && (
          <span
            className={css`
              margin-left: auto;
            `}
          >
            <Rating rating={business.rating} maxRating={5} disabled /> (
            {business.review_count} reviews)
          </span>
        )}
      </div>
    </div>
  );
};

export default ResultItem;
