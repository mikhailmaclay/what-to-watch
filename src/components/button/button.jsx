// Libraries
import React from 'react';
// Constants and utils
import {getLabeledDisplayName} from '../../utils';

function Button(props) {
  return (
    <button {...props} type="button"/>
  );
}

Button.displayName = getLabeledDisplayName(`Proxy`, Button);

export default React.memo(Button);
