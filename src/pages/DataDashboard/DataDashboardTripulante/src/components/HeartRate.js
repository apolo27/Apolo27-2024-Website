import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { ReactComponent as HeartIcon } from '../../public/group-1.svg';




const RATE_THRESHOLDS = {
  HIGH: 100,
  ELEVATED: 90,
};

const amplitude = 2;


//ARREGLO 
const bpmData = [40, 110, 40, 115, 134];


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
// generar datos de ECG a BPM
const generateECGData = (bpm) => {
  // Correct the generation of the ECG data to match the BPM.
  // Make sure the number of samples per beat is not too low for high BPMs.
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
  
  // Add the QRS complex with correct proportions.
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
  
  // Add the T wave.
  const tWaveStart = qrsStart + qrsComplexSamples + stSegmentSamples;
  for (let i = 0; i < tWaveSamples; i++) {
    data[tWaveStart + i] = Math.sin((Math.PI * i) / tWaveSamples) * tWaveAmplitude;
  }
  
  // Ensure the data array is the correct length by cutting off any excess
  return data.slice(0, 300);
};





const HeartRateCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [heartRate, setHeartRate] = useState({
    currentRate: bpmData[currentIndex],
    status: determineStatus(bpmData[currentIndex]),
    historicalData: [],
  });

  const chartRef = useRef(null);

  useEffect(() => {
    // Update ECG data based on the current index
    const updateECG = () => {
      const bpmValue = bpmData[currentIndex];
      const newECGData = generateECGData(bpmValue);
      setHeartRate((prevHeartRate) => ({
        ...prevHeartRate,
        currentRate: bpmValue,
        status: determineStatus(bpmValue),
        historicalData: newECGData,
      }));
    };

    updateECG(); // Initialize with the first BPM value
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bpmData.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      chart.data.datasets[0].data = heartRate.historicalData;
      chart.update();
    }
  }, [heartRate.historicalData]);
  
  // configuración de Chart.js
  const chartData = {
    labels: new Array(heartRate.historicalData.length).fill(''),
    datasets: [
      {
        label: 'ECG',
        data: heartRate.historicalData,
        borderColor: 'rgba(255, 77, 77, 1)',
        backgroundColor: 'rgba(255, 77, 77, 0.1)',
        fill: false,
        borderWidth: 2,
      },
    ],
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
        <Value>{heartRate.currentRate}</Value>
        <Unit>BPM</Unit>
        <StatusLabel
          backgroundColor={determineStatusColor(heartRate.status).backgroundColor}
          textColor={determineStatusColor(heartRate.status).textColor}
          >

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
  display: flex; // Utiliza flexbox para centrar el contenido
  align-items: center; // Centra el contenido verticalmente
  justify-content: center; // Centra el contenido horizontalmente
  border-radius: 20%; // Hace que el contenedor sea completamente redondo
  background-color: #fbf0f3;
  width: 58px;
  height: 58px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Opcional: agrega sombra para resaltar el ícono
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
  color: ${(props) => props.textColor};
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
  height: 150px;
  canvas {
    width: 100% !important;
    height: auto !important;
  }
`;


export default HeartRateCard;
