import React, { useContext, useRef, useEffect } from 'react';
import { css, cx } from 'emotion';
import gql from 'graphql-tag';

import * as GraphQLTypes from '../graphqlTypes';
import Rating from './Rating';
import InteractionStateContainer from '../InteractionStateContainer';
import { useResultItemWrapperStyles } from './ResultItem.styles';

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

function isElementInViewport(element: HTMLElement) {
  var rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const ResultItem: React.FunctionComponent<{
  business: GraphQLTypes.ResultItemBusinessFragment;
}> = ({ business }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const {
    businessIdInFocus,
    focusTriggerSource,
    focusOnBusinessId,
    setSelectedBusinessId,
  } = useContext(InteractionStateContainer.Context);
  useEffect(() => {
    if (
      businessIdInFocus === business.id &&
      focusTriggerSource !== 'list' &&
      ref.current &&
      !isElementInViewport(ref.current)
    ) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [businessIdInFocus, focusTriggerSource]);

  const wrapperStyles = useResultItemWrapperStyles(business);

  return (
    <button
      ref={ref}
      className={cx(wrapperStyles)}
      onMouseEnter={() => focusOnBusinessId(business.id, 'list')}
      onMouseLeave={() => focusOnBusinessId(null, 'list')}
      onFocus={() => focusOnBusinessId(business.id, 'list')}
      onClick={() => setSelectedBusinessId(business.id)}
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
          padding: 10px;
          flex-grow: 1;
        `}
      >
        <h3
          className={css`
            margin-top: 0.2em;
            margin-bottom: 0.2em;
          `}
        >
          {business.name}
        </h3>

        {business.rating && (
          <span
            className={css`
              display: flex;
              align-items: center;
              flex-shrink: 0;
            `}
          >
            <Rating rating={business.rating} />
            <span
              className={css`
                margin-left: 0.5em;
                font-size: 14px;
              `}
            >
              {business.review_count} reviews
            </span>
          </span>
        )}

        <div
          className={css`
            margin-top: 0.2em;
            font-size: 14px;
            color: #666;
          `}
        >
          {business.price} -{' '}
          {(business.categories || [])
            .map(category => category && category.title)
            .join(', ')}
        </div>
      </div>
    </button>
  );
};

export default ResultItem;
