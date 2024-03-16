import MeditionsDetails from "./Merge Node";
import AcitivityGrowth from "./AcitivityGrowth";
import FrameComponent from "./FrameComponent";
import styles from "./ActivityCrewMember.module.css";

const ActivityCrewMember = () => {
  return (
    <div className={styles.searchTree}>
      <div className={styles.sortingNode}>
        <MeditionsDetails />
        <AcitivityGrowth />
      </div>
      <FrameComponent />
    </div>
  );
};

export default ActivityCrewMember;
