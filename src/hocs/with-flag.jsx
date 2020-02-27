// Libraries
import React from 'react';
// Constants and utils
import {bind, capitalizeFirstLetter, getLabeledDisplayName} from '../utils';

function withFlag(Component, flagName, initialValue = false) {
  class WithFlag extends React.PureComponent {
    constructor(props) {
      super(props);

      this.flagName = flagName;
      this.initialValue = initialValue;

      this.state = {
        [this.flagName]: this.initialValue
      };

      bind(this,
          this.setFlag,
          this.setFlagToTrue,
          this.setFlagToFalse,
          this.toggleFlag
      );
    }

    setFlag(value) {
      this.setState({[this.flagName]: Boolean(value)});
    }

    setFlagToTrue() {
      this.setState({[this.flagName]: true});
    }

    setFlagToFalse() {
      this.setState({[this.flagName]: false});
    }

    toggleFlag() {
      this.setState((state) => ({[this.flagName]: !state[this.flagName]}));
    }

    render() {
      const methods = {
        [`set${capitalizeFirstLetter(this.flagName)}`]: this.setFlag,
        [`set${capitalizeFirstLetter(this.flagName)}ToTrue`]: this.setFlagToTrue,
        [`set${capitalizeFirstLetter(this.flagName)}ToFalse`]: this.setFlagToFalse,
        [`toggle${capitalizeFirstLetter(this.flagName)}`]: this.toggleFlag,
      };

      return <Component {...this.state} {...this.props} {...methods}/>;
    }
  }

  WithFlag.displayName = getLabeledDisplayName(`WithFlag`, Component);

  return WithFlag;
}

export default withFlag;
