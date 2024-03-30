import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import 'chart.js/auto';
import { ReactComponent as BloodSugarIcon } from '../../public/vector-3.svg';

const spO2Data = [97, 95, 92, 88, 85, 82, 96]; 

const determineSpo2Status = (value) => {
  if (value >= SPO2_THRESHOLDS.NORMAL) return 'Normal';
  if (value >= SPO2_THRESHOLDS.LOW) return 'Bajo';
  if (value < SPO2_THRESHOLDS.CRITICAL) return 'Crítico';
  return 'No reconocido';
};


const SPO2_THRESHOLDS = {
  NORMAL: 95,
  LOW: 90,
  CRITICAL: 85,
};

const determineStatusColor = (status) => {
  const colors = {
    Normal: { backgroundColor: 'rgba(36, 228, 164, 0.2)', textColor: '#24e4a4' },
    Bajo: { backgroundColor: 'rgba(247, 206, 86, 0.2)', textColor: '#f7b500' },
    Crítico: { backgroundColor: 'rgba(255, 77, 77, 0.2)', textColor: '#ff4d4d' },
    'No reconocido': { backgroundColor: 'rgba(0, 0, 0, 0.2)', textColor: '#808080' }
  };
  return colors[status] || colors['No reconocido'];
};


const getStatusColor = (status) => {
  switch (status) {
    case 'Normal':
      return { background: 'rgba(36, 228, 164, 0.2)', text: '#24e4a4' };
    case 'Bajo':
      return { background: 'rgba(247, 206, 86, 0.2)', text: '#f7b500' };
    case 'Crítico':
      return { background: 'rgba(255, 77, 77, 0.2)', text: '#ff4d4d' };
    default:
      return { background: 'rgba(153, 153, 153, 0.2)', text: '#999' };
  }
};








const SpO2Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [spO2, setSpO2] = useState({
    value: spO2Data[currentIndex],
    status: determineSpo2Status(spO2Data[currentIndex]),
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % spO2Data.length;
        setSpO2({
          value: spO2Data[newIndex],
          status: determineSpo2Status(spO2Data[newIndex]),
        });
        return newIndex;
      });
    }, 5000); // Every 5 seconds

    return () => clearInterval(intervalId);
  }, [currentIndex])

  const data = {
    labels: spO2Data.map((_, index) => `Time ${index + 1}`),
    datasets: [
      {
        label: 'SpO2',
        data: spO2Data,
        fill: true,
        backgroundColor: 'rgba(231, 155, 56, 0.2)',
        borderColor: 'rgba(231, 155, 56, 1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
  };

  

  return (
    <CardWrapper>
      <CardHeader>
        <IconWrapper><BloodSugarIcon/></IconWrapper>

        <CardTitle>SpO2</CardTitle>
      </CardHeader>
      <CardContent>
      <Value>{spO2.value}</Value>
        <Unit>%</Unit>
        <StatusLabel style={{
          backgroundColor: determineStatusColor(spO2.status).backgroundColor,
          color: determineStatusColor(spO2.status).textColor
        }}>
          {spO2.status}
          </StatusLabel>
        
        
      </CardContent>
      <GraphWrapper>
      <Line data={data} options={options}/>
      </GraphWrapper>
    </CardWrapper>
  );
};



const CardWrapper = styled.div`
  border-radius: 40px;
  background-color: var(--Dentro-del-glass, rgba(0, 0, 0, 0.21));
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const CardHeader = styled.header`
  display: flex;
  gap: 16px;
  font-size: 16px;
  color: #ffa025;
  font-weight: 600;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20%; // Esto hará que el contenedor sea un círculo perfecto.
  background-color: #f8debd;
  padding: 10px; // Añade un poco de padding para que el SVG no toque los bordes.
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  svg {
    width: 24px; // Ajusta el tamaño del SVG.
    height: 24px; // Asegúrate de que la altura sea igual al ancho para mantener la proporción cuadrada.
  }
`;


const CardTitle = styled.h2`
  text-shadow: 0px 0px 5.6px rgba(231, 155, 56, 0.67);
  font-family: Poppins, sans-serif;
  margin: auto 0;
  font-size: 20px;
`;

const CardContent = styled.div`
  display: flex;
  margin-top: 19px;
  align-items: center;
  gap: 8px;
  color: #818181;
  font-weight: 700;
`;

const Value = styled.span`
  color: #ffa025;
  text-shadow: 0px 0px 8.9px rgba(255, 160, 37, 0.57);
  font: 400 24px Poppins, sans-serif;
`;

const Unit = styled.span`
  color: #818181;
  flex-grow: 1;
  margin: auto 0;
  font: 700 16px Poppins, sans-serif;
`;

const StatusLabel = styled.div`
  border-radius: 4px;
  background-color: ${(props) => getStatusColor(props.color)};
  color: #24e4a4;
  padding: 4px 8px;
  font-size: 12px; // Reduce el tamaño de la fuente para el estado.
  margin-top: 10px;
  text-align: center;
  display: inline-block; // Asegúrate de que el label se comporte como un bloque para centrar el texto correctamente.
`;

const GraphWrapper = styled.div`
  width: 100%;
  align-self: center;
  margin-top: 12px; // Ajusta el margen superior según necesites
  // Para asegurarte de que el gráfico se expanda correctamente dentro de su contenedor
  canvas {
    width: 100% !important;
    height: auto !important;
  }
`;

export default SpO2Card;
