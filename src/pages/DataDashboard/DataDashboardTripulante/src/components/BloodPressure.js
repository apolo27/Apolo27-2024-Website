import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import 'chart.js/auto';
import { ReactComponent as BloodPressureIcon } from '../../public/group.svg';

/*
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
}; */


const getStatusBackgroundColor = (status) => {
  switch (status) {
    case "Normal":
      return "rgba(36, 228, 164, 0.5)";

    case "Caution":
      return "rgba(255, 206, 86, 0.5)";
    case "Alert":
      return "rgba(255, 99, 132, 0.5)";
    default:
      return "rgba(201, 203, 207, 0.5)";
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case "Normal":
      return "#24e4a4";
    case "Caution":
      return "#f7b500";
    case "Alert":
      return "#ff4d4d";
    default:
      return "#999";
  }
};

const BloodPressureCard = ({ bloodPressureData  }) => {


  const hasData = bloodPressureData && bloodPressureData.historicalData && bloodPressureData.historicalData.systolic && bloodPressureData.historicalData.diastolic;
  const currentSystolic = hasData ? bloodPressureData.currentSystolic : 'NaN';
  const currentDiastolic = hasData ? bloodPressureData.currentDiastolic : 'NaN';
  const status = hasData ? bloodPressureData.status : "Datos no disponibles";

  // Datos y opciones para el gráfico
  const data = {
    labels: hasData ? bloodPressureData.historicalData.systolic.map((_, index) => `Mes ${index + 1}`) : ['No hay datos'],
    datasets: [
      {
        label: 'Sistolic',
        data: hasData ? bloodPressureData.historicalData.systolic : [0],
        borderColor: getStatusColor(status),
        backgroundColor: getStatusBackgroundColor(status),

        fill: false,
        tension: 0.1,
        borderWidth: 2,
      },
      {
        label: 'Diastolic',
        data: hasData ? bloodPressureData.historicalData.diastolic : [0],
        borderColor: getStatusColor(status),
        backgroundColor: getStatusBackgroundColor(status),
        fill: false,
        tension: 0.1,
        borderWidth: 2,
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
        display: false,
      },
    },
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: 'index',
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    elements: {
      line: {
        tension: 0.5
      },
      point: {
        radius: 0
      }
    },
  };

  return (
    <CardWrapper>
      <CardHeader>
        <IconWrapper>
          <BloodPressureIcon />
        </IconWrapper>
        <CardTitle>Blood Pressure</CardTitle>
      </CardHeader>
      <CardContent>
        <PressureValue>{currentSystolic} / {currentDiastolic} </PressureValue>
        
        mmHg<StatusLabel status={status}>{status}</StatusLabel>
        </CardContent>
      <GraphWrapper>
        <Line data={data} options={options} />
      </GraphWrapper>
    </CardWrapper>
  );
};



const CardWrapper = styled.div`
  border-radius: 40px;
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
  font-weight: 600;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20%; // Esto hará que el contenedor sea un círculo perfecto.
  background-color: #d0fbff;
  padding: 10px; // Añade un poco de padding para que el SVG no toque los bordes.
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  svg {
    width: 24px; // Ajusta el tamaño del SVG.
    height: 24px; // Asegúrate de que la altura sea igual al ancho para mantener la proporción cuadrada.
  }
`;

const CardTitle = styled.h2`
  text-shadow: 0px 0px 5.6px rgba(84, 227, 240, 0.42);
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

const PressureValue = styled.span`
  color: #54e3f0;
  text-shadow: 0px 0px 8.9px rgba(68, 236, 251, 0.54);
  font: 400 19px Poppins, sans-serif; // Reduce el tamaño de la fuente aquí si es necesario.
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
  background-color: ${(props) => getStatusBackgroundColor(props.status)};
  color: ${(props) => getStatusColor(props.status)};
  padding: 4px 8px;
  font-size: 12px; // Reduce el tamaño de la fuente para el estado.
  margin-top: 10px;
  text-align: center;
  display: inline-block; // Asegúrate de que el label se comporte como un bloque para centrar el texto correctamente.
`;

const GraphWrapper = styled.div`
  width: 100%;
  align-self: center;
  margin-top: 16px; // Ajusta el margen superior según necesites
  // Para asegurarte de que el gráfico se expanda correctamente dentro de su contenedor
  canvas {
    width: 100% !important;
    height: auto !important;
  }
`;

export default BloodPressureCard;
