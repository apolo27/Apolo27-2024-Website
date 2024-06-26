import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { ReactComponent as SignGreen } from '../../public/FramesignGreen.svg';
import { ReactComponent as SignRed } from '../../public/FramesignRed.svg';
import { ReactComponent as PesoIcon } from '../../public/Group 2PesoIcon.svg';
import { ReactComponent as AlturaIcon } from '../../public/Group 2AlturaIcon.svg';
import { ReactComponent as CrewmemberIcon } from '../../public/Fill-283CrewMemberRover.svg';
import { CContainer, CRow, CCol, CWidgetStatsF, CWidgetStatsA,
  CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle
  } from '@coreui/react'

import { useUserSelection } from './UserSelectionContext'; // Ajusta la ruta según sea necesario
import {
  fetchBloodPressureData,
  fetchSpO2Data,
  fetchHeartRateData,
} from './healthDataServices';



// Datos iniciales para VANTROI


/*
const usersData = [
  {
    userName: "Miguel",
    bmiData: [
      { label: "Altura", value: "170 cm", icon: "URL_ICON_ALTURA" },
      { label: "Peso", value: "72 kg", icon: "URL_ICON_PESO" },
    ],
    measurementData: [
      { label: "Chest (in)", value: "44.5", icon: SignGreen },
      { label: "Waist (in)", value: "34", icon: SignRed },
      { label: "Hip (in)", value: "42.5", icon: SignRed },
    ],
    bmiValue: "24.9",
    bmiStatus: "SALUDABLE",
    userIcon: "ICON",
    bodyMeasurementImage: "URL_IMAGEN_MEDIDAS_CORPORAL_VANTROI"
  },
  {
    userName: "Eridania",
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
    userIcon: "ICON",
    bodyMeasurementImage: "URL_IMAGEN_MEDIDAS_CORPORAL_CAMILA"
  },
  // Más usuarios
];
*/

const BMIData = [
  { value: 15, label: "15" },
  { value: 20, label: "20" },
  { value: 28, label: "28" },
  { value: 35, label: "35" },
  { value: 40, label: "40" },
];



const calculatePosition = (value) => {
  const scaleMin = 15;
  const scaleMax = 40;
  const position = ((value - scaleMin) / (scaleMax - scaleMin)) * 100;
  return position;
};




