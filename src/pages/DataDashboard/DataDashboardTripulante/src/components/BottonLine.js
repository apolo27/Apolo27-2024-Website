import ActivityCrewMember from "./ActivityCrewMember";
import styles from "./BottonLine.module.css";
import vector2 from "../../public/vector-2.svg";

const BottonLine = () => {
  return (
    <section className={styles.listHandler}>
      <div className={styles.graphFormer}>
        <div className={styles.mapCreator}>
          <div className={styles.algorithmEngine}>
            <div className={styles.matrixProcessor}>
              <div className={styles.functionGenerator}>
                <div className={styles.variableHolder}>
                  <h1 className={styles.saludDelTripulante}>
                    Salud Del Tripulante
                  </h1>
                  <div className={styles.august122023}>August 12, 2023</div>
                </div>
              </div>
              <div className={styles.loopController}>
                <img className={styles.descendantOnceRemovedNodes} alt="" />
                <img className={styles.descendantOnceRemovedNodes1} alt="" />
              </div>
            </div>
          </div>
          <button className={styles.locationbutton}>
            <img className={styles.filterNodeIcon} alt="" src={vector2} />
          </button>
        </div>
      </div>
      <ActivityCrewMember />
    </section>
  );
};

export default BottonLine;
