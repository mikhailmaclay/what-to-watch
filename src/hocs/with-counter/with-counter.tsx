// Libraries
import * as React from 'react';
// Constants and utils
import bind from '../../utils/components/bind';
import capitalizeFirstLetter from '../../utils/strings/capitalize-first-letter';
import extend from '../../utils/objects/extend';

function withCounter(Component, {counterName, initialValue, isResettableOnUpdate}) {
  interface Props {
    withCounter?: object;
  }

  interface State {
    // Отменил проверку следующей линии, так как имя состояния динамическое, что не понравилось и компилятору TS и Eslint
    // eslint-disable-next-line
    // @ts-ignore
    [counterName]: number;
  }

  class WithCounter extends React.PureComponent<Props, State> {
    private readonly counterName: string;
    private readonly initialValue: number;
    private readonly isResettableOnUpdate: boolean;

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
      const {withCounter: withCounterProp} = this.props;

      const temp = {
        [this.counterName]: {
          value: this.state[this.counterName],
          increment: this.incrementCounter,
          decrement: this.decrementCounter,
          set: this.setCounter
        }
      };

      return <Component {...this.props} withCounter={extend(withCounterProp, temp)} {...{[`isWith${capitalizeFirstLetter(this.counterName)}Counter`]: true}}/>;
    }
  }

  return WithCounter;
}

export default withCounter;
