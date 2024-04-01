import React, { createContext, useContext, useState } from 'react';
import { ReactComponent as SignGreen } from '../../public/FramesignGreen.svg';
import { ReactComponent as SignRed } from '../../public/FramesignRed.svg';


export const UserSelectionContext = createContext();

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


  export const UserSelectionProvider = ({ children }) => {
    const [selectedUserName, setSelectedUserName] = useState(usersData[0]?.userName || '');
  
    // Función para cambiar el usuario seleccionado
    const changeSelectedUser = (userName) => {
      setSelectedUserName(userName);
    };
  
    // Función para obtener los datos completos del usuario seleccionado
    const getSelectedUserData = () => {
      return usersData.find(user => user.userName === selectedUserName);
    };
  
    return (
      <UserSelectionContext.Provider value={{ selectedUserName, changeSelectedUser, getSelectedUserData, usersData }}>
        {children}
      </UserSelectionContext.Provider>
    );
  };
  
  export const useUserSelection = () => useContext(UserSelectionContext);
