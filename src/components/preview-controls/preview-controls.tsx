// Libraries
import * as React from 'react';
// Styles
import styles from './preview-controls.styles';
// Components
import Icon from '../icon/icon';
import Button from '../button/button';
//

interface Props {
  isMuted: boolean;
  onToggleMuteButtonClick: () => void;
}

function PreviewControls(props: Props) {
  const {isMuted, onToggleMuteButtonClick} = props;

  return (
    <Button style={styles.button} title={isMuted ? `Unmute` : `Mute`} onClick={onToggleMuteButtonClick}>
      <Icon name={isMuted ? `muted` : `not-muted`} width="15" height="15" style={styles.buttonIcon(isMuted)}/>
    </Button>
  );
}

export default React.memo(PreviewControls);
