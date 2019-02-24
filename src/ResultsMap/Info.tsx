import React, { useContext } from 'react';
import { Popup } from 'react-map-gl';
import InteractionStateContainer from '../InteractionStateContainer';

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
      {businessId}
    </Popup>
  );
};

export default Info;
