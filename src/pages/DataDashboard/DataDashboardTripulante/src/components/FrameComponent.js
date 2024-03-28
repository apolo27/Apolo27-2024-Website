import * as React from "react";
import styled from "styled-components";

const bmiData = [
  { label: "Altura", value: "170 cm", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8535394453cb82d44c7d12ae36bd1b3c55dcfb7ff4859766488db176d8696eb6?apiKey=ddc13dadffbd4d028d5c8a7502968fe6&" },
  { label: "Peso", value: "72 kg", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/deb216c7b637f647aea88291611f0ad7e7bd1f8fff07af8d1f3f4225039e430d?apiKey=ddc13dadffbd4d028d5c8a7502968fe6&" },
];

const measurementData = [
  { label: "Chest (in)", value: "44.5", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b32f5f90fd4bdf4d4deaf514062274a1c1e58983e878d8963a0285f130bd1b4d?apiKey=ddc13dadffbd4d028d5c8a7502968fe6&" },
  { label: "Waist (in)", value: "34", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/372e38d8644a72b96ddfb2e96f523e0fba4c015105fca9bb45da22694072739f?apiKey=ddc13dadffbd4d028d5c8a7502968fe6&" },
  { label: "Hip (in)", value: "42.5", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/03d176f6e2bb38b6caf8cb7bb98aa096694dc7837b215a07a5709d04d8c52cb4?apiKey=ddc13dadffbd4d028d5c8a7502968fe6&" },
];

function FrameComponent() {
  return (
    <Container>
      <ContentWrapper>
        <Header>
          <Title>BMI Calculator</Title>
          <UserInfo>
            <UserName>VANTROI</UserName>
            <UserIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/dde676e9bfe5fc0ac74ec209647508f103ae0adf50b0f6dc7de1f0ae906267bb?apiKey=ddc13dadffbd4d028d5c8a7502968fe6&" alt="User Icon" />
          </UserInfo>
        </Header>
        <BodyMeasurements>
          <BodyMeasurementsContent>
            <BodyMeasurementsColumn>
              {bmiData.map((data, index) => (
                <BmiDataItem key={index}>
                  <BmiDataLabel>{data.label}</BmiDataLabel>
                  <BmiDataValue>
                    <BmiDataIcon src={data.icon} alt={`${data.label} Icon`} />
                    <BmiDataText>{data.value}</BmiDataText>
                  </BmiDataValue>
                </BmiDataItem>
              ))}
            </BodyMeasurementsColumn>
            <BodyIndexColumn>
              <BodyIndexWrapper>
                <BodyIndexTitle>Indice de Masa Corporal (BMI)</BodyIndexTitle>
                <BodyIndexContent>
                  <BodyIndexValue>24.9</BodyIndexValue>
                  <BodyIndexStatus>SALUDABLE</BodyIndexStatus>
                </BodyIndexContent>
                <BodyIndexScale />
                <BodyIndexLabels>
                  <BodyIndexLabel>15</BodyIndexLabel>
                  <BodyIndexLabel>18.5</BodyIndexLabel>
                  <BodyIndexLabel>25</BodyIndexLabel>
                  <BodyIndexLabel>30</BodyIndexLabel>
                  <BodyIndexLabel>40</BodyIndexLabel>
                </BodyIndexLabels>
              </BodyIndexWrapper>
            </BodyIndexColumn>
          </BodyMeasurementsContent>
        </BodyMeasurements>
        <BodyMeasurementsDetails>
          <BodyMeasurementsDetailsContent>
            <MeasurementsColumn>
              {measurementData.map((data, index) => (
                <MeasurementItem key={index}>
                  <MeasurementLabel>{data.label}</MeasurementLabel>
                  <MeasurementValue>
                    <MeasurementText>{data.value}</MeasurementText>
                    <MeasurementIcon src={data.icon} alt={`${data.label} Icon`} />
                  </MeasurementValue>
                </MeasurementItem>
              ))}
            </MeasurementsColumn>
            <BodyImageColumn>
              <BodyImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/858f4c3cf4a02500e5e6969a1597e6c0b6bc92799cea91d96eb5701e20db7918?apiKey=ddc13dadffbd4d028d5c8a7502968fe6&" alt="Body Measurements" />
            </BodyImageColumn>
          </BodyMeasurementsDetailsContent>
        </BodyMeasurementsDetails>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 40px 0 0 40px;
  background-color: rgba(166, 166, 166, 0.21);
  display: flex;
  max-width: 500px;
  flex-direction: column;
  margin-left: auto;
  padding: 30px 16px 64px;
`;

const ContentWrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 18px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-right: 10px;
    flex-wrap: wrap;
  }
`;

const Title = styled.h1`
  color: #fff;
  font: 22px Poppins, sans-serif;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 24px;
  border-radius: 21px;
  background-color: var(--Dentro-del-glass, rgba(0, 0, 0, 0.21));
  font-size: 16px;
  color: #cacaca;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const UserName = styled.span`
  font-family: Poppins, sans-serif;
`;

const UserIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: auto;
  object-position: center;
`;

const BodyMeasurements = styled.section`
  display: flex;
  margin-top: 24px;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const BodyMeasurementsContent = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const BodyMeasurementsColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 44%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const BmiDataItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 19px 6px 19px 18px;
  border-radius: 12px;
  background-color: #f8debd;
  &:not(:first-child) {
    margin-top: 26px;
  }
`;

const BmiDataLabel = styled.span`
  align-self: flex-end;
  margin-top: 28px;
  font: 12px Poppins, sans-serif;
`;

const BmiDataValue = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

const BmiDataIcon = styled.img`
  width: 90px;
  aspect-ratio: 4.55;
  object-fit: auto;
  object-position: center;
  align-self: center;
`;

const BmiDataText = styled.span`
  font-family: Poppins, sans-serif;
  margin-top: 9px;
`;

const BodyIndexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 56%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
    margin-top: 40px;
  }
`;

const BodyIndexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 17px;
  border-radius: 12px;
  border: 1px solid rgba(62, 72, 121, 1);
  background-color: var(--Dentro-del-glass, rgba(0, 0, 0, 0.21));
`;

const BodyIndexTitle = styled.h2`
  color: #fff;
  font: 400 13px Poppins, sans-serif;
`;

const BodyIndexContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  gap: 20px;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const BodyIndexValue = styled.span`
  color: #fff;
  font: 400 19px Poppins, sans-serif;
`;

const BodyIndexStatus = styled.span`
  padding: 4px 10px;
  border-radius: 8px;
  background-color: rgba(36, 228, 164, 0.2);
  color: #24e4a4;
  text-align: center;
  font: 700 12px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const BodyIndexScale = styled.div`
  height: 12px;
  margin-top: 32px;
  border-radius: 21px;
  background: linear-gradient(
    90deg,
    #0c82ed 0%,
    #45e8d6 37.77%,
    #f0c72f 70.4%,
    #ec252c 100%
  );
  @media (max-width: 640px) {
    max-width: 500px;
  }
`;

const BodyIndexLabels = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  gap: 20px;
  font-size: 9px;
  color: #fff;
  font-weight: 700;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const BodyIndexLabel = styled.span`
  font-family: Poppins, sans-serif;
`;

const BodyMeasurementsDetails = styled.section`
  margin-top: 24px;
  padding: 0 10px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
  }
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 4px;
  }
`;

const BodyMeasurementsDetailsContent = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const MeasurementsColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 58%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const MeasurementItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 24px 32px;
  border-radius: 12px;
  background-color: var(--Dentro-del-glass, rgba(0, 0, 0, 0.21));
  &:not(:first-child) {
    margin-top: 22px;
  }
  @media (max-width: 991px) {
    padding: 0 20px;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;

const MeasurementLabel = styled.span`
  color: #5f5f5f;
  font: 700 16px Poppins, sans-serif;
`;

const MeasurementValue = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  gap: 8px;
  font-size: 24px;
  color: #fff;
  font-weight: 400;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const MeasurementText = styled.span`
  font-family: Poppins, sans-serif;
`;

const MeasurementIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: auto;
  object-position: center;
`;

const BodyImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 42%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
  }
`;

const BodyImage = styled.img`
  width: 146px;
  max-width: 100%;
  aspect-ratio: 1.67;
  object-fit: auto;
  object-position: right;
  flex-grow: 1;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
  @media (max-width: 640px) {
    width: 100%;
    margin: 0 0 23px auto;
  }
`;


export default FrameComponent;
