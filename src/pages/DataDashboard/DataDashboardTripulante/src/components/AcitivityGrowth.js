import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

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
};

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
};

const ActivityGrowth = () => {

  return (
    <CContainer>
      <CRow>
        <CCol lg={12} style={{height: '325px'}}>
          <Bar data={data} options={options} />
        </CCol>
      </CRow>
    </CContainer>

    // <div style={{ position: 'relative', width: '100%', height: '400px' }}>
    //   <Bar data={data} options={options} />
    // </div>
  );
};

export default ActivityGrowth;
