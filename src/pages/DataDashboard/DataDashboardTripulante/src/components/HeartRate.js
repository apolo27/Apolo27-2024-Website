import styles from "./HeartRate.module.css";

const HeartRate = () => {
  return (
    <div className={styles.heartRate}>
      <div className={styles.heartRateChild} />
      <div className={styles.frameParent}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.heartRateWrapper}>
          <h2 className={styles.heartRate1}>Heart Rate</h2>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.parent}>
          <div className={styles.div}>98</div>
          <div className={styles.bpmWrapper}>
            <h2 className={styles.bpm}>bpm</h2>
          </div>
        </div>
        <button className={styles.normalWrapper}>
          <div className={styles.normal}>Normal</div>
        </button>
        <div className={styles.wrapperGroup29}>
          <img
            className={styles.wrapperGroup29Child}
            loading="lazy"
            alt=""
            src="/group-29.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeartRate;
