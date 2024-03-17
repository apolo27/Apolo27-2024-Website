import BloodSugar from "./BloodSugar";
import BloodPressure from "./BloodPressure";
import HeartRate from "./HeartRate";
import styles from "./MeditionsDetails.module.css";
import vector3 from "../../public/vector-3.svg";
import group from "../../public/group.svg";
import group1 from "../../public/group-1.svg";

const MeditionsDetails = () => {
  return (
    <div className={styles.mergeNode}>
      <div className={styles.splitNode}>
        <BloodSugar />
        <img
          className={styles.auntTwiceRemovedNodes}
          alt=""
          src={vector3}
        />
      </div>
      <div className={styles.matrixRow}>
        <div className={styles.functionArgument}>
          <div className={styles.functionReturn}>
            <div className={styles.siblingFiveTimesRemovedNod} />
            <div className={styles.siblingFiveTimesRemovedNod1} />
            <div className={styles.siblingFiveTimesRemovedNod2} />
            <div className={styles.siblingFiveTimesRemovedNod3} />
            <div className={styles.siblingFiveTimesRemovedNod4} />
          </div>
        </div>
        <div className={styles.expressionTree}>
          <BloodPressure />
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src={group}
          />
        </div>
      </div>
      <div className={styles.splitNode1}>
        <HeartRate />
        <img className={styles.groupIcon1} alt="" src={group1} />
      </div>
    </div>
  );
};

export default MeditionsDetails;
