import { useState } from 'react';
import createContainer from 'constate';

const useInteractionState = () => {
  const [businessIdInFocus, setBusinessIdInFocus] = useState<string | null>(
    null
  );
  const [focusTriggerSource, setFocusTriggerSource] = useState<
    'list' | 'map' | null
  >(null);

  return {
    businessIdInFocus,
    focusTriggerSource,
    focusOnBusinessId: (
      businessId: string | null,
      triggerSource: 'list' | 'map'
    ) => {
      setBusinessIdInFocus(businessId);
      setFocusTriggerSource(triggerSource);
    },
  };
};

const InteractionStateContainer = createContainer(useInteractionState);

export default InteractionStateContainer;
