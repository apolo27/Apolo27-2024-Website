import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { ReactComponent as HeartIcon } from '../../public/group-1.svg';
import { 
  fetchBloodPressureData, 
  fetchSpO2Data, 
  fetchHeartRateData 
} from './healthDataServices';





const RATE_THRESHOLDS = {
  HIGH: 100,
  ELEVATED: 90,
};

const amplitude = 2;


//ARREGLO 
/*const bpmData = [40, 110, 40, 115, 134];*/


const determineStatusColor = (status) => {
  const colors = {
    'Muy alto': { backgroundColor: 'rgba(255, 77, 77, 0.2)', textColor: '#ff4d4d' },
    Elevado: { backgroundColor: 'rgba(255, 206, 86, 0.2)', textColor: '#ffce56' },
    Normal: { backgroundColor: 'rgba(36, 228, 164, 0.2)', textColor: '#24e4a4' },
    Bajo: { backgroundColor: 'rgba(77, 148, 255, 0.2)', textColor: '#4d94ff' },
    'Muy bajo': { backgroundColor: 'rgba(50, 77, 255, 0.2)', textColor: '#324dff' },
    'No reconocido': { backgroundColor: 'rgba(0, 0, 0, 0.2)', textColor: '#808080' }
  };
  return colors[status] || colors['No reconocido'];
};

const determineStatus = (rate) => {
  if (rate >= RATE_THRESHOLDS.HIGH) return 'Muy alto';
  if (rate >= RATE_THRESHOLDS.ELEVATED) return 'Elevado';
  if (rate < RATE_THRESHOLDS.ELEVATED && rate >= 60) return 'Normal';
  if (rate < 60 && rate >= 50) return 'Bajo';
  if (rate < 50) return 'Muy bajo';
  return 'No reconocido';
};



const PROPORTIONS = {
  P_WAVE: 0.12,
  PQ_SEGMENT: 0.04,
  QRS_COMPLEX: 0.08,
  ST_SEGMENT: 0.12,
  T_WAVE: 0.16,
  FLAT: 0.48,
};

// generar datos de ECG a BPM
const generateECGData = (bpm) => {

  const samplesPerBeat = Math.max(300, Math.floor((60 / bpm) * 300));
  
  const pWaveSamples = Math.floor(samplesPerBeat * PROPORTIONS.P_WAVE);
  const pqSegmentSamples = Math.floor(samplesPerBeat * PROPORTIONS.PQ_SEGMENT);
  const qrsComplexSamples = Math.floor(samplesPerBeat * PROPORTIONS.QRS_COMPLEX);
  const stSegmentSamples = Math.floor(samplesPerBeat * PROPORTIONS.ST_SEGMENT);
  const tWaveSamples = Math.floor(samplesPerBeat * PROPORTIONS.T_WAVE);
  
  // Adjust the proportions of each segment according to the standard ECG waveform.
  const pWaveAmplitude = amplitude * 0.25;
  const qWaveAmplitude = -amplitude * 0.5;
  const rWaveAmplitude = amplitude;
  const sWaveAmplitude = -amplitude * 0.5;
  const tWaveAmplitude = amplitude * 0.35;

  const data = new Array(samplesPerBeat).fill(0);
  for (let i = 0; i < pWaveSamples; i++) {
    data[i] = Math.sin((Math.PI * i) / pWaveSamples) * pWaveAmplitude;
  }
  
  const qPoint = Math.floor(qrsComplexSamples / 4);
  const rPoint = qPoint * 2;
  const sPoint = qPoint;
  const qrsStart = pWaveSamples + pqSegmentSamples;
  for (let i = 0; i < qPoint; i++) {
    data[qrsStart + i] = ((i / qPoint) * qWaveAmplitude);
  }
  for (let i = 0; i < rPoint; i++) {
    data[qrsStart + qPoint + i] = (1 - (i / rPoint)) * rWaveAmplitude;
  }
  for (let i = 0; i < sPoint; i++) {
    data[qrsStart + qPoint + rPoint + i] = ((i / sPoint) * sWaveAmplitude);
  }
  
  // Add T wave.
  const tWaveStart = qrsStart + qrsComplexSamples + stSegmentSamples;
  for (let i = 0; i < tWaveSamples; i++) {
    data[tWaveStart + i] = Math.sin((Math.PI * i) / tWaveSamples) * tWaveAmplitude;
  }
  
  // 
  return data.slice(0, 300);
};





