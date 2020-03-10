// Libraries
import React from 'react';
// PropTypes
import propTypes from './preview-controls.prop-types';
// Styles
import styles from './preview-controls.styles';
// Components
import Icon from '../icon/icon';
import Button from '../button/button';

function PreviewControls({isMuted, onToggleMuteButtonClick}) {
  return (
    <Button style={styles.button} title={isMuted ? `Unmute` : `Mute`} onClick={onToggleMuteButtonClick}>
      <Icon name={isMuted ? `muted` : `not-muted`} width="15" height="15" style={styles.buttonIcon(isMuted)}/>
    </Button>
  );
}

PreviewControls.propTypes = propTypes;

export default React.memo(PreviewControls);
