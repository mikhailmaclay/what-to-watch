// Libraries
import React from 'react';
// Constants and utils
import {bind, getLabeledDisplayName} from '../utils';

function withCounter(Component, initialValue = 0) {
  class WithCounter extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        count: initialValue
      };

      bind(this,
          this.incrementCounter,
          this.decrementCounter,
          this.setCounter
      );
    }

    incrementCounter(value) {
      this.setState(({count}) => ({count: count + value}));
    }

    decrementCounter(value) {
      this.setState(({count}) => ({count: count - value < 0 ? 0 : count - value}));
    }

    setCounter(value) {
      this.setState({count: value < 0 ? 0 : value});
    }

    componentDidUpdate(_, {count: nextCount}) {
      const {count} = this.state;

      if (count === nextCount) {
        this.setCounter(initialValue);
      }
    }

    render() {
      return <Component {...this.props} {...this.state} incrementCounter={this.incrementCounter} decrementCounter={this.decrementCounter} setCounter={this.setCounter}/>;
    }
  }

  WithCounter.displayName = getLabeledDisplayName(`WithCounter`, Component);

  return WithCounter;
}

export default withCounter;
