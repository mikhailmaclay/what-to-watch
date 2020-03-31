// Libraries
import * as React from 'react';
// Constants and utils
import bind from '../../utils/components/bind';
import capitalizeFirstLetter from '../../utils/strings/capitalize-first-letter';
import extend from '../../utils/objects/extend';

function withFlag(Component, flagName, initialValue = false) {
  interface Props {
    withFlag?: object;
  }

  interface State {
    // Отменил проверку следующей линии, так как имя состояния динамическое, что не понравилось и компилятору TS и Eslint
    // eslint-disable-next-line
    // @ts-ignore
    [flagName]: boolean;
  }

  class WithFlag extends React.PureComponent<Props, State> {
    private readonly flagName: string;
    private initialValue: boolean;

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
      const {withFlag: withFlagProp} = this.props;

      const temp = {
        [this.flagName]: {
          value: this.state[this.flagName],
          set: this.setFlag,
          toggle: this.toggleFlag
        }
      };

      return <Component {...this.props} withFlag={extend(withFlagProp, temp)} {...{[`isWith${capitalizeFirstLetter(this.flagName)}Flag`]: true}}/>;
    }
  }

  return WithFlag;
}

export default withFlag;
