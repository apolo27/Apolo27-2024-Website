import styled from "styled-components";

import React, { useState } from 'react';


// Datos iniciales para VANTROI
const usersData = [
  {
    userName: "VANTROI",
    bmiData: [
      { label: "Altura", value: "170 cm", icon: "URL_ICON_ALTURA" },
      { label: "Peso", value: "72 kg", icon: "URL_ICON_PESO" },
    ],
    measurementData: [
      { label: "Chest (in)", value: "44.5", icon: "URL_ICON_CHEST" },
      { label: "Waist (in)", value: "34", icon: "URL_ICON_WAIST" },
      { label: "Hip (in)", value: "42.5", icon: "URL_ICON_HIP" },
    ],
    bmiValue: "24.9",
    bmiStatus: "SALUDABLE",
    userIcon: "URL_ICON_VANTROI",
    bodyMeasurementImage: "URL_IMAGEN_MEDIDAS_CORPORAL_VANTROI"
  },
  {
    userName: "CAMILA",
    bmiData: [
      { label: "Altura", value: "160 cm", icon: "URL_ICON_ALTURA_CAMILA" },
      { label: "Peso", value: "55 kg", icon: "URL_ICON_PESO_CAMILA" },
    ],
    measurementData: [
      { label: "Chest (in)", value: "38", icon: "URL_ICON_CHEST_CAMILA" },
      { label: "Waist (in)", value: "30", icon: "URL_ICON_WAIST_CAMILA" },
      { label: "Hip (in)", value: "40", icon: "URL_ICON_HIP_CAMILA" },
    ],
    bmiValue: "21.5",
    bmiStatus: "SALUDABLE",
    userIcon: "URL_ICON_CAMILA",
    bodyMeasurementImage: "URL_IMAGEN_MEDIDAS_CORPORAL_CAMILA"
  },
  // Más usuarios
];


const BMIData = [
  { value: 15, label: "15" },
  { value: 20, label: "20" },
  { value: 28, label: "28" },
  { value: 35, label: "35" },
  { value: 40, label: "40" },
];






