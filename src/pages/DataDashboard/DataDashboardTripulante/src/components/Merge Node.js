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
