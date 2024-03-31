import React, { useState, useEffect } from 'react';
import MeditionsDetails from "./Merge Node";
import AcitivityGrowth from "./AcitivityGrowth";
import FrameComponent from "./FrameComponent";
import styles from "./ActivityCrewMember.module.css";
import { CContainer, CRow, CCol, CWidgetStatsF, CWidgetStatsA,
  CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle
  } from '@coreui/react'
import { fetchBloodPressureData, fetchSpO2Data, fetchHeartRateData } from './healthDataServices';


  

  

  
const AcitivityCrewMember = () => {
  const [selectedUser, setSelectedUser] = useState('Miguel');
  const [bloodPressureData, setBloodPressureData] = useState({});
  const [spO2Data, setSpO2Data] = useState([]);
  const [heartRateData, setHeartRateData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const bloodPressure = await fetchBloodPressureData(selectedUser);
        const spO2 = await fetchSpO2Data(selectedUser);
        const heartRate = await fetchHeartRateData(selectedUser);
        setBloodPressureData(bloodPressure);
        setSpO2Data(spO2);
        setHeartRateData(heartRate);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadUserData();
  }, [selectedUser]);

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
    {error && <p>Error: {error}</p>}
    {!isLoading && !error && (
      <div className={styles.sortingNode}>
        <MeditionsDetails bloodPressure={bloodPressureData} spO2={spO2Data} heartRate={heartRateData} />
        <AcitivityGrowth />
        <FrameComponent onUserChange={setSelectedUser} />
      </div>
    )}
  </div>
  );
};

export default AcitivityCrewMember;
