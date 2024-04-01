
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { useUserSelection } from './UserSelectionContext'; // Asegúrate de actualizar la ruta


import { CContainer, CRow, CCol, CWidgetStatsF, CWidgetStatsA,
  CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle
} from '@coreui/react'


Chart.register(...registerables);




const roundedCornersPlugin = {
  id: 'roundedCorners',
  afterDraw: (chart) => {
    const ctx = chart.ctx;
    chart.getDatasetMeta(0).data.forEach((bar) => {
      const { x, y, base, width } = bar;
      const radius = 20;
      ctx.save();
      ctx.fillStyle = bar.options.backgroundColor;
      ctx.beginPath();
      ctx.moveTo(x - width / 2, y);
      ctx.arcTo(x + width / 2, y, x + width / 2, base, radius);
      ctx.arcTo(x + width / 2, base, x - width / 2, base, radius);
      ctx.arcTo(x - width / 2, base, x - width / 2, y, radius);
      ctx.arcTo(x - width / 2, y, x + width / 2, y, radius);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    });
  }
};

Chart.register(roundedCornersPlugin);

const options = {
  plugins: {
    legend: {
      display: true,
      position: 'top',
      labels: {
        color: 'white',
        font: {
          size: 14,
        },
      },
    },
    tooltip: {
      enabled: true,
      mode: 'index',
      intersect: false,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
      ticks: {
        color: 'white',
      },
      barThickness: 10,
    },
    y: {
      stacked: true,
      beginAtZero: true,
      grid: {
        color: 'rgba(255,255,255,0.1)',
      },
      ticks: {
        color: 'white',
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    bar: {
      borderWidth: 2,
      borderRadius: {
        topLeft: 20,
        topRight: 20,
        bottomLeft: 20,
        bottomRight: 20
      },
      barThickness: 2, // Esto hará que las barras sean más finas
    },
  },
};
/*

const data = {
  labels: ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6', 'Jan 7', 'Jan 8', 'Jan 9', 'Jan 10', 'Jan 11', 'Jan 12', 'Jan 13', 'Jan 14', 'Jan 15', 'Jan 16', 'Jan 17', 'Jan 18'],
  datasets: [
    {
      label: 'Heart',
      data: [65, 59, 80, 81, 56, 55, 40, 45, 60, 50, 70, 75, 50, 60, 70, 90, 80, 45],
      backgroundColor: 'rgba(129, 236, 172, 0.2)',
      borderWidth: 0.5,
      borderRadius: 20,
    },
    {
      label: 'Pressure',
      data: [28, 48, 40, 19, 86, 27, 90, 85, 70, 60, 80, 95, 55, 60, 80, 100, 90, 65],
      backgroundColor: 'rgba(102,181,188,0.2)', // Corrección aquí
      borderWidth: 0.5,
      borderRadius: 20,
    },
    {
      label: 'SpO2',
      data: [38, 58, 70, 39, 66, 37, 80, 75, 85, 65, 55, 60, 70, 80, 90, 100, 85, 80],
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      borderWidth: 0.5,
      borderRadius: 20,
    },
  ],
};    */

Chart.register(...registerables);


const ActivityGrowth = ({bloodPressure, spO2, heartRate}) => {

  console.log(bloodPressure, spO2, heartRate);
  const [chartData, setChartData] = useState({
    labels: [], // Las fechas irán aquí
    datasets: [],
  });
  useEffect(() => {
    // Generar fechas para los datos históricos
    const generateDates = (historicalDataLength) => {
      const dates = [];
      const startDate = new Date('2023-03-23'); // Comienza desde el 23 de marzo de 2023, por ejemplo
      for (let i = 0; i < historicalDataLength; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i); // Incrementa un día por cada punto de dato
        dates.push(date.toLocaleDateString());
      }
      return dates;
    };

    

    // Configurar los datos para el gráfico usando las props
    setChartData({
      labels: generateDates(bloodPressure.historicalData.systolic.length), // Usa la longitud de los datos históricos para generar las fechas
      datasets: [
        {
          label: 'Blood Pressure - Systolic',
          data: bloodPressure.historicalData.systolic,
          backgroundColor: 'rgba(93, 183, 249, 0.3)',
          borderRadius: 20,
        },
        {
          label: 'SpO2',
          data: spO2,
          backgroundColor: 'rgba(102, 181, 188, 0.4)',
          borderRadius: 20,

        },
        {
          label: 'Heart Rate',
          data: heartRate,
          backgroundColor: 'rgba(129, 236, 172, 0.2)',
          borderRadius: 50,

        },
      ],
    });
  }, [bloodPressure, spO2, heartRate]);


  return (
    <CContainer>
      <CRow>
        <CCol lg={12} style={{height: '325px'}}>
          <Bar data={chartData} options={options} />
        </CCol>
      </CRow>
    </CContainer>

    // <div style={{ position: 'relative', width: '100%', height: '400px' }}>
    //   <Bar data={data} options={options} />
    // </div>
  );
};

export default ActivityGrowth;
