import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import 'chart.js/auto';

// Simulación de obtención de datos de presión arterial
const fetchBloodPressureData = () => {
  return {
    currentSystolic: 120,
    currentDiastolic: 80,
    status: "Normal",
    historicalData: {
      sistolic: [120, 121, 122, 120, 118, 119],
      diastolic: [80, 82, 81, 79, 78, 77]
    },
  };
};

const getStatusColor = (status) => {
  switch (status) {
    case "Normal":
      return "#24e4a4";
    case "Precaución":
      return "#f7b500";
    case "Alerta":
      return "#ff4d4d";
    default:
      return "#999"; // Color por defecto
  }
};

const BloodPressureCard = () => {
  const [bloodPressure, setBloodPressure] = useState(fetchBloodPressureData());

  useEffect(() => {
    // Aquí se haría el fetch a la API o Firebase en un caso real
    const intervalId = setInterval(() => {
      setBloodPressure(fetchBloodPressureData());
    }, 5000); // Actualizamos los datos cada 5 segundos por ejemplo

    return () => clearInterval(intervalId);
  }, []);

  const data = {
    labels: bloodPressure.historicalData.sistolic.map((_, index) => `Mes ${index + 1}`),
    datasets: [
      {
        label: 'Sistólica',
        data: bloodPressure.historicalData.sistolic,
        borderColor: getStatusColor(bloodPressure.status),
        backgroundColor: getStatusColor(bloodPressure.status),
        fill: false,
        tension: 0.4,
        pointRadius: 0, // Puntos invisibles
        borderWidth: 2,
      },
      {
        label: 'Diastólica',
        data: bloodPressure.historicalData.diastolic,
        borderColor: getStatusColor(bloodPressure.status),
        backgroundColor: getStatusColor(bloodPressure.status),
        fill: false,
        tension: 0.4,
        pointRadius: 0, // Puntos invisibles
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Ocultar leyenda
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    hover: {
      mode: 'index',
    },
    elements: {
      point: {
        hoverRadius: 7, // Tamaño del punto al pasar el mouse
      },
    },
  };

  return (
    <CardWrapper>
      <CardHeader>
        <IconWrapper />
        <CardTitle>Presión Arterial</CardTitle>
      </CardHeader>
      <CardContent>
        <PressureValue>{bloodPressure.currentSystolic}</PressureValue>
        <PressureUnit>/ {bloodPressure.currentDiastolic} mmHg</PressureUnit>
      </CardContent>
      <StatusLabel>{bloodPressure.status}</StatusLabel>
      <Line data={data} options={options} /> 
    </CardWrapper>
  );
};




  


const CardWrapper = styled.div`
  border-radius: 40px;
  box-shadow: 0px 1px 50px 0px rgba(0, 0, 0, 0.08);
  background-color: var(--Dentro-del-glass, rgba(0, 0, 0, 0.21));
  display: flex;
  flex-direction: column;
  padding: 20px 10px 12px 20px;
`;

const CardHeader = styled.header`
  display: flex;
  gap: 16px;
  font-size: 16px;
  color: #54e3f0;
`;

const IconWrapper = styled.div`
  border-radius: 12px;
  background-color: #d0fbff;
  width: 58px;
  height: 58px;
`;

const CardTitle = styled.h2`
  text-shadow: 0px 0px 7.6px rgba(84, 227, 240, 0.42);
  font-family: Mulish, sans-serif;
  margin: auto 0;
`;

const CardContent = styled.div`
  display: flex;
  margin-top: 19px;
  align-items: center;
  gap: 8px;
  color: #818181;
  font-weight: 700;
`;

const PressureValue = styled.span`
  color: #54e3f0;
  text-shadow: 0px 0px 8.9px rgba(68, 236, 251, 0.54);
  flex-grow: 1;
  font: 400 32px Poppins, sans-serif;
`;

const PressureUnit = styled.span`
  margin: auto 0;
  font: 16px Poppins, sans-serif;

  &:last-child {
    font-size: 12px;
  }
`;

const getStatusBackgroundColor = (status) => {
  switch (status) {
    case "Normal":
      return "rgba(36, 228, 164, 0.5)"; // Color verde más claro
    case "Caution":
      return "rgba(255, 206, 86, 0.5)"; // Color amarillo más claro
    case "Alert":
      return "rgba(255, 99, 132, 0.5)"; // Color rojo más claro
    default:
      return "rgba(201, 203, 207, 0.5)"; // Color gris por defecto más claro
  }
};

const StatusLabel = styled.div`
  border-radius: 4px;
  background-color: ${(props) => getStatusBackgroundColor(props.status)};
  color: #24e4a4; // Cambiado a blanco para mejor contraste
  white-space: nowrap;
  justify-content: center;
  padding: 4px 8px;
  font: 12px 'Poppins', sans-serif;
  margin-top: 10px;
  text-align: center; // Asegurándose de que el texto esté centrado

  @media (max-width: 991px) {
    padding-left: 6px; // Ajustado para que no sea negativo
    padding-right: 6px;
  }
`;



export default BloodPressureCard;