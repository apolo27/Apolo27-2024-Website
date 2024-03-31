import ActivityCrewMember from "./ActivityCrewMember";
import styles from "./BottonLine.module.css";
import vector2 from "../../public/vector-2.svg";
import React, { useState, useEffect } from 'react';
import { CContainer, CRow, CCol, CWidgetStatsF, CWidgetStatsA,
  CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle
  } from '@coreui/react'

const BottonLine = ({ data }) => {

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
    <CContainer style={{maxWidth:'auto'}}>
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
            </div>
          </div>
        </div>
      </div>
      
      <ActivityCrewMember />
    </CContainer>
  );
};

export default BottonLine;
