// Libraries
import * as React from 'react';
// Constants and utils
import excludeProps from '../../utils/components/exclude-props';

const PROPS_TO_EXCLUDE = [`src`, `alt`];

interface Props {
  src: string;
  alt: string;
  className?: string;
}

function MoviePoster(props: Props) {
  const {src, alt} = props;
  const propsToParent = excludeProps(props, PROPS_TO_EXCLUDE);

  return (
    <div {...propsToParent}>
      <img src={src} alt={alt} width="218" height="327"/>
    </div>
  );
}

export default React.memo(MoviePoster);
