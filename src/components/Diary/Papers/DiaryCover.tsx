import React from 'react';
import styles from './DiaryCover.module.css';
import ThreeDSpace from './ThreeDSpace';

function DiaryCover() {
  return (
    <div className={styles.DiaryCover}>
      <div className={styles.ThreeDSpace}>
        <ThreeDSpace />
      </div>
    </div>
  );
}

export default DiaryCover;