function FrameComponent() {
  const { selectedUserName, changeSelectedUser, getSelectedUserData, usersData } = useUserSelection();

  const handleSelectChange = (event) => {
    const newUser = event.target.value;
    changeSelectedUser(newUser); // Actualiza el contexto con el nuevo usuario seleccionado
  };

  const userData = getSelectedUserData(); // Datos del usuario seleccionado


  // Obtener datos del usuario seleccionado
  // Actualización de datos de salud basada en el usuario seleccionado


  const calculateBmiStatus = (bmiValue) => {
    if (bmiValue < 18.5) return "Low Weight";
    if (bmiValue >= 18.5 && bmiValue < 25) return "Healthy";
    if (bmiValue >= 25 && bmiValue < 30) return "Overweight";
    return "Obese";
  };

  const calculateMarkerPosition = () => {
    const scaleMin = 15;
    const scaleMax = 40;
    const bmiValue = parseFloat(userData.bmiValue);
    const position = ((bmiValue - scaleMin) / (scaleMax - scaleMin)) * 100;
    return `${position}%`;
  };
  

  return (
    <CContainer style={{
      backgroundColor:'#1C1F32',
      padding: '24px 22px 2px',
      borderRadius: '48px',
      alignItems: 'center',
      }}>
      <ContentWrapper>
      <CCol>
        <Header>
          <Title>BMI Calculator</Title>
          <UserSelector onChange={handleSelectChange} value={selectedUserName || ''}>
              {usersData.map((user) => (
                <option key={user.userName} value={user.userName}>{user.userName}</option>
              ))}
            </UserSelector>
        </Header>
        <BodyMeasurements>
          <BodyMeasurementsContent>
            <CCol>
              <div className='mb-4'>
              {userData.bmiData.map((data, index) => {
                let Icon = data.label === "Height" ? AlturaIcon : PesoIcon;
                let backgroundColor =
                  data.label === "Height" ? "#F8DEBD" : "#D0FBFF"; // Colores de fondo
                return (
                  <BmiDataItem key={index} backgroundColor={backgroundColor}>
                    <BmiDataLabel>{data.label}</BmiDataLabel>
                    <Icon />
                    <BmiDataText>{data.value}</BmiDataText>
                  </BmiDataItem>
                );
              })}
              </div>
            </CCol>
            <CCol>
              <div className='mb-4'>
              <BodyIndexWrapper>
                <BodyIndexTitle>Body Mass Index (BMI)</BodyIndexTitle>
                <BodyIndexContent>
                  <BodyIndexValue>{userData.bmiValue}</BodyIndexValue>
                  <BodyIndexStatus>{userData.bmiStatus}</BodyIndexStatus>
                </BodyIndexContent>
                <BMIScaleWrapper>
                  <BMIMarker style={{ left: calculateMarkerPosition() }} />
                  <BMIScaleBackground />
                </BMIScaleWrapper>
                <BMIValuesContainer>
                  {BMIData.map((data) => (
                    <BMIValueLabel
                      key={data.value}
                      style={{ left: `${calculatePosition(data.value)}%` }}
                    >
                      {data.label}
                    </BMIValueLabel>
                  ))}
                </BMIValuesContainer>
              </BodyIndexWrapper>
              </div>
            </CCol>
          </BodyMeasurementsContent>
        </BodyMeasurements>
        <BodyMeasurementsDetails>
          <BodyMeasurementsDetailsContent>
            <CCol lg={6}>
              <div className='mb-4'>
              {userData.measurementData.map((data, index) => {
                const Icon = data.icon === "green" ? SignGreen : SignRed;
                return (
                  <MeasurementItem key={index}>
                    <MeasurementLabel>{data.label}</MeasurementLabel>
                    <IconWrapper>
                      <MeasurementValue>{data.value}</MeasurementValue>
                      <Icon />
                    </IconWrapper>
                  </MeasurementItem>
                );
              }
              )}
              </div>
            </CCol >
            <CCol lg={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className='mb-4'>
              <SmallCrewmemberIcon />
              </div>
            </CCol>
          </BodyMeasurementsDetailsContent>
        </BodyMeasurementsDetails>
      </CCol>
      </ContentWrapper>
    </CContainer>
    // <Container>
    //   <ContentWrapper>
    //     <Header>
    //       <Title>BMI Calculator</Title>

    //       <UserSelector onChange={handleSelectChange} value={userData.userName}>
    //         {usersData.map((user) => (
    //           <option key={user.userName} value={user.userName}>
    //             {user.userName}
    //           </option>
    //         ))}
    //       </UserSelector>
    //     </Header>
    //     <BodyMeasurements>
    //       <BodyMeasurementsContent>
    //         <BodyMeasurementsColumn>
    //           {userData.bmiData.map((data, index) => {
    //             let Icon = data.label === "Altura" ? AlturaIcon : PesoIcon;
    //             let backgroundColor =
    //               data.label === "Altura" ? "#F8DEBD" : "#D0FBFF"; // Colores de fondo
    //             return (
    //               <BmiDataItem key={index} backgroundColor={backgroundColor}>
    //                 <BmiDataLabel>{data.label}</BmiDataLabel>
    //                 <Icon />
    //                 <BmiDataText>{data.value}</BmiDataText>
    //               </BmiDataItem>
    //             );
    //           })}
    //         </BodyMeasurementsColumn>
    //         <BodyIndexColumn>
    //           <BodyIndexWrapper>
    //             <BodyIndexTitle>Índice de Masa Corporal (BMI)</BodyIndexTitle>
    //             <BodyIndexContent>
    //               <BodyIndexValue>{userData.bmiValue}</BodyIndexValue>
    //               <BodyIndexStatus>{userData.bmiStatus}</BodyIndexStatus>
    //             </BodyIndexContent>
    //             <BMIScaleWrapper>
    //               <BMIMarker style={{ left: calculateMarkerPosition() }} />
    //               <BMIScaleBackground />
    //               {/* El marcador que indica la posición del valor del BMI actual del Tripu*/}
    //             </BMIScaleWrapper>
    //             <BMIValuesContainer>
    //               {BMIData.map((data) => (
    //                 <BMIValueLabel
    //                   key={data.value}
    //                   style={{ left: `${calculatePosition(data.value)}%` }}
    //                 >
    //                   {data.label}
    //                 </BMIValueLabel>
    //               ))}
    //             </BMIValuesContainer>
    //           </BodyIndexWrapper>
    //         </BodyIndexColumn>
    //       </BodyMeasurementsContent>
    //     </BodyMeasurements>
    //     <BodyMeasurementsDetails>
    //       <BodyMeasurementsDetailsContent>
    //         <MeasurementsColumn>
    //           {userData.measurementData.map((data, index) => {
    //             const Icon = data.icon === "green" ? SignGreen : SignRed;
    //             return (
    //               <MeasurementItem key={index}>
    //                 <MeasurementLabel>{data.label}</MeasurementLabel>
    //                 <IconWrapper>
    //                   <MeasurementValue>{data.value}</MeasurementValue>
    //                   <Icon />
    //                 </IconWrapper>
    //               </MeasurementItem>
    //             );
    //           })}
    //         </MeasurementsColumn>
    //         <BodyImageColumn>
    //           <CrewmemberIcon />
    //         </BodyImageColumn>
    //       </BodyMeasurementsDetailsContent>
    //     </BodyMeasurementsDetails>
    //   </ContentWrapper>
    // </Container>
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
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 12px;
  background-color: ${props => props.backgroundColor};
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const BmiDataLabel = styled.span`
  font-size: 13px;
  color: #000; // Color de texto a negro
  margin-bottom: 5px; // Espacio entre la etiqueta y el icono
`;


const IconWrapper = styled.span`
  display: flex;
  align-items: center; // Alineación vertical de los íconos
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
  
  color: #000;
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
  padding: 5px;
  align-items: center; /* Agrega esta línea para centrar verticalmente */
  text-align: center; /* Ajusta el texto al centro horizontal */
  width: 100%;

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
  font: 700 14px Poppins, sans-serif;
`;

const MeasurementValue = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2px;
  gap: 8px;
  font-size: 20px;
  color: #fff;
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

const SmallCrewmemberIcon = styled(CrewmemberIcon)`
  height: 250px; /* Ajusta la altura del icono */
`;

export default FrameComponent;
