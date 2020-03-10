// Libraries
import React from 'react';

function Button(props) {
  return (
    <button {...props} type="button"/>
  );
}

export default React.memo(Button);
