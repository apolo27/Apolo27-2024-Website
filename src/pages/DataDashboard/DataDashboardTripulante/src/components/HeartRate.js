import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import 'chart.js/auto';

// Simulación de obtención de datos de ritmo cardíaco
const fetchHeartRateData = () => {
  return {
    currentRate: 98, // El ritmo cardíaco actual
    status: "Normal", // El estado de salud basado en el ritmo cardíaco
    historicalData: [92, 95, 90, 85, 88, 92, 94, 98], // Datos históricos simulados
  };
};


const determineColor = (status) => {
  switch (status) {
    case "Elevado":
      return "#f7b500"; // Amarillo para elevado
    case "Muy alto":
      return "#ff4d4d"; // Rojo para muy alto
    default:
      return "#24e4a4"; // Verde para normal
  }
};





const HeartRateCard = () => {
  const [heartRate, setHeartRate] = useState(fetchHeartRateData());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeartRate(fetchHeartRateData());
    }, 5000); // Simula la actualización de datos cada 5 segundos

    return () => clearInterval(intervalId);
  }, []);

  // Configuración del gráfico
  const chartData = {
    labels: heartRate.historicalData.map((_, index) => `Time ${index + 1}`),
    datasets: [
      {
        label: "Heart Rate",
        data: heartRate.historicalData,
        borderColor: determineColor(heartRate.status),
        backgroundColor: determineColor(heartRate.status) + '20', // Añade transparencia al color para el fondo
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.parsed.y} bpm (${heartRate.status})`;
          }
        }
      },
      legend: {
        display: false, // Oculta la leyenda
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
  };

  return (
    <CardWrapper>
      <CardContent>
        <CardHeader>
          <HeartIcon />
          <CardTitle>Heart Rate</CardTitle>
        </CardHeader>
        <HeartRateValue>
          <Value>{heartRate.currentRate}</Value>
          <Unit>bpm</Unit>
        </HeartRateValue>
        <Status backgroundColor={determineColor(heartRate.status)}>{heartRate.status}</Status>
        <Line data={chartData} options={chartOptions} />
      </CardContent>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  max-width: 213px;
  flex-direction: column;
  justify-content: center;
`;

const CardContent = styled.div`
  border-radius: 40px;
  box-shadow: 0px 1px 50px 0px rgba(0, 0, 0, 0.08);
  background-color: var(--Dentro-del-glass, rgba(0, 0, 0, 0.21));
  padding: 19px 20px;
`;

const CardHeader = styled.header`
  display: flex;
  gap: 16px;
  font-size: 16px;
  color: #f41c23;
  font-weight: 600;
`;

const HeartIcon = styled.div`
  border-radius: 12px;
  background-color: #fbf0f3;
  width: 58px;
  height: 58px;
`;

const CardTitle = styled.h2`
  font-family: Poppins, sans-serif;
  margin: auto 0;
`;

const HeartRateValue = styled.div`
  display: flex;
  margin-top: 19px;
  gap: 4px;
  white-space: nowrap;
`;

const Value = styled.span`
  color: var(--color-rojo-en-botones, #f00109);
  text-shadow: 0px 0px 17px rgba(236, 37, 44, 0.62);
  font: 400 32px Poppins, sans-serif;
`;

const Unit = styled.span`
  color: #818181;
  flex-grow: 1;
  margin: auto 0;
  font: 700 16px Poppins, sans-serif;
`;

const Status = styled.div`
  border-radius: 4px;
  background-color: ${(props) => props.backgroundColor};
  color: #24e4a4;
  white-space: nowrap;
  text-align: center;
  padding: 4px 8px;
  font: 600 12px Poppins, sans-serif;
`;

const HeartRateGraph = styled.img`
  width: 173px;
  height: auto;
  align-self: center;
  margin-top: 10px;
`;

export default HeartRateCard;