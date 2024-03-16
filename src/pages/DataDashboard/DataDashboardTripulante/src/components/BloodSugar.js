import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import styles from "./BloodSugar.module.css";

// Suponiendo que este JSON simula los datos que vendrán de Firebase en el futuro
const historicalData = {
  spo2: [
    { value: 95, timestamp: "Momento 1" },
    { value: 97, timestamp: "Momento 2" },
    // Añade más datos simulados aquí
  ],
  status: "Normal", // Este valor podría determinarse dinámicamente basado en `spo2`
};

const BloodSugar = () => {
  const [currentSpO2, setCurrentSpO2] = useState(historicalData.spo2[historicalData.spo2.length - 1].value);
  const [status, setStatus] = useState(historicalData.status);

  const data = {
    labels: historicalData.spo2.map(data => data.timestamp), // Usar timestamp para las etiquetas
    datasets: [
      {
        label: 'SpO2',
        data: historicalData.spo2.map(data => data.value), // Mapear valores de SpO2 para el dataset
        fill: true,
        backgroundColor: "rgba(231, 155, 56, 0.2)",
        borderColor: "rgba(231, 155, 56, 1)",
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
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
        display: false,
      },
    },
  };

  return (
    <div className={styles.bloodSugar}>
      {/* Elementos previos omitidos para brevedad */}
      <div className={styles.descendantThriceRemovedNode}>
        <div className={styles.siblingThriceRemovedNodes}>
          {/* Mostrar medición actual de SpO2 */}
          <div className={styles.uncleThriceRemoved}>{currentSpO2}%</div>
        </div>
        {/* Mostrar estado actual basado en SpO2 */}
        <div className={styles.normal}>{status}</div>
      </div>
      <div className={styles.wrapperGroup11}>
        {/* Aquí se renderiza el gráfico de línea */}
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default BloodSugar;
