import React, { useState } from 'react';
import BloodSugar from "./BloodSugar";
import BloodPressure from "./BloodPressure";
import HeartRate from "./HeartRate";
import styled from "styled-components";

// Datos de paginación inicial
const chartGroups = [
  [<BloodSugar />, <BloodPressure />, <HeartRate />],
  [<BloodSugar />, <BloodPressure />, <HeartRate />],
];

const MeditionsDetails = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <HealthMonitorWrapper>
      {/* Botones de paginación */}
      <PaginationContainer>
        {chartGroups.map((_, index) => (
          <PaginationItem
            key={index}
            isActive={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </PaginationContainer>

      {/* Contenedor de tarjetas */}
      <HealthDataGrid>
        {chartGroups[activeIndex].map((Component, index) => (
          <HealthDataColumn key={index}>
            {Component}
          </HealthDataColumn>
        ))}
      </HealthDataGrid>
    </HealthMonitorWrapper>
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
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const HealthDataColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  @media (max-width: 991px) {
    width: 100%;
    margin-top: 40px;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const PaginationItem = styled.div`
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? "#9ea1ac" : "#2a2c38")};
  box-shadow: 0px 4px 6.7px 0px rgba(0, 0, 0, 0.42) inset;
  cursor: pointer;
`;

export default MeditionsDetails;
