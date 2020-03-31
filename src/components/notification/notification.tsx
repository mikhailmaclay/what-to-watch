// Libraries
import * as React from 'react';
// Styles
import styles from './notification.styles';

interface Props {
  title: string;
  content: string;
}

function Notification(props: Props) {
  const {title, content} = props;

  return (
    <div style={styles.container(title)}>
      <header><b>{title}</b></header>
      <div>{content}</div>
    </div>
  );
}

export default Notification;
