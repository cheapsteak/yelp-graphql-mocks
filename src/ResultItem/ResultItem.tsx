import React from 'react';
import { css } from 'emotion';
import gql from 'graphql-tag';

import * as GraphQLTypes from '../graphqlTypes';
import Rating from './Rating';

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
          flex-direction: column;
        `}
      >
        <div>{business.name}</div>
        <div>
          {business.rating && (
            <span
              className={css`
                display: flex;
                align-items: center;
              `}
            >
              <Rating rating={business.rating} />
              <span
                className={css`
                  margin-left: 0.5em;
                `}
              >
                {business.review_count} reviews
              </span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultItem;
