import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import 'chart.js/auto';
import { ReactComponent as BloodSugarIcon } from '../../public/vector-3.svg';



const fetchSpO2Data = () => {
  // Simulating fetching data; replace with 
  return {
    currentSpO2: 95,
    status: "Normal",
    historicalData: [92, 93, 94, 95, 96, 95, 94, 95], // Example historical SpO2 data
  };
};

const SpO2Card = () => {
  const [spO2Data, setSpO2Data] = useState({
    currentSpO2: 0,
    status: "",
    historicalData: [],
  });

  useEffect(() => {
    const data = fetchSpO2Data();
    setSpO2Data(data);
  }, []);

  const data = {
    labels: spO2Data.historicalData.map((_, index) => `Time ${index}`),
    datasets: [
      {
        label: "SpO2",
        data: spO2Data.historicalData,
        fill: true,
        backgroundColor: "rgba(231, 155, 56, 0.2)",
        borderColor: "rgba(231, 155, 56, 1)",
        tension: 0.1,
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
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <CardWrapper>
      <CardHeader>
        <IconWrapper><BloodSugarIcon/></IconWrapper>

        <CardTitle>SpO2</CardTitle>
      </CardHeader>
      <CardContent>
        <Value>{spO2Data.currentSpO2}</Value>
        <Unit>%</Unit>
        <StatusLabel>{spO2Data.status}</StatusLabel>
      </CardContent>
      <GraphWrapper> {/* This is where you use GraphWrapper */}
        <Line data={data} options={options} height={60} />
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
  color: #ffa025;
  font-weight: 600;
`;

const IconWrapper = styled.div`
  border-radius: 12px;
  background-color: #f8debd;
  width: 58px;
  height: 58px;
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
  color: #ffa025;
  text-shadow: 0px 0px 9.6px rgba(255, 160, 37, 0.57);
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
  background-color: rgba(36, 228, 164, 0.2);
  color: #24e4a4;
  text-align: center;
  padding: 4px 8px;
  font: 600 12px Poppins, sans-serif;
`;

const GraphWrapper = styled.div`
  width: 100%;
  align-self: center;
  margin-top: 6px;
`;

export default SpO2Card;
