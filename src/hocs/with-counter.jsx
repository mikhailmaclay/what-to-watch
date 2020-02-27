// Libraries
import React from 'react';
// Constants and utils
import {bind, capitalizeFirstLetter, getLabeledDisplayName} from '../utils';

function withCounter(Component, counterName, initialValue = 0, isResettableOnUpdate = false) {
  class WithCounter extends React.PureComponent {
    constructor(props) {
      super(props);

      this.counterName = counterName;
      this.initialValue = initialValue;
      this.isResettableOnUpdate = isResettableOnUpdate;

      this.state = {
        [this.counterName]: this.initialValue
      };

      bind(this,
          this.incrementCounter,
          this.decrementCounter,
          this.setCounter
      );
    }

    componentDidUpdate(_, nextState) {
      if (!this.isResettableOnUpdate) {
        return;
      }

      const count = this.state[this.counterName];
      const nextCount = nextState[this.counterName];

      if (count === nextCount) {
        this.setCounter(this.initialValue);
      }
    }

    incrementCounter(value) {
      this.setState((state) => ({[this.counterName]: state[this.counterName] + value}));
    }

    decrementCounter(value) {
      this.setState((state) => ({[this.counterName]: state[this.counterName] - value < 0 ? 0 : state[this.counterName] - value}));
    }

    setCounter(value) {
      this.setState({[this.counterName]: value < 0 ? 0 : value});
    }

    render() {
      const methods = {
        [`increment${capitalizeFirstLetter(this.counterName)}`]: this.incrementCounter,
        [`decrement${capitalizeFirstLetter(this.counterName)}`]: this.incrementCounter,
        [`set${capitalizeFirstLetter(this.counterName)}`]: this.setCounter
      };

      return <Component {...this.props} {...this.state} {...methods}/>;
    }
  }

  WithCounter.displayName = getLabeledDisplayName(`WithCounter`, Component);

  return WithCounter;
}

export default withCounter;
