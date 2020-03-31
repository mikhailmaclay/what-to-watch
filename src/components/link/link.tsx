// Libraries
import * as React from 'react';
// Constants and utils
import excludeProps from '../../utils/components/exclude-props';
import isCurrentURL from '../../utils/url/is-current-url';
//
import history from '../../history';

const PROPS_TO_EXCLUDE = [`to`];

interface Props {
  to: string;
  className?: string;
  style?: object;
  children: React.ReactNode;
}

function Link(props: Props) {
  const {to} = props;
  const isCurrent = isCurrentURL(to);

  const propsToParent = excludeProps(props, PROPS_TO_EXCLUDE);

  const handleClick = (evt) => {
    evt.preventDefault();

    history.push(to);
  };

  return <a {...propsToParent} href={isCurrent ? null : to} onClick={isCurrent ? null : handleClick}/>;
}

export default React.memo(Link);
