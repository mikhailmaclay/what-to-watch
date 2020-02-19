import React from 'react';

import {bind, getLabeledDisplayName} from '../utils';

function withStateUpdateOnHover(Component) {
  class WithStateUpdateOnHover extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        data: null
      };

      bind(this, this.handleMouseOver);
    }

    handleMouseOver(data) {
      this.setState({data});
    }

    render() {
      return <Component {...this.props} onMouseOver={this.handleMouseOver}/>;
    }
  }

  WithStateUpdateOnHover.displayName = getLabeledDisplayName(`HOC`, WithStateUpdateOnHover);

  return WithStateUpdateOnHover;
}

export default withStateUpdateOnHover;
