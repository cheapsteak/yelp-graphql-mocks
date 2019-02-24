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
    price
    categories {
      title
    }
  }
`;

const ResultItem: React.FunctionComponent<{
  business: GraphQLTypes.ResultItemBusinessFragment;
}> = ({ business }) => {
  return (
    <div
      className={css`
        display: flex;
        &:nth-of-type(even) {
          background-color: #f9f9f9;
        }
      `}
    >
      <div
        className={css`
          width: 110px;
          height: 110px;
          background: #f0f0f0;
          flex-shrink: 0;
          ${business.photos &&
            css`
              background-image: url('${business.photos[0]}');
              background-size: cover;
              background-position: center;
            `}
        `}
      />
      <div
        className={css`
          display: flex;
          flex-direction: column;
          margin: 10px;
        `}
      >
        <h3
          className={css`
            margin-bottom: 0.2em;
          `}
        >
          {business.name}
        </h3>
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
        <div
          className={css`
            margin-top: 0.4em;
            color: #666;
          `}
        >
          {business.price} -{' '}
          {(business.categories || [])
            .map(category => category && category.title)
            .join(', ')}
        </div>
      </div>
    </div>
  );
};

export default ResultItem;
