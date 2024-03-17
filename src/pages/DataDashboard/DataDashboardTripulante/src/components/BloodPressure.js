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
  };
};

const BloodPressureCard = () => {
  const [bloodPressure, setBloodPressure] = useState({
    currentSystolic: 0,
    currentDiastolic: 0,
    status: '',
  });

  useEffect(() => {
    const data = fetchBloodPressureData();
    setBloodPressure(data);
  }, []);

  // Ajustes para el gráfico
  const data = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
    datasets: [
      {
        label: "Sistólica",
        data: [120, 121, 122, 120, 118, 119],
        borderColor: "#FF6384",
        fill: false,
      },
      {
        label: "Diastólica",
        data: [80, 82, 81, 79, 78, 77],
        borderColor: "#36A2EB",
        fill: false,
      },
    ],
  };

  const getStatusColor = () => {
    switch (bloodPressure.status) {
      case "Normal":
        return "rgba(36, 228, 164, 0.2)";
      case "Precaución":
        return "rgba(255, 206, 86, 0.2)";
      case "Alerta":
        return "rgba(255, 99, 132, 0.2)";
      default:
        return "rgba(201, 203, 207, 0.2)";
    }
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
      <StatusLabel backgroundColor={getStatusColor()}>{bloodPressure.status}</StatusLabel>
      <Line data={data} />
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

const StatusLabel = styled.div`
  border-radius: 4px;
  background-color: ${(props) => props.backgroundColor};
  color: #24e4a4;
  white-space: nowrap;
  justify-content: center;
  padding: 4px 8px;
  font: 12px Poppins, sans-serif;

  @media (max-width: 991px) {
    padding-left: -2px;
  }
`;



export default BloodPressureCard;
