import React from 'react';
import { css, cx } from 'emotion';

const getActiveBgColorByRating = (rating: number) => {
  if (rating === 5) {
    return '#C2372F';
  } else if (rating >= 4) {
    return '#E06657';
  } else if (rating >= 3) {
    return '#F09854';
  } else if (rating >= 2) {
    return '#F4C345';
  }
  return '#EABF83';
};

const Rating: React.FunctionComponent<{ rating: number }> = ({ rating }) => {
  return (
    <>
      {[1, 2, 3, 4, 5].map(i => {
        const isActive = rating > i - 1;
        const isHalfStar = rating === i - 0.5;
        return (
          <span
            key={i}
            className={cx(
              isHalfStar &&
                css`
                  &:before {
                    content: '';
                    display: block;
                    background-color: #cccccc;
                    width: 50%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    right: 0;
                  }
                `,
              css`
                font-size: 12px;
                position: relative;
                color: #ffffff;
                padding: 1px 5px 2px;
                margin: 1px;
                border-radius: 3px;
                overflow: hidden;
                background-color: ${isActive
                  ? getActiveBgColorByRating(rating)
                  : '#CCCCCC'};
              `
            )}
          >
            <span
              className={css`
                position: relative;
              `}
            >
              ★
            </span>
          </span>
        );
      })}
    </>
  );
};

export default Rating;
