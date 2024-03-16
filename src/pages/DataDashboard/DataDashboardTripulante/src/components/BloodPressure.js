import styles from "./BloodPressure.module.css";

const BloodPressure = () => {
  return (
    <div className={styles.bloodPressure}>
      <div className={styles.variableDeclaration} />
      <div className={styles.statement}>
        <div className={styles.syntaxTreeWrapper}>
          <div className={styles.syntaxTree} />
        </div>
        <div className={styles.parser}>
          <h2 className={styles.bloodPressure1}>Blood Pressure</h2>
        </div>
      </div>
      <div className={styles.inputFilter}>
        <div className={styles.outputCollector}>
          <div className={styles.conditionNode}>
            <div className={styles.loopNode}>102</div>
          </div>
          <div className={styles.functionNode}>
            <b className={styles.connectNode}>/ 72</b>
          </div>
          <div className={styles.splitNode}>
            <b className={styles.mwcm2}>mW/cm2</b>
          </div>
        </div>
        <button className={styles.constantNode}>
          <div className={styles.normal}>Normal</div>
        </button>
      </div>
      <img
        className={styles.bloodPressureChild}
        loading="lazy"
        alt=""
        src="/group-30.svg"
      />
    </div>
  );
};

export default BloodPressure;
