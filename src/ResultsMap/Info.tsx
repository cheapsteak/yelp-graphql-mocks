import React, { useContext } from 'react';
import { Popup } from 'react-map-gl';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import InteractionStateContainer from '../InteractionStateContainer';
import * as GraphQLTypes from '../graphqlTypes';
import { css } from 'emotion';

const markerInfoQuery = gql`
  query MarkerInfoQuery($businessId: String!) {
    business(id: $businessId) {
      id
      name
      location {
        address1
        address2
      }
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
      className={css`
        z-index: 10;
      `}
    >
      <Query<GraphQLTypes.MarkerInfoQuery>
        query={markerInfoQuery}
        variables={{
          businessId,
        }}
      >
        {({ data, loading, error }) => {
          if (error) throw error;
          if (loading) return '...';
          if (!data) return 'no data';
          if (!data.business) return 'no business';

          return (
            <div>
              <h4
                className={css`
                  margin: 0 0 0.2em;
                `}
              >
                {data.business.name}
              </h4>
              <address>
                {data.business.location && data.business.location.address1}
                {data.business.location &&
                  data.business.location.address2 &&
                  ', ' + data.business.location.address2}
              </address>
            </div>
          );
        }}
      </Query>
    </Popup>
  );
};

export default Info;
