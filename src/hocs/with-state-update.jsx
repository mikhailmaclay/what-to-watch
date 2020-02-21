import React from 'react';

import {bind, getLabeledDisplayName} from '../utils';

function withStateUpdate(Component) {
  class WithStateUpdate extends React.PureComponent {
    constructor(props) {
      super(props);

      bind(this, this.updateState);
    }

    updateState(state) {
      this.setState(state);
    }

    render() {
      return <Component {...this.props} {...this.state} updateState={this.updateState}/>;
    }
  }

  WithStateUpdate.displayName = getLabeledDisplayName(`WithStateUpdate`, Component);

  return WithStateUpdate;
}

export default withStateUpdate;
