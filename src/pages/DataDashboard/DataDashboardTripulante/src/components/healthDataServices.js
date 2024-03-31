import { ReactComponent as SignGreen } from '../../public/FramesignGreen.svg';
import { ReactComponent as SignRed } from '../../public/FramesignRed.svg';

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


const bloodPressureDataByUser = {
    Miguel: {
      currentSystolic: 120,
      currentDiastolic: 80,
      status: "Normal",
      historicalData: {
        systolic: [120, 121, 122, 120, 118, 119],
        diastolic: [80, 82, 81, 79, 78, 77],
      },
    },
    Eridania: {
      currentSystolic: 125,
      currentDiastolic: 85,
      status: "Elevado",
      historicalData: {
        systolic: [125, 126, 127, 128, 129, 130],
        diastolic: [85, 86, 87, 88, 89, 90],
      },
    },
  };
  
  // Datos de SpO2 por usuario
  const spO2DataByUser = {
    Miguel: [97, 96, 95, 94, 93],
    Eridania: [98, 97, 96, 95, 94],
  };
  
  // Datos de frecuencia cardíaca por usuario
  const heartRateDataByUser = {
    Miguel: [60, 62, 64, 65, 63],
    Eridania: [70, 72, 74, 73, 71],
  };
  
  // Función para simular la obtención de datos de presión arterial por nombre de usuario
  export const fetchBloodPressureData = async (userName) => {
    return bloodPressureDataByUser[userName] || null;
  };
  
  // Función para simular la obtención de datos de SpO2 por nombre de usuario
  export const fetchSpO2Data = async (userName) => {
    return spO2DataByUser[userName] || [];
  };
  
  // Función para simular la obtención de datos de frecuencia cardíaca por nombre de usuario
  export const fetchHeartRateData = async (userName) => {
    return heartRateDataByUser[userName] || [];
  };

  export { usersData};
