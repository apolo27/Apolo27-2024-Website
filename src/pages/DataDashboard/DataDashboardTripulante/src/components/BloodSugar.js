import styles from "./BloodSugar.module.css";

const BloodSugar = () => {
  return (
    <div className={styles.bloodSugar}>
      <div className={styles.queueManager} />
      <div className={styles.stackManager}>
        <div className={styles.heapNodeWrapper}>
          <div className={styles.heapNode} />
        </div>
        <div className={styles.cousinTwiceRemovedNodes}>
          <div className={styles.spo2}>SpO2</div>
        </div>
      </div>
      <div className={styles.descendantThriceRemovedNode}>
        <div className={styles.siblingThriceRemovedNodes}>
          <div className={styles.uncleThriceRemoved}>80</div>
          <div className={styles.auntThriceRemovedNodes}>
            <h2 className={styles.cousinThriceRemoved}>%</h2>
          </div>
        </div>
        <button className={styles.descendantFourTimesRemoved}>
          <div className={styles.normal}>Normal</div>
        </button>
      </div>
      <div className={styles.wrapperGroup11}>
        <img
          className={styles.wrapperGroup11Child}
          loading="lazy"
          alt=""
          src="/group-11.svg"
        />
      </div>
    </div>
  );
};

export default BloodSugar;
