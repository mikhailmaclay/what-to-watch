// Libraries
import React from 'react';
// Constants and utils
import {bind, capitalizeFirstLetter, getLabeledDisplayName, reduceToPercents} from '../utils';

function withPercentageCounter(Component, counterName, initialValue = 0) {
  class WithPercentageCounter extends React.PureComponent {
    constructor(props) {
      super(props);

      this.counterName = counterName;
      this.initialValue = reduceToPercents(initialValue);

      this.state = {
        [this.counterName]: this.initialValue
      };

      bind(this,
          this.incrementCounter,
          this.decrementCounter,
          this.setCounter
      );
    }

    incrementCounter(value) {
      this.setState((state) => ({[this.counterName]: reduceToPercents(state[this.counterName] + value)}));
    }

    decrementCounter(value) {
      this.setState((state) => ({[this.counterName]: reduceToPercents(state[this.counterName] - value)}));
    }

    setCounter(value) {
      this.setState({[this.counterName]: reduceToPercents(value)});
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

  WithPercentageCounter.displayName = getLabeledDisplayName(`WithPercentageCounter`, Component);

  return WithPercentageCounter;
}

export default withPercentageCounter;
