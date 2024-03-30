import ActivityCrewMember from "./ActivityCrewMember";
import styles from "./BottonLine.module.css";
import vector2 from "../../public/vector-2.svg";
import React, { useState, useEffect } from 'react';

const BottonLine = () => {

  // Estado local para almacenar la fecha actual
  const [currentDate, setCurrentDate] = useState(new Date());
  

  useEffect(() => {
    // Función que se ejecuta cada segundo para actualizar la fecha
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Limpiar el temporizador
    return () => {
      clearInterval(timer);
    };
  }, []);

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
                  <div className={styles.august122023}>{currentDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
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
