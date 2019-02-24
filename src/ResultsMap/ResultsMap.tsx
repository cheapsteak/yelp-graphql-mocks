import React, { useRef } from 'react';
import _ from 'lodash';
import ReactMapGL, { Marker } from 'react-map-gl';
import gql from 'graphql-tag';
import WebMercatorViewport from 'viewport-mercator-project';
import useComponentSize from '@rehooks/component-size';

import * as GraphQLTypes from '../graphqlTypes';
import Pin from './Pin';
import { css } from 'emotion';

export const ResultsMapBusinessFragment = gql`
  fragment ResultsMapBusinessFragment on Business {
    id
    coordinates {
      latitude
      longitude
    }
  }
`;

const ResultsMap: React.FunctionComponent<{
  businesses: GraphQLTypes.ResultsMapBusinessFragment[];
  className?: string;
}> = ({ businesses, className }) => {
  let ref = useRef(null);
  let size = useComponentSize(ref);
  const hasSize = size.width !== 0;

  const viewport = new WebMercatorViewport({
    width: size.width,
    height: size.height,
  });

  const fittedViewport = viewport.fitBounds(
    [
      [
        _.min(
          businesses.map(business => business.coordinates!.longitude)
        ) as number,
        _.min(
          businesses.map(business => business.coordinates!.latitude)
        ) as number,
      ],
      [
        _.max(
          businesses.map(business => business.coordinates!.longitude)
        ) as number,
        _.max(
          businesses.map(business => business.coordinates!.latitude)
        ) as number,
      ],
    ],
    hasSize
      ? {
          padding: 20,
          offset: [0, -100],
        }
      : {}
  );

  return (
    <div
      ref={ref}
      className={css`
        width: 100%;
        height: 100%;
      `}
    >
      {hasSize && (
        <ReactMapGL
          className={className}
          width="100%"
          height="100%"
          viewState={fittedViewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_TOKEN}
          mapStyle="mapbox://styles/garnwraly/cjsidduzq1bc11flev56ws8gp"
        >
          {businesses.map(business => (
            <Marker
              key={business.id as string}
              latitude={business.coordinates!.latitude as number}
              longitude={business.coordinates!.longitude as number}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <Pin size={20} />
            </Marker>
          ))}
        </ReactMapGL>
      )}
    </div>
  );
};

export default ResultsMap;