function FrameComponent() {
  const [userData, setUserData] = useState(usersData[0]);

  const handleSelectChange = (event) => {
    const selectedUserName = event.target.value;
    const selectedUser = usersData.find((user) => user.userName === selectedUserName);
    setUserData(selectedUser);
  };

  const calculatePosition = (value) => {
    const scaleMin = 15;
    const scaleMax = 40;
    const position = ((value - scaleMin) / (scaleMax - scaleMin)) * 100;
    return position;
  };

  const calculateBmiStatus = (bmiValue) => {
    if (bmiValue < 18.5) return "BAJO PESO";
    if (bmiValue >= 18.5 && bmiValue < 25) return "SALUDABLE";
    if (bmiValue >= 25 && bmiValue < 30) return "SOBREPESO";
    return "OBESIDAD";
  };

  const calculateMarkerPosition = () => {
    const scaleMin = 15;
    const scaleMax = 40;
    const bmiValue = parseFloat(userData.bmiValue);
    const position = ((bmiValue - scaleMin) / (scaleMax - scaleMin)) * 100;
    return `${position}%`;
  };
  

  return (
    <Container>
      <ContentWrapper>
        <Header>
          <Title>BMI Calculator</Title>
          
            <UserSelector onChange={handleSelectChange} value={userData.userName}>
              {usersData.map((user) => (
                <option key={user.userName} value={user.userName}>{user.userName}</option>
              ))}
            </UserSelector>
          
        </Header>
        <BodyMeasurements>
          <BodyMeasurementsContent>
            <BodyMeasurementsColumn>
              {userData.bmiData.map((data, index) => (
                <BmiDataItem key={index}>
                  <BmiDataLabel>{data.label}</BmiDataLabel>
                  <BmiDataValue>
                    <BmiDataIcon src={data.icon} alt={`${data.label} icon`} />
                    <BmiDataText>{data.value}</BmiDataText>
                  </BmiDataValue>
                </BmiDataItem>
              ))}
            </BodyMeasurementsColumn>
            <BodyIndexColumn>
              <BodyIndexWrapper>
              <BodyIndexTitle>Índice de Masa Corporal (BMI)</BodyIndexTitle>
                <BodyIndexContent>
                  <BodyIndexValue>{userData.bmiValue}</BodyIndexValue>
                  <BodyIndexStatus>{userData.bmiStatus}</BodyIndexStatus>
                </BodyIndexContent>
                <BMIScaleWrapper>
                <BMIMarker style={{ left: calculateMarkerPosition() }} />
                  <BMIScaleBackground />
                  {/* El marcador que indica la posición del valor del BMI actual del Tripu*/}
                  
              </BMIScaleWrapper>
                <BMIValuesContainer>
                  {BMIData.map((data) => (
                    <BMIValueLabel key={data.value} style={{ left: `${calculatePosition(data.value)}%` }}>
                      {data.label}
                    </BMIValueLabel>
                  ))}
                </BMIValuesContainer>
              </BodyIndexWrapper>
            </BodyIndexColumn>
          </BodyMeasurementsContent>
        </BodyMeasurements>
        <BodyMeasurementsDetails>
          <BodyMeasurementsDetailsContent>
            <MeasurementsColumn>
              {userData.measurementData.map((data, index) => (
                <MeasurementItem key={index}>
                  <MeasurementLabel>{data.label}</MeasurementLabel>
                  <MeasurementValue>
                    <MeasurementText>{data.value}</MeasurementText>
                    <MeasurementIcon src={data.icon} alt={`${data.label} icon`} />
                  </MeasurementValue>
                </MeasurementItem>
              ))}
            </MeasurementsColumn>
            <BodyImageColumn>
              <BodyImage src={userData.bodyMeasurementImage} alt="Medidas Corporales" />
            </BodyImageColumn>
          </BodyMeasurementsDetailsContent>
        </BodyMeasurementsDetails>
      </ContentWrapper>
    </Container>
  );
}


const BMIValuesContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 35px; // Espacio para el marcador
`;

const BMIValueLabel = styled.span`
  position: absolute;
  bottom: 15px; // Coloca las etiquetas debajo de la barra
  left: ${props => `calc(${props.left}% - 10px)`}; // Ajusta la posición horizontalmente
  transform: translateX(-50%);
  color: #fff;
  font-size: 12px;
  white-space: nowrap; // Asegura que el texto no se envuelva
`;


const BMILabelButton = styled.button`
  background: none;
  border: 1px solid #fff;
  color: #fff;
  padding: 2px 6px;
  border-radius: 12px;
  font-size: 9px;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;


const UserSelector = styled.select`
  font-family: Poppins, sans-serif;
  padding: 14px 24px;
  border-radius: 21px;
  margin-top: 24px;
  background-color: var(--Dentro-del-glass, rgba(0, 0, 0, 0.21));
  color: #cacaca;
  border: 21px;
  outline: none;
  font-size: 16px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;


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


const BMIScaleWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 12px;
`;

const BMIScaleBackground = styled.div`
  height: 20px;
  border-radius: 10px;
  background: linear-gradient(to right, #0c82ed, #45e8d6, #f0c72f, #ec252c);
  margin-top: 10px; // Espacio en la parte superior para el marcador
`;

const BMIMarker = styled.div`
  position: absolute;
  top: -8px; // Sube el marcador para que esté centrado verticalmente con la barra de colores
  left: ${props => props.position};
  width: 12px; // Ancho reducido para un marcador más pequeño
  height: 12px; // Altura reducida para coincidir con el ancho
  border-radius: 50%; 
  background-color: red; // Color de marcador
  border: 2px solid white; // Borde 
  transition: left 0.3s ease-in-out; // Animación suave para los cambios de posición
  z-index: 10; // el marcador esté por encima de cualquier otro elemento
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
