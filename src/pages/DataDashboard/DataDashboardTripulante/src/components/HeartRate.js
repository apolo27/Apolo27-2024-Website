import React from "react";
import styled from "styled-components";

const HeartRateCard = () => {
  return (
    <CardWrapper>
      <CardContent>
        <CardHeader>
          <HeartIcon />
          <CardTitle>Heart Rate</CardTitle>
        </CardHeader>
        <HeartRateValue>
          <Value>98</Value>
          <Unit>bpm</Unit>
        </HeartRateValue>
        <Status>Normal</Status>
        <HeartRateGraph src="heart-rate-graph.png" alt="Heart rate graph" />
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
  background-color: rgba(36, 228, 164, 0.2);
  color: #24e4a4;
  white-space: nowrap;
  text-align: center;
  padding: 4px 8px;
  font: 600 12px Poppins, sans-serif;
`;

const HeartRateGraph = styled.img`
  width: 173px;
  height: auto;
  align-self: center;
  margin-top: 10px;
`;

export default HeartRateCard;