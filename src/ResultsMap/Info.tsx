import React, { useContext } from 'react';
import { Popup } from 'react-map-gl';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import InteractionStateContainer from '../InteractionStateContainer';
import * as GraphQLTypes from '../graphqlTypes';

const markerInfoQuery = gql`
  query MarkerInfoQuery($businessId: String!) {
    business(id: $businessId) {
      id
      name
    }
  }
`;

const Info: React.FunctionComponent<{
  businessId: string;
  latitude: number;
  longitude: number;
}> = ({ businessId, latitude, longitude }) => {
  const { setSelectedBusinessId } = useContext(
    InteractionStateContainer.Context
  );

  return (
    <Popup
      tipSize={5}
      anchor="bottom"
      longitude={longitude}
      latitude={latitude}
      closeOnClick={false}
      onClose={() => setSelectedBusinessId(null)}
    >
      <Query<GraphQLTypes.MarkerInfoQuery>
        query={markerInfoQuery}
        variables={{
          businessId,
        }}
      >
        {({ data, loading }) => {
          if (loading) return '...';
          return data && data.business && data.business.name;
        }}
      </Query>
    </Popup>
  );
};

export default Info;
