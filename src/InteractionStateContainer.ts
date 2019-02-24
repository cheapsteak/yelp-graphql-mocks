import { useState } from 'react';
import createContainer from 'constate';

const useInteractionState = () => {
  const [businessIdInFocus, setBusinessIdInFocus] = useState<string | null>(
    null
  );
  return {
    businessIdInFocus,
    setBusinessIdInFocus,
  };
};

const InteractionStateContainer = createContainer(useInteractionState);

export default InteractionStateContainer;
