import React, { useState } from 'react';
import BloodSugar from "./BloodSugar";
import BloodPressure from "./BloodPressure";
import HeartRate from "./HeartRate";
import styled from "styled-components";
import { CContainer, CRow, CCol, CWidgetStatsF, CWidgetStatsA,
  CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle
  } from '@coreui/react'

const MeditionsDetails = ({ bloodSugarData, bloodPressureData, heartRateData }) => {

  return (
    <CContainer style={{
      backgroundColor:'#1C1F32',
      padding: '24px 22px 2px',
      borderRadius: '48px',
      alignItems: 'center',
    }}>
      <CRow>
        <CCol xl={4}>
          <div className='mb-4'>
            {/* Pasar los datos relevantes a cada componente */}
            <BloodSugar data={bloodSugarData}/>
          </div>
        </CCol>
        <CCol xl={4}>
          <div className='mb-4'>
          <BloodPressure bloodPressureData={bloodPressureData}/>
          </div>
        </CCol>
        <CCol xl={4}>
          <div className='mb-4'>
            <HeartRate data={heartRateData}/>
          </div>
        </CCol>
      </CRow>
    </CContainer>
    // <HealthMonitorWrapper>
    //   <CContainer>
    //     <CRow>
    //       <CCol>
    //         <BloodSugar/>
    //       </CCol>
    //       <CCol>
    //         <BloodPressure/>
    //       </CCol>
    //       <CCol>
    //         <HeartRate/>
    //       </CCol>
    //     </CRow>
    //   </CContainer>
    // </HealthMonitorWrapper>
  );
};

// Estilos
const HealthMonitorWrapper = styled.section`
  border-radius: 48px;
  background-color: rgba(166, 166, 166, 0.21);
  max-width: 813px;
  padding: 24px 22px;
  @media (max-width: 991px) {
    padding: 20px;
  }
`;

const HealthDataGrid = styled.div`
  display: flex;
  flex-wrap: wrap; // Permitir que los elementos se envuelvan en la siguiente línea si no hay espacio suficiente
  gap: 20px;
  justify-content: center; // Centrar los elementos horizontalmente
`;

const HealthDataColumn = styled.div`
  flex: 1; // Permitir que los elementos se expandan y se contraigan según sea necesario
  min-width: 250px; // Definir un ancho mínimo para cada tarjeta
  max-width: calc(33.333% - 20px); // Definir un ancho máximo para cada tarjeta (33.333% - gap)
  margin-top: 20px; // Espacio entre tarjetas cuando se envuelvan
  
  @media (max-width: 991px) {
    max-width: 100%; // Permitir que cada tarjeta ocupe el 100% del ancho del contenedor en pantallas pequeñas
  }
`;


export default MeditionsDetails;
