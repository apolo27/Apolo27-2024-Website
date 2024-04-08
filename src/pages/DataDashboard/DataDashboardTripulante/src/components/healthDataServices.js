import React, { createContext, useContext, useState } from 'react';




// Contexto para la selección del usuario
const UserSelectionContext = createContext();




// Datos simulados
const bloodPressureDataByUser = {
  // Datos para Miguel
  Miguel: {
    currentSystolic: 120,
    currentDiastolic: 80,
    status: "Normal",
    historicalData: {
      systolic: [120, 121, 122, 120, 118, 119],
      diastolic: [80, 82, 81, 79, 78, 77],
    },
  },
  // Datos para Eridania
  Eridania: {
    currentSystolic: 125,
    currentDiastolic: 85,
    status: "High",
    historicalData: {
      systolic: [125, 126, 127, 128, 129, 130],
      diastolic: [85, 86, 87, 88, 89, 90],
    },
  },
};

const spO2DataByUser = {
  Miguel: [97, 96, 95, 94, 93],
  Eridania: [98, 97, 96, 95, 94],
};

const heartRateDataByUser = {
  Miguel: [60, 62, 64, 65, 63],
  Eridania: [70, 72, 74, 73, 71],
};

// Proveedor del contexto
export const UserSelectionProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState('Miguel');
  const [dataSource, setDataSource] = useState('2'); // '1' para API, '2' para datos simulados

  // Cambia el usuario seleccionado
  const changeUser = (userName) => setSelectedUser(userName);

  // Alternar entre usar datos de la API ('1') y datos simulados ('2')
  const toggleDataSource = () => {
    setDataSource((prevDataSource) => (prevDataSource === '1' ? '2' : '1'));
  };

  return (
    <UserSelectionContext.Provider value={{ selectedUser, changeUser, dataSource, toggleDataSource }}>
      {children}
    </UserSelectionContext.Provider>
  );
};

export const useUserSelection = () => useContext(UserSelectionContext);

// Función hipotética que simula llamadas a la API
const fetchFromAPI = async (userName) => {
  // Simula una llamada a la API y retorna datos
  // console.log(`Fetching data for ${userName} from API...`);
  return {}; // Retorna datos de ejemplo
};

// Adaptación de las funciones de llamada para verificar el dataSource
export const fetchBloodPressureData = async (userName, dataSource) => {
  if (dataSource === '1') {
    return await fetchFromAPI(userName);
  } else {
    return bloodPressureDataByUser[userName] || null;
  }
};

export const fetchSpO2Data = async (userName, dataSource) => {
  if (dataSource === '1') {
    return await fetchFromAPI(userName);
  } else {
    return spO2DataByUser[userName] || [];
  }
};

export const fetchHeartRateData = async (userName, dataSource) => {
  if (dataSource === '1') {
    return await fetchFromAPI(userName);
  } else {
    return heartRateDataByUser[userName] || [];
  }
};