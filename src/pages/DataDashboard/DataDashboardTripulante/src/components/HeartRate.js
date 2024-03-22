import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import 'chart.js/auto';
import database from "../../../../../services/firebase"; 



// Umbrales para la clasificación del ritmo cardíaco
const RATE_THRESHOLDS = {
  HIGH: 100,     // Muy alto
  ELEVATED: 90,  // Elevado
};

// Determina el color basado en el estado del ritmo cardíaco
const determineColor = (status) => {
  if (status === "Normal") {
    return "#24e4a4"; // Verde para normal
  }
  return "#ff4d4d"; // Rojo para elevado y muy alto
};

// Determina el estado basado en el ritmo cardíaco
const determineStatus = (rate) => {
  if (rate >= RATE_THRESHOLDS.HIGH) {
    return "Muy alto";
  } else if (rate >= RATE_THRESHOLDS.ELEVATED) {
    return "Elevado";
  }
  return "Normal";
};

const HeartRateCard = ({activeIndex}) => {
  const [heartRate, setHeartRate] = useState({
    currentRate: 0,
    status: "Normal",
    historicalData: []
  });

  useEffect(() => {
    if (activeIndex !== 2) {
      // Si activeIndex no es 2, entonces este componente no debería estar activo
      // y podrías querer evitar operaciones costosas o suscripciones.
      return;
    }
    // Función para manejar los datos de Firebase
    const handleNewData = (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const latestRate = data.rate; // Asume que 'rate' es tu dato en Firebase
        const newStatus = determineStatus(latestRate);
        setHeartRate(prevData => ({
          ...prevData,
          currentRate: latestRate,
          status: newStatus,
          historicalData: [...prevData.historicalData.slice(-9), latestRate] // Mantiene los últimos 10 registros
        }));
      } else {
        console.log("No heart rate data available");
      }
    };
    
    // Referencia a los datos de ritmo cardíaco en Firebase
    const heartRateRef = database.ref('/heart-rate-data');
  
    // Suscribirse a los cambios en los datos de ritmo cardíaco
    heartRateRef.on('value', handleNewData, error => console.error(error));
      

    // Limpieza al desmontar el componente
    return () => heartRateRef.off('value', handleNewData);
  }, [activeIndex]); // Agrega activeIndex como dependencia para reaccionar a sus cambios

  

  // Configuración del gráfico
  const chartData = {
    labels: heartRate.historicalData.map((_, index) => `Time ${index + 1}`),
    datasets: [
      {
        label: "Heart Rate",
        data: heartRate.historicalData,
        borderColor: "#ff4d4d",
        backgroundColor: "#ff4d4d20",
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
        <Status backgroundColor={determineColor(heartRate.status)} status={heartRate.status}>{heartRate.status}</Status>
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
  color: ${(props) => (props.status === "Normal" ? "#FFFFF" : "#FFFFF")};
  white-space: nowrap;
  text-align: center;
  padding: 4px 8px;
  font: 600 12px Poppins, sans-serif;
`;


export default HeartRateCard;