const HeartRateCard = ({data}) => {
  const hasData = data && data.length > 0;
  const currentRate = hasData ? data[data.length - 1] : "NaN"; // Maneja el caso de no disponibilidad
  const status = hasData ? determineStatus(currentRate) : "No reconocido";
  const ecgData = hasData ? generateECGData(currentRate) : []; // Si no hay datos, genera un array vacío para evitar errores en el gráfico
  const { backgroundColor, textColor } = determineStatusColor(status);

  // configuración de Chart.js
  const chartData = {
    labels: new Array(ecgData.length).fill(''),
    datasets: [{
      label: 'ECG',
      data: ecgData,
      borderColor: textColor,
      backgroundColor: 'rgba(255, 77, 77, 0.1)',
      fill: false,
      borderWidth: 2,
    }],
  };



  const chartOptions = {
    responsive: true,
    animation: {
      duration: 200, // Desactivar la animación para actualizaciones en vivo
    },
    scales: {
      
      y: {
        display: true,
        suggestedMin: -amplitude,
        suggestedMax: amplitude,
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 0,
      },
      line: {
        tension: 0.1, // Suaviza la curva de la línea
      },
    },
  };
  
  return (
    <CardWrapper>
      <CardHeader>
        <IconWrapper><HeartIcon /></IconWrapper>
        <CardTitle>HeartRate (ECG)</CardTitle>
      </CardHeader>
      <CardContent>
        <Value>{currentRate}</Value> 
        <Unit>BPM</Unit>
        <StatusLabel backgroundColor={backgroundColor} textColor={textColor}>
          {status}
        </StatusLabel>
      </CardContent>
      <GraphWrapper>
        <Line data={chartData} options={chartOptions} />
      </GraphWrapper>
    </CardWrapper>
  );
};


const CardWrapper = styled.div`
  border-radius: 40px;
  background-color: var(--Dentro-del-glass, rgba(0, 0, 0, 0.21));
  display: flex;
  flex-direction: column;
  padding: 20px 
`;

const CardHeader = styled.header`
  display: flex;
  gap: 16px;
  font-size: 16px;
  color: #f41c23;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20%; // Esto hará que el contenedor sea un círculo perfecto.
  background-color: #fbf0f3;
  padding: 10px; // Añade un poco de padding para que el SVG no toque los bordes.
  width: 45px; // Tamaño reducido para el icono
  height: 45px; // Altura igual al ancho para mantener proporción
  svg {
    width: 24px; // Ajusta el tamaño del SVG.
    height: 24px; // Asegúrate de que la altura sea igual al ancho para mantener la proporción cuadrada.
  }
`;

const CardTitle = styled.h2`
  text-shadow: 0px 0px 7.6px rgba(244, 28, 35, 0.67);
  font-family: Poppins, sans-serif;
  margin: auto 0;
  font-size: 20px;
`;

const CardContent = styled.div`
  display: flex;
  margin-top: 18px;
  align-items: center;
  gap: 8px;
  color: #818181;
  font-weight: 700;
`;

const Value = styled.span`
  color: #ff4d4d;
  text-shadow: 0px 0px 9.6px rgba(255, 77, 77, 0.57);
  font: 400 24px Poppins, sans-serif;
`;

const Unit = styled.span`
  flex-grow: 1;
  margin: auto 0;
  font: 16px Poppins, sans-serif;
`;

const StatusLabel = styled.div`
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 12px; // Reduce el tamaño de la fuente para el estado.
  margin-top: 3px;
  text-align: center;
  display: inline-block; // Asegúrate de que el label se comporte como un bloque para centrar el texto correctamente.

  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
`;

const GraphWrapper = styled.div`
width: 100%;
align-self: center;
margin-top: 10px; // Ajusta el margen superior según necesites
// Para asegurarte de que el gráfico se expanda correctamente dentro de su contenedor
canvas {
  width: 100% !important;
  height: auto !important;
}
`;


export default HeartRateCard;
