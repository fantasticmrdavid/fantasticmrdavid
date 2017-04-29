import React, { PropTypes } from 'react';
import styles from './styles.css';

const Cube = (props) => {
  const { loading } = props;
  return (
    <div className={`${styles.Cube_container} ${!!loading && styles.loading}`}>
      <div className={styles.Cube}>
        <div className={styles.front} />
        <div className={styles.back} />
        <div className={styles.top} />
        <div className={styles.bottom} />
        <div className={styles.left} />
        <div className={styles.right} />
      </div>
    </div>
  );
};

Cube.propTypes = {
  loading: PropTypes.bool,
};

export default Cube;
