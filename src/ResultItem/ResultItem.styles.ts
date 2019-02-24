import { cx, css } from 'emotion';
import { useContext } from 'react';

import * as GraphQLTypes from '../graphqlTypes';
import InteractionStateContainer from '../InteractionStateContainer';

const buttonOverrideStyles = css`
  text-align: left;
  appearance: initial;
  border: 0;
  padding: 0;
  display: block;
`;

export const useResultItemWrapperStyles = (
  business: GraphQLTypes.ResultItemBusinessFragment
) => {
  const {
    businessIdInFocus,
    focusTriggerSource,
    selectedBusinessId,
  } = useContext(InteractionStateContainer.Context);

  return cx(
    buttonOverrideStyles,
    css`
      display: flex;
      align-items: stretch;
      height: 110px;
      overflow-y: hidden;
      &:nth-of-type(even) > * {
        background-color: #f9f9f9;
      }
      &:nth-of-type(odd) > * {
        background-color: #ffffff;
      }
      &:hover,
      &:focus > * {
        background-color: #fffff0;
      }

      transition: 0.1s filter;
      filter: grayscale(0);
    `,
    businessIdInFocus === business.id &&
      focusTriggerSource === 'map' &&
      css`
        position: relative;
        z-index: 2;
        box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.2);
      `,
    businessIdInFocus &&
      businessIdInFocus !== business.id &&
      focusTriggerSource === 'map' &&
      css`
        filter: grayscale(1);
      `,
    css`
      & > * {
        transition: 0.1s transform;
        transform: translateX(0);
      }
      & > *:first-of-type {
        box-shadow: -3px 0 14px 4px rgba(0, 0, 0, 0.3);
      }
      &:after {
        content: '';
        display: block;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #900;
      }
      ${selectedBusinessId === business.id &&
        css`
          color: #900;
          & > * {
            transform: translateX(10px);
          }
        `}
    `
  );
};
