import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { ReactComponent as HeartIcon } from '../../public/group-1.svg';


const RATE_THRESHOLDS = {
  HIGH: 100,
  ELEVATED: 90,
};

const determineStatusColor = (status) => {
  switch (status) {
    case 'Muy alto':
      return 'rgba(255, 77, 77, 0.2)';
    case 'Elevado':
      return 'rgba(255, 206, 86, 0.2)';
    case 'Normal':
      return 'rgba(36, 228, 164, 0.2)';
    default:
      return 'rgba(0, 0, 0, 0.2)';
  }
};

const determineStatus = (rate) => {
  if (rate >= RATE_THRESHOLDS.HIGH) {
    return 'Muy alto';
  } else if (rate >= RATE_THRESHOLDS.ELEVATED) {
    return 'Elevado';
  }
  return 'Normal';
};

const generateECGData = (size) => {
  // Simulación de datos de ECG más realista
  // Aquí puedes añadir una función que simule los picos reales de un ECG
  // La siguiente es una simplificación para efectos del ejemplo
  return Array.from({ length: size }, (_, i) => Math.sin(i) * 10 + 30);
};

const HeartRateCard = () => {
  const [heartRate, setHeartRate] = useState({
    currentRate: 75,
    status: determineStatus(75),
    historicalData: generateECGData(50),
  });

  const chartRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const newRate = Math.floor(Math.random() * (RATE_THRESHOLDS.HIGH - 60 + 1)) + 60;
      setHeartRate((prevData) => ({
        currentRate: newRate,
        status: determineStatus(newRate),
        historicalData: generateECGData(50),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current;
      chart.data.datasets[0].borderColor = 'rgba(255, 77, 77, 1)'; // La línea siempre en rojo
      chart.data.datasets[0].backgroundColor = 'rgba(255, 77, 77, 0.1)'; // El fondo tenue para el gráfico en rojo
      chart.update();
    }
  }, [heartRate.currentRate]);

  const chartData = {
    labels: heartRate.historicalData.map((_, index) => index + 1),
    datasets: [
      {
        label: 'ECG',
        data: heartRate.historicalData,
        borderColor: 'rgba(255, 77, 77, 1)', // Línea roja para el gráfico
        backgroundColor: 'rgba(255, 77, 77, 0.1)', // Fondo tenue para el gráfico en rojo
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      x: { display: false },
      y: { display: false, beginAtZero: true },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 0,
        hoverRadius: 5,
        hitRadius: 30,
      },
      line: {
        borderWidth: 3,
      },
    },
    animation: {
      duration: 0,
    },
  };

  return (
    <CardWrapper>
      <CardHeader>
        <IconWrapper> <HeartIcon/></IconWrapper>
        <CardTitle>HeartRate (ECG)</CardTitle>
      </CardHeader>
      <CardContent>
        <Value>{heartRate.currentRate}</Value>
        <Unit>BPM</Unit>
        <StatusLabel backgroundColor={determineStatusColor(heartRate.status)}>
          {heartRate.status}
        </StatusLabel>
      </CardContent>
      <GraphWrapper>
        <Line ref={chartRef} data={chartData} options={chartOptions} />
      </GraphWrapper>
    </CardWrapper>
  );
};


const CardWrapper = styled.div`
  border-radius: 40px;
  box-shadow: 0px 1px 50px 0px rgba(0, 0, 0, 0.08);
  background-color: var(--Dentro-del-glass, rgba(0, 0, 0, 0.21));
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const CardHeader = styled.header`
  display: flex;
  gap: 16px;
  font-size: 16px;
  color: #f41c23;
  font-weight: 600;
`;

const IconWrapper = styled.div`
  border-radius: 12px;
  background-color: #fbf0f3;
  width: 58px;
  height: 58px;
`;

const CardTitle = styled.h2`
  text-shadow: 0px 0px 5.6px rgba(231, 155, 56, 0.67);
  font-family: Poppins, sans-serif;
  margin: auto 0;
`;

const CardContent = styled.div`
  display: flex;
  margin-top: 19px;
  gap: 4px;
`;

const Value = styled.span`
  color: #ff4d4d;
  text-shadow: 0px 0px 9.6px rgba(255, 77, 77, 0.57);
  font: 400 32px Poppins, sans-serif;
`;

const Unit = styled.span`
  color: #818181;
  flex-grow: 1;
  margin: auto 0;
  font: 700 16px Poppins, sans-serif;
`;

const StatusLabel = styled.div`
  border-radius: 4px;
  background-color: ${(props) => props.backgroundColor};
  color: #24e4a4;
  text-align: center;
  padding: 4px 8px;
  font: 600 12px Poppins, sans-serif;
`;

const GraphWrapper = styled.div`
  width: 100%;
  align-self: center;
  margin-top: 6px;
  position: relative; 
  z-index: 10;

  canvas {
    width: 100% !important;
    height: auto !important;
  }
`;


export default HeartRateCard;
