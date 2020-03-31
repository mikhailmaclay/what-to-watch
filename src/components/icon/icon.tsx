// Libraries
import * as React from 'react';
// Constants and utils
import excludeProps from '../../utils/components/exclude-props';

const PROPS_TO_EXCLUDE = [`name`, `title`];

interface Props {
  name: string;
  width: string | number;
  height: string | number;
  title?: string;
  style?: object;
}

function Icon(props: Props) {
  const {name, width, height, title} = props;

  const propsToParent = excludeProps(props, PROPS_TO_EXCLUDE);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} {...propsToParent}>
      {title && <title>{title}</title>}
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
}

export default React.memo(Icon);
