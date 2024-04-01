import React, { useState, useEffect } from 'react';
import MeditionsDetails from "./Merge Node";
import AcitivityGrowth from "./AcitivityGrowth";
import FrameComponent from "./FrameComponent";
import styles from "./ActivityCrewMember.module.css";
import { CContainer, CRow, CCol, CWidgetStatsF, CWidgetStatsA,
  CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle
  } from '@coreui/react'
import { fetchBloodPressureData, fetchSpO2Data, fetchHeartRateData } from './healthDataServices';
import { useUserSelection } from './UserSelectionContext'; // Asegúrate de actualizar la ruta


  

  

  
const AcitivityCrewMember = () => {
  const { selectedUserName, changeSelectedUser } = useUserSelection();
  const [bloodPressureData, setBloodPressureData] = useState({});
  const [spO2Data, setSpO2Data] = useState([]);
  const [heartRateData, setHeartRateData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadUserData() {
      try {
        const bloodPressure = await fetchBloodPressureData(selectedUserName);
        const spO2 = await fetchSpO2Data(selectedUserName);
        const heartRate = await fetchHeartRateData(selectedUserName);
  



        setBloodPressureData(bloodPressure || { currentSystolic: 'N/A', currentDiastolic: 'N/A', status: 'No reconocido' });
        setSpO2Data(spO2.length > 0 ? spO2 : ['N/A']);
        setHeartRateData(heartRate.length > 0 ? heartRate : ['N/A']);
      } catch (err) {
        setError(`Error: ${err.toString()}`);
      } finally {
        setIsLoading(false);
      }
    }
  
    if (selectedUserName) {
      setIsLoading(true);
      loadUserData();
    }
  }, [selectedUserName]);
  

  return (
    // <CContainer style={{}}>
    //   <CRow>
    //     <CCol xl={8}>
    //       <CRow>
    //       <MeditionsDetails />
    //       </CRow>
    //       <CRow>
    //       <AcitivityGrowth />
    //       </CRow>
    //     </CCol>
    //     <CCol xl={4}>
    //       <FrameComponent />
    //     </CCol>
    //   </CRow>
    // </CContainer>
    <div className={styles.searchTree}>
      {isLoading && <p>Cargando datos...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && (
        <div className={styles.sortingNode}>
          <MeditionsDetails bloodPressure={bloodPressureData} spO2={spO2Data} heartRate={heartRateData} />
          <AcitivityGrowth bloodPressure={bloodPressureData} spO2={spO2Data} heartRate={heartRateData}/>
          <FrameComponent onUserChange={changeSelectedUser} />
        </div>
      )}
    </div>
  );
};

export default AcitivityCrewMember;
