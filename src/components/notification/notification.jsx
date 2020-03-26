// Libraries
import React from 'react';
// PropTypes
import propTypes from './notification.prop-types';
// Styles
import styles from './notification.styles';

function Notification({title, content}) {
  return (
    <div style={styles.container(title)}>
      <header><b>{title}</b></header>
      <div>{content}</div>
    </div>
  );
}

Notification.propTypes = propTypes;

export default Notification;
