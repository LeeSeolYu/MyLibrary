import React from "react";
import styles from "./Rings.module.css";

function Rings() {
  return (
    <div className={styles.Rings}>
      <div className={`${styles.Hole} ${styles.Hole1}`}>
        <div className={styles.Ring}></div>
      </div>
      <div className={`${styles.Hole} ${styles.Hole2}`}>
        <div className={styles.Ring}></div>
      </div>
      <div className={`${styles.Hole} ${styles.Hole3}`}>
        <div className={styles.Ring}></div>
      </div>
      <div className={`${styles.Hole} ${styles.Hole4}`}>
        <div className={styles.Ring}></div>
      </div>
    </div>
  );
}

export default Rings;
