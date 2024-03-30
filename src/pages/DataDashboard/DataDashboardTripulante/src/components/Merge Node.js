import React, { useState, useEffect } from 'react';
import BloodSugar from "./BloodSugar";
import BloodPressure from "./BloodPressure";
import HeartRate from "./HeartRate";
import styled from "styled-components";

// Datos de paginación inicial

const minChartWidth = 250; // Ajusta esto al tamaño mínimo de cada tarjeta
const maxContainerWidth = 1200; // Ancho máximo del contenedor (3 tarjetas)


const maxChartsPerRow = 5; // Maximum number of charts per row

const paginateCharts = (charts, chartsPerPage) => {
  const pages = [];
  while (charts.length) {
    pages.push(charts.splice(0, chartsPerPage));
  }
  return pages;
};





const MeditionsDetails = () => {
  const allCharts = [<BloodSugar />, <BloodPressure />, <HeartRate />,<HeartRate />];
  // States for active index and chart groups
  const [activeIndex, setActiveIndex] = useState(0);
  const [chartGroups, setChartGroups] = useState(paginateCharts([...allCharts], maxChartsPerRow));

  // Handle resize
  useEffect(() => {
    function handleResize() {
      const containerWidth = document.querySelector('#health-monitor-wrapper').clientWidth;
      const chartsPerRow = Math.floor(containerWidth / minChartWidth) || 1;
      setChartGroups(paginateCharts([...allCharts], Math.min(chartsPerRow, maxChartsPerRow)));
      if (activeIndex >= chartGroups.length) {
        setActiveIndex(0);
      }
    }

    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex, allCharts]);


  return (
    <HealthMonitorWrapper id="health-monitor-wrapper">
      <PaginationContainer>
        {chartGroups.map((_, index) => (
          <PaginationItem
            key={index}
            isActive={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </PaginationContainer>
      <HealthDataGrid>
        {chartGroups[activeIndex].map((ChartComponent, index) => (
          <HealthDataColumn key={index}>
            {ChartComponent}
          </HealthDataColumn>
        ))}
      </HealthDataGrid>
    </HealthMonitorWrapper>
  );
};

// Estilos
const HealthMonitorWrapper = styled.section`
  padding: 2rem;
  border-radius: 48px;
  background-color: rgba(166, 166, 166, 0.21);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: calc(${maxContainerWidth}px + 4rem); // 4rem para el padding
  width: 100%;
  margin: auto; // Centrar en la página
  gap: 1rem;
  overflow: hidden;
`;
const HealthDataGrid = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  overflow-x: auto;
  justify-content: flex-start;
  padding: 1rem 0;
`;

  const HealthDataColumn = styled.div`
  flex: 0 0 auto;
  min-width: ${minChartWidth}px;
  width: ${minChartWidth}px;
  height: 100%;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const PaginationItem = styled.div`
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background-color: ${props => props.isActive ? "#9ea1ac" : "#2a2c38"};
  box-shadow: 0px 4px 6.7px 0px rgba(0, 0, 0, 0.42) inset;
  cursor: pointer;
`;

export default MeditionsDetails;