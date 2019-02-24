import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import gql from 'graphql-tag';

import Pin from './Pin';

export const ResultsMapFragment = gql`
  fragment ResultsMapFragment on Business {
    id
    coordinates {
      latitude
      longitude
    }
  }
`;

const ResultsMap = ({ businesses, className }: any) => {
  return (
    <ReactMapGL
      className={className}
      width="100%"
      height="100%"
      latitude={37.7577}
      longitude={-122.4376}
      zoom={8}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_TOKEN}
    >
      <Marker
        latitude={37.78}
        longitude={-122.41}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <Pin size={20} />
      </Marker>
    </ReactMapGL>
  );
};

export default ResultsMap;
