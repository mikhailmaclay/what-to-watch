import React from 'react';

import {bind, getLabeledDisplayName} from '../utils';

function withState(Component) {
  class WithState extends React.PureComponent {
    constructor(props) {
      super(props);

      bind(this, this._setState);
    }

    _setState(state) {
      this.setState(state);
    }

    render() {
      return <Component {...this.props} {...this.state} setState={this._setState}/>;
    }
  }

  WithState.displayName = getLabeledDisplayName(`WithState`, Component);

  return WithState;
}

export default withState;

// TODO Уничтожить это зло
