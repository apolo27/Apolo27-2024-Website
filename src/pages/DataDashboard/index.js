import FrameComponent from './DataDashboardTripulante/src/components/BottonLine';
//import FrameComponentAmbient from './DataDashboardAmbiente/src/components/ComponentsPartsDetail';
import './DataDashboardTripulante/src/global.css';
import "./DataDashboard.css";
import React, { useEffect, useState } from "react";
import database from "../../services/firebase";
import FrameComponentAmbient from './DataDashboardAmbiente/src/components/Home';
import Sensors from './DataDashboardSensors/index.js';
// import {Container,Tab, Tabs} from 'react-bootstrap';

import {
  Grid,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Container,
  BottomNavigation,
  BottomNavigationAction,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemIcon,
  Typography,
  Select,
  Button,
  colors,
} from "@mui/material";
import {LineChart} from "@mui/x-charts/LineChart"
import HomeIcon from "@mui/icons-material/Home";
import { PedalBike } from "@mui/icons-material";
import BarChartIcon from "@mui/icons-material/BarChart";
import PersonIcon from "@mui/icons-material/Person";
import SensorsIcon from '@mui/icons-material/Sensors';
import PublicIcon from '@mui/icons-material/Public';
import {
  MdOutlineWbSunny,
  MdOutlineWaterDrop,
  MdOutlineCompress,
  MdOutlineArrowUpward,
} from "react-icons/md";
//import {List, ListItem, ListItemButton, ListItemText, ListItemAvatar, Avatar, ListItemIcon, Typography } from '@mui/material';
import CircularProgress from "@mui/material/CircularProgress";


import tempIcon from "../../imgs/DataDashboard/tempIcon.png";
import Crewmembers from "../../imgs/DataDashboard/Frame Crewmembers.svg";
import { set } from "lodash";
import { borderRadius, maxHeight } from "@mui/system";
import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";
import { getLastVideo, getRecentVideos } from "../../services/FetchYTVideos";
import { fetchAllData, fetchLastFiveData } from '../../services/FetchFirebase.js';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { axisClasses } from "@mui/x-charts";

import Rover from './DataDashboardRover/index.js';

import { Chart } from "react-google-charts";
import { a } from '@react-spring/three';
import TrackGaugeChart from '../../components/RadialBarChart/index.js';
import { useLocation, useNavigate } from 'react-router-dom';

const DataDashboard = (props) => {
  let t = props.t;
  const [gaugeData, setGaugeData] = useState(getGaugeData);

  const [data, setData] = useState(null);
  const [dataGrafico, setDataGrafico] = useState([]);
  const [processedData, setProcessedData] = useState([]);
  const [surroundingTemp, setSurroundingTemp] = useState(61);

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [piloto, setPiloto] = React.useState("Miguel Arredondo");
  const [lastVideo, setLastVideo] = useState([]);
  const [resentVideos, setRecentVideos] = useState([]);

  //Piloto 1
  const [aceleracionLineal1_x, setAceleracionLineal1_x] = useState([]);
  const [aceleracionLineal1_y, setAceleracionLineal1_y] = useState([]);
  const [aceleracionLineal1_z, setAceleracionLineal1_z] = useState([]);
  const [pulsoCardiacoBPM1, setPulsoCardiacoBPM1] = useState([]);
  const [inclinacion1_x, setInclinacion1_x] = useState([]);
  const [inclinacion1_y, setInclinacion1_y] = useState([]);
  const [inclinacion1_z, setInclinacion1_z] = useState([]);	
  const [humedad1, setHumedad1] = useState([]);
  const [intensidadGravitatoria1, setIntensidadGravitatoria1] = useState([]);
  const [intensidadMagnetica1, setIntensidadMagnetica1] = useState([]);
  const [presion1, setPresion1] = useState([]);
  const [temperatura1, setTemperatura1] = useState([]);
  const [velocidadAngular1_x, setVelocidadAngular1_x] = useState([]);
  const [velocidadAngular1_y, setVelocidadAngular1_y] = useState([]);
  const [velocidadAngular1_z, setVelocidadAngular1_z] = useState([]);

  //Piloto 2
  const [pulsoCardiacoBPM2, setPulsoCardiacoBPM2] = useState([]);
  const [aceleracionLineal2_x, setAceleracionLineal2_x] = useState([]);
  const [aceleracionLineal2_y, setAceleracionLineal2_y] = useState([]);
  const [aceleracionLineal2_z, setAceleracionLineal2_z] = useState([]);
  const [inclinacion2_x, setInclinacion2_x] = useState([]);
  const [inclinacion2_y, setInclinacion2_y] = useState([]);
  const [inclinacion2_z, setInclinacion2_z] = useState([]);
  const [humedad2, setHumedad2] = useState([]);
  const [intensidadGravitatoria2, setIntensidadGravitatoria2] = useState([]);
  const [intensidadMagnetica2, setIntensidadMagnetica2] = useState([]);
  const [presion2, setPresion2] = useState([]);
  const [temperatura2, setTemperatura2] = useState([]);
  const [velocidadAngular2_x, setVelocidadAngular2_x] = useState([]);
  const [velocidadAngular2_y, setVelocidadAngular2_y] = useState([]);
  const [velocidadAngular2_z, setVelocidadAngular2_z] = useState([]);

  //Rover
  const [impacto, setImpacto] = useState([]);
  const [inclinacionRover_x, setInclinacionRover_x] = useState([]);
  const [inclinacionRover_y, setInclinacionRover_y] = useState([]);
  const [inclinacionRover_z, setInclinacionRover_z] = useState([]);
  const [vibracion, setVibracion] = useState([]);
  const [concentracionGas, setConcentracionGas] = useState([]);
  const [radiacionUV, setRadiacionUV] = useState([]);
  const [latitud, setLatitud] = useState([]);
  const [longitud, setLongitud] = useState([]);
  const [altitud, setAltitud] = useState([]);

  const handleChange = (event, newIndex) => {
    setActiveIndex(newIndex);
    const section = icons[newIndex].label.toLowerCase(); // Sección en minúsculas
    navigate(`/Data-Dashboard/#${section}`); // Actualizar la URL
    
  };

  const handleChangePiloto = (event) => {
    setPiloto(event.target.value);
  };

  const icons = [
    { label: "Overview", icon: <HomeIcon /> },
    { label: "Rover", icon: <PedalBike /> },
    { label: "Crewmember", icon: <PersonIcon /> },
    { label: "Ambient", icon: <PublicIcon /> },
    { label: "Sensors", icon: <SensorsIcon /> },
    
  ];

  const location = useLocation();
  const navigate = useNavigate();

  

  useEffect(() => {
    const hash = location.hash;
    switch (hash) {
        case "#overview":
            setActiveIndex(0);
            break;
        case "#rover":
            setActiveIndex(1);
            break;
        case "#crewmembers":
            setActiveIndex(2);
            break;
        case "#environment":
            setActiveIndex(3);
            break;
        case "#sensors":
            setActiveIndex(4);
            break;
    }
}, [location.hash]);

  useEffect(() => {
    const id = setInterval(() => {
      setData(getGaugeData());
    }, 3000);

    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (sessionStorage.getItem("lastVideo") === null) {
          await getLastVideo(setLastVideo);
          console.log("Fetching last video from YouTube");
          console.log(lastVideo)
        } else {
          setLastVideo(JSON.parse(sessionStorage.getItem("lastVideo")));
          console.log("Getting last video from session storage");
          console.log(lastVideo)
        }
      } catch (error) {
        console.error("Error in fetchData:", error.message);
      }
    };
  
    fetchData();
  }, []);
  
  //Obtener toda la data de firebase con fetchAllData

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllData();
        setData(data);
        console.log("Toda la data", data);
      } catch (error) {
        console.error("Error in fetchData Firebase All:", error.message);
      }
    };
    fetchData();
  }, []);

  //Obtener los ultimos 5 registros de firebase con fetchLastFiveData

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLastFiveData();
        setDataGrafico(data);
        console.log("Ultima 5", data);
      } catch (error) {
        console.error("Error in fetchData Firebase Last Five:", error.message);
      }
    };
    fetchData();
  }, []);


  // Asignar ahora los ultimos cinco registros
  useEffect(() => {
    const handleData = (snapshot) => {
      const data = [];
      snapshot.forEach((childSnapshot) => {
        data.push(childSnapshot.val());
      });
  
      // Asegúrate de que solo tengas los últimos cinco registros
      const lastTenData = data.slice(-10);

      setDataGrafico(lastTenData);

      //'''''''''''''''''''''asignacion piloto 1''''''''''''''''''''''''''''''''''''

      const aceleracionLineal1_x = lastTenData.map((data) => data.AceleraciónLineal1_X);
      setAceleracionLineal1_x(aceleracionLineal1_x);

      const aceleracionLineal1_y = lastTenData.map((data) => data.AceleraciónLineal1_Y);
      setAceleracionLineal1_y(aceleracionLineal1_y);

      const aceleracionLineal1_z = lastTenData.map((data) => data.AceleraciónLineal1_z);
      setAceleracionLineal1_z(aceleracionLineal1_z);

      const pulsoCardiacoBPM1 = lastTenData.map((data) => data.pulsoCardiacoBPM1);
      setPulsoCardiacoBPM1(pulsoCardiacoBPM1);

      const inclinacion1_x = lastTenData.map((data) => data.inclinacion1_X);
      setInclinacion1_x(inclinacion1_x);

      const inclinacion1_y = lastTenData.map((data) => data.inclinacion1_Y);
      setInclinacion1_y(inclinacion1_y);

      const inclinacion1_z = lastTenData.map((data) => data.inclinacion1_Z);
      setInclinacion1_z(inclinacion1_z);

      const humedad1 = lastTenData.map((data) => data.humedad1);
      setHumedad1(humedad1);

      const intensidadGravitatoria1 = lastTenData.map((data) => data.intensidadGravitatoria1);
      setIntensidadGravitatoria1(intensidadGravitatoria1);

      const intensidadMagnetica1 = lastTenData.map((data) => data.intensidadMagnetica1);
      setIntensidadMagnetica1(intensidadMagnetica1);

      const presion1 = lastTenData.map((data) => data.presion1);
      setPresion1(presion1);

      const temperatura1 = lastTenData.map((data) => data.temperatura1);
      setTemperatura1(temperatura1);

      const velocidadAngular1_x = lastTenData.map((data) => data.velocidadAngular1_X);
      setVelocidadAngular1_x(velocidadAngular1_x);

      const velocidadAngular1_y = lastTenData.map((data) => data.velocidadAngular1_Y);
      setVelocidadAngular1_y(velocidadAngular1_y);

      const velocidadAngular1_z = lastTenData.map((data) => data.velocidadAngular1_Z);
      setVelocidadAngular1_z(velocidadAngular1_z);

      //'''''''''''''''''''''asignacion piloto 2''''''''''''''''''''''''''

      const aceleracionLineal2_x = lastTenData.map((data) => data.AceleraciónLineal2_X);
      setAceleracionLineal2_x(aceleracionLineal2_x);

      const aceleracionLineal2_y = lastTenData.map((data) => data.AceleraciónLineal2_Y);
      setAceleracionLineal2_y(aceleracionLineal2_y);

      const aceleracionLineal2_z = lastTenData.map((data) => data.AceleraciónLineal2_z);
      setAceleracionLineal2_z(aceleracionLineal2_z);

      const pulsoCardiacoBPM2 = lastTenData.map((data) => data.pulsoCardiacoBPM2);
      setPulsoCardiacoBPM2(pulsoCardiacoBPM2);

      const inclinacion2_x = lastTenData.map((data) => data.inclinacion2_X);
      setInclinacion2_x(inclinacion2_x);

      const inclinacion2_y = lastTenData.map((data) => data.inclinacion2_Y);
      setInclinacion2_y(inclinacion2_y);

      const inclinacion2_z = lastTenData.map((data) => data.inclinacion2_Z);
      setInclinacion2_z(inclinacion2_z);

      const humedad2 = lastTenData.map((data) => data.humedad2);
      setHumedad2(humedad2);

      const intensidadGravitatoria2 = lastTenData.map((data) => data.intensidadGravitatoria2);
      setIntensidadGravitatoria2(intensidadGravitatoria2);

      const intensidadMagnetica2 = lastTenData.map((data) => data.intensidadMagnetica2);
      setIntensidadMagnetica2(intensidadMagnetica2);

      const presion2 = lastTenData.map((data) => data.presion2);
      setPresion2(presion2);

      const temperatura2 = lastTenData.map((data) => data.temperatura2);
      setTemperatura2(temperatura2);

      const velocidadAngular2_x = lastTenData.map((data) => data.velocidadAngular2_X);
      setVelocidadAngular2_x(velocidadAngular2_x);

      const velocidadAngular2_y = lastTenData.map((data) => data.velocidadAngular2_Y);
      setVelocidadAngular2_y(velocidadAngular2_y);

      const velocidadAngular2_z = lastTenData.map((data) => data.velocidadAngular2_Z);
      setVelocidadAngular2_z(velocidadAngular2_z);

      //'''''''''''''''''''''asignacion rover''''''''''''''''''''''''''''''''''

      const impacto = lastTenData.map((data) => data.impacto);
      setImpacto(impacto);

      const inclinacionRover_x = lastTenData.map((data) => data.inclinacionRover_X);
      setInclinacionRover_x(inclinacionRover_x);

      const inclinacionRover_y = lastTenData.map((data) => data.inclinacionRover_Y);
      setInclinacionRover_y(inclinacionRover_y);

      const inclinacionRover_z = lastTenData.map((data) => data.inclinacionRover_Z);
      setInclinacionRover_z(inclinacionRover_z);

      const vibracion = lastTenData.map((data) => data.vibracion);
      setVibracion(vibracion);

      const concentracionGas = lastTenData.map((data) => data.ConcentracionGas);
      setConcentracionGas(concentracionGas);

      const radiacionUV = lastTenData.map((data) => data.radiacionUV);
      setRadiacionUV(radiacionUV);

      const latitud = lastTenData.map((data) => data.latitud);
      setLatitud(latitud);

      const longitud = lastTenData.map((data) => data.longitud);
      setLongitud(longitud);

      const altitud = lastTenData.map((data) => data.altitud);
      setAltitud(altitud);

      console.log("Last ten data", concentracionGas);
    };
  
    const ref = database.ref("/temperatura-humedad");
    ref.limitToLast(10).on("value", handleData);
  
    return () => {
      ref.off("value", handleData);
    };
  }, []);


  const style = {
    top: 60,
    left: 220,
    lineHeight: "25px",
    fontSize: "12px",
  };

  const dataChart = [
    {
      name: "Habitabilidad",
      porcentaje: 31.47,
      pv: 2400,
      fill: "#FF4549",
    },
    {
      name: "Eficiencia Energética",
      porcentaje: 26.69,
      pv: 4567,
      fill: "#3BF79D",
    },
    {
      name: "Fatiga del tripulante",
      porcentaje: 15.69,
      pv: 1398,
      fill: "#226BD8",
    },
  ];

  function getRandomNumber() {
    return Math.random() * 100;
  }

  function getGaugeData() {
    return [
      ["Label", "Value"],
      ["Impacto(N)", getRandomNumber()],
    ];
  }

  const gaugeOptions = {

    redFrom: 90,
    redTo: 100,
    yellowFrom: 75,
    yellowTo: 90,
    minorTicks: 5,
  };

  return (
    <div className={activeIndex === 1 ? "data-dashboard-container" : ""}>
      <Container maxWidth="auto" style={{ paddingTop: "50px" }}>
        <BottomNavigation
          value={activeIndex}
          onChange={handleChange}
          showLabels
          
          sx={{
            width: "auto",
            maxWidth: "30%",
            minWidth: "400px",
            margin: "auto", // Centra el menú de navegación
            borderRadius: "30px", // Ajusta el radio de las esquinas
            border: "2px solid #3E4879", // Ajusta el borde del menú de navegación
            backgroundColor: "#1F264B",
            '@media (max-width: 440px)': {
              width: "100%", // Ajusta el ancho al 100% en pantallas pequeñas
              maxWidth: "unset",
              minWidth: "unset", // Elimina el ancho mínimo en pantallas pequeñas
              margin: 0, // Centra el menú de navegación en pantallas pequeñas
              padding: 0,
              borderRadius: "10px",
              border: "2px solid #3E4879"
            }
          }}
        >
          {icons.map((item, index) => (
            <BottomNavigationAction
            
              key={index}
              label={item.label}
              icon={item.icon}
              //Deshabilitar que se muestre grande el icono seleccionado
              
              sx={{ 
                color: "white",
                // pegar los botones mas cuando se ponga pequeño
                minWidth: "20%",
              }}
            />
            
          ))}
        </BottomNavigation>

        <div className="data-dashboard-body">
        <div id="overview">
          {activeIndex === 0 && (
            <Grid
              container={true}
              wrap="wrap"
              justifyContent="space-evenly"
              rowSpacing={4}
            >
              <Grid item xs="auto" order={{ xs: 2, md: 3, lg: 2, xl: 1 }}>
                <div className="crewmembers">
                  <h5 className="crewmembers-title">{"Crewmembers health"}</h5>
                  <FormControl sx={{ m: 1, minWidth: 160 }}>
                    <InputLabel
                      id="demo-simple-select-label"
                      sx={{ color: "white", textAlign: "center" }}
                    >
                      <Typography align="center">Crewmember</Typography>
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={piloto}
                      label="Piloto"
                      onChange={handleChangePiloto}
                      sx={{
                        bgcolor: "#1F264B",
                        border: "2px solid #3E4879",
                        borderRadius: "20px",
                        "& .MuiSelect-select": {
                          padding: "10px",
                          lineHeight: "22px", // Adjust as needed
                          color: "#2196f3", // Cambia el color del texto seleccionado
                          textAlign: "center", // Centra el texto seleccionado
                        },
                      }}
                    >
                      <MenuItem value="Miguel Arredondo">Miguel Arredondo</MenuItem>
                      <MenuItem value="Eridania Pérez">Eridania Pérez</MenuItem>
                    </Select>
                  </FormControl>
                  <div className="crewmembers-health">
                    <img
                      src={Crewmembers}
                      alt="crewmembers"
                      style={{ textAlign: "left" }}
                    />
                    <div className="crewmember-temperatura">
                      <label>
                        {piloto === "Miguel Arredondo"
                          ? pulsoCardiacoBPM1[9]
                          : pulsoCardiacoBPM2[9]}
                      </label>
                      <label
                        style={{
                          fontSize: "16px",
                          color: "#818181",
                          marginLeft: "4px",
                        }}
                      >
                        {" "}
                        bpm
                      </label>
                    </div>
                    <div className="crewmember-oximetro">
                      <label>
                        {piloto === "Migue Arredondo"
                          ? concentracionGas[9]
                          : concentracionGas[9]}
                      </label>
                      <label
                        style={{
                          fontSize: "16px",
                          color: "#818181",
                          marginLeft: "4px",
                        }}
                      >
                        {" "}
                        %
                      </label>
                    </div>
                    <div className="crewmember-radiacion">
                      <label>
                        {piloto === "Miguel Arredondo"
                          ? radiacionUV[9]
                          : radiacionUV[9]}
                      </label>
                      <label
                        style={{
                          fontSize: "16px",
                          color: "#818181",
                          marginLeft: "4px",
                        }}
                      >
                        {" "}
                        mW/cm2
                      </label>
                    </div>
                  </div>
                </div>
                <div className="graph">
                  <TrackGaugeChart />
                </div>
              </Grid>

              <Grid item xs="auto" order={{ xs: 1, md: 1, lg: 1, xl: 2 }}>
                {lastVideo.map((video) => {
                  return (
                    <div className="video-container">
                      <p>{video.url}</p>
                      <iframe
                        title={video.title}
                        src={video.url}
                        frameBorder="0"
                        allowFullScreen
                      />
                    </div>
                  );
                })}
              </Grid>

              <Grid item xs="auto" order={{ xs: 3, md: 3, lg: 3, xl: 3 }}>
                <div className="graph-acceleration">
                  <h5
                    className="crewmembers-title"
                    style={{ marginBottom: "20px" }}
                  >
                    {t("Acceleration")}
                  </h5>
                  <Button
                    variant="contained"
                    endIcon={<NavigateNextIcon />}
                    style={{
                      backgroundColor: "#1F264B",
                      textTransform: "none", // Esto evita que el texto se muestre en mayúsculas
                      border: "2px solid #3E4879",
                      borderRadius: "20px",
                      color: "#2196f3",
                      top: "-5px",
                    }}
                  >
                    Show more
                  </Button>
                  <div className="graph-acceleration-grafico">
                    <LineChart
                      slotProps={{
                        legend: {
                          labelStyle: {
                            fill: "white",
                          },
                        },
                      }}
                      sx={{
                        //change left yAxis label styles
                        "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
                          strokeWidth: "0.4",
                          fill: "white",
                        },
                        // change all labels fontFamily shown on both xAxis and yAxis
                        "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel":
                          {
                            fontFamily: "poppins",
                          },
                        // change bottom label styles
                        "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                          strokeWidth: "0.5",
                          fill: "white",
                        },
                        // bottomAxis Line Styles
                        "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
                          stroke: "white",
                          strokeWidth: 3,
                        },

                        // leftAxis Line Styles
                        "& .MuiChartsAxis-left .MuiChartsAxis-line": {
                          stroke: "white",
                          strokeWidth: 3,
                        },
                        "& .MuiAreaElement-root": {
                          display: "none",
                        },
                        "& .MuiChartsLegend-label": {
                          color: "white",
                          fontSize: "0.8em", // adjust as needed
                        },
                      
                        position: "absolute",
                        zIndex: 1,
                        top: -10,
                      }}
                      xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
                      series={[
                        {
                          data: aceleracionLineal1_x,
                          color: "#0096C7",
                          label: "Ax",
                        },
                        {
                          data: aceleracionLineal1_y,
                          color: "#FF4549",
                          label: "Ay",
                        },
                        {
                          data: aceleracionLineal1_z,
                          color: "#3BF79D",
                          label: "Az",
                        },
                      ]}
                      width={350}
                      height={300}
                    ></LineChart>
                  </div>
                </div>
                <div className="environment-sneakpeek">
                  <iframe
                    src="https://www.google.com/maps/d/u/0/embed?mid=1O7ZBN5Mw5ox-4F7-HyeIVqI7-Vc3ZG4&ehbc=2E312F&noprof=1&t=k"
                    style={{
                      background: <CircularProgress />,
                      borderRadius: "16px",
                      paddingBottom: "10px",
                      paddingRight: "5px",
                    }}
                    className="herc-map"
                    title="Nasa Herc map"
                    id="herc-map"
                  ></iframe>
                </div>
              </Grid>
            </Grid>
          )}
        </div>
        <div id="rover">
          {activeIndex === 1 && (
            <div className="rover-tab">
              <div className="graph-izq">
                <LineChart
                  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                  series={[
                    {
                      data: [2, 5.5, 2, 8.5, 1.5, 5],
                      color: "#0096C7",
                    },
                  ]}
                  sx={{
                    //change left yAxis label styles
                    "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
                      strokeWidth: "0.4",
                      fill: "white",
                    },
                    // change all labels fontFamily shown on both xAxis and yAxis
                    "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel": {
                      fontFamily: "poppins",
                    },
                    // change bottom label styles
                    "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                      strokeWidth: "0.5",
                      fill: "white",
                    },
                    // bottomAxis Line Styles
                    "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
                      stroke: "white",
                      strokeWidth: 3,
                    },
                    // leftAxis Line Styles
                    "& .MuiChartsAxis-left .MuiChartsAxis-line": {
                      stroke: "white",
                      strokeWidth: 3,
                    },
                    "& .MuiAreaElement-root": {
                      display: "none",
                    },
                  }}
                  width={350}
                  height={300}
                ></LineChart>
                <h2>Inclinacion</h2>

                <hr></hr>

                <LineChart
                  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                  series={[
                    {
                      data: [2, 5.5, 2, 8.5, 1.5, 5],
                      color: "#0096C7",
                    },
                  ]}
                  sx={{
                    //change left yAxis label styles
                    "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
                      strokeWidth: "0.4",
                      fill: "white",
                    },
                    // change all labels fontFamily shown on both xAxis and yAxis
                    "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel": {
                      fontFamily: "poppins",
                    },
                    // change bottom label styles
                    "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                      strokeWidth: "0.5",
                      fill: "white",
                    },
                    // bottomAxis Line Styles
                    "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
                      stroke: "white",
                      strokeWidth: 3,
                    },
                    // leftAxis Line Styles
                    "& .MuiChartsAxis-left .MuiChartsAxis-line": {
                      stroke: "white",
                      strokeWidth: 3,
                    },
                    "& .MuiAreaElement-root": {
                      display: "none",
                    },
                  }}
                  width={350}
                  height={300}
                ></LineChart>
                <h2>Vibracion</h2>
              </div>

              <Rover />

              <div className="graph-der">
                <Chart
                  chartType="Gauge"
                  width="100%"
                  height="400px"
                  data={gaugeData}
                  options={gaugeOptions}
                />
              </div>

              <div className="graphs-bot">
                <div style={{ textAlign: "center" }}>
                  <h2>Inclinacion</h2>
                  <LineChart
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                    series={[
                      {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                        color: "#0096C7",
                      },
                    ]}
                    sx={{
                      //change left yAxis label styles
                      "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
                        strokeWidth: "0.4",
                        fill: "white",
                      },
                      // change all labels fontFamily shown on both xAxis and yAxis
                      "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel":
                        {
                          fontFamily: "poppins",
                        },
                      // change bottom label styles
                      "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                        strokeWidth: "0.5",
                        fill: "white",
                      },
                      // bottomAxis Line Styles
                      "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
                        stroke: "white",
                        strokeWidth: 3,
                      },
                      // leftAxis Line Styles
                      "& .MuiChartsAxis-left .MuiChartsAxis-line": {
                        stroke: "white",
                        strokeWidth: 3,
                      },
                      "& .MuiAreaElement-root": {
                        display: "none",
                      },
                    }}
                    width={300}
                    height={300}
                  ></LineChart>
                </div>

                <Chart
                  chartType="Gauge"
                  width="200px"
                  height="200px"
                  data={gaugeData}
                  options={gaugeOptions}
                />

                <div style={{ textAlign: "center" }}>
                  <h2>Vibracion</h2>
                  <LineChart
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                    series={[
                      {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                        color: "#0096C7",
                      },
                    ]}
                    sx={{
                      //change left yAxis label styles
                      "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
                        strokeWidth: "0.4",
                        fill: "white",
                      },
                      // change all labels fontFamily shown on both xAxis and yAxis
                      "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel":
                        {
                          fontFamily: "poppins",
                        },
                      // change bottom label styles
                      "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                        strokeWidth: "0.5",
                        fill: "white",
                      },
                      // bottomAxis Line Styles
                      "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
                        stroke: "white",
                        strokeWidth: 3,
                      },
                      // leftAxis Line Styles
                      "& .MuiChartsAxis-left .MuiChartsAxis-line": {
                        stroke: "white",
                        strokeWidth: 3,
                      },
                      "& .MuiAreaElement-root": {
                        display: "none",
                      },
                    }}
                    width={300}
                    height={300}
                  ></LineChart>
                </div>
              </div>
            </div>
          )}
        </div>
        <div id="crewmembers">
          {activeIndex === 2 && <FrameComponent />}
        </div>
        <div id="sensors">
          {activeIndex === 4 && (
            <Sensors
              data={dataGrafico}
            />
            // <Grid
            //   container
            //   spacing={2}
            //   alignItems="center"
            //   justifyContent={"center"}
            // >
            //   <Grid item xs={12} md={5}>
            //     <Grid container spacing={2} textAlign={"center"}>
            //       <Grid item xs={12}>
            //         <Typography variant="h4">Piloto 1</Typography>
            //       </Grid>
            //       <Grid item xs={12} md={6}>
            //         <List dense>
            //           <ListItem>
            //             <Grid container alignItems="center">
            //               <Grid>
            //                 <ListItemIcon>
            //                   <MdOutlineWbSunny
            //                     fontSize="large"
            //                     style={{ color: "#FFD700" }}
            //                   />
            //                 </ListItemIcon>
            //               </Grid>
            //               <Grid>
            //                 <ListItemText
            //                   primary="Temperatura Relativa"
            //                   secondary={
            //                     <Typography
            //                       variant="body2"
            //                       style={{ color: "#4CAF50" }}
            //                     >
            //                       {temperatura1 + " °C"}
            //                     </Typography>
            //                   }
            //                 />
            //               </Grid>
            //             </Grid>
            //           </ListItem>
            //           <ListItem>
            //             <Grid container alignItems="center">
            //               <Grid item>
            //                 <ListItemIcon>
            //                   <MdOutlineWaterDrop
            //                     fontSize="large"
            //                     style={{ color: "#3498db" }}
            //                   />
            //                 </ListItemIcon>
            //               </Grid>
            //               <Grid item>
            //                 <ListItemText
            //                   primary="Humedad Relativa"
            //                   secondary={
            //                     <Typography
            //                       variant="body2"
            //                       style={{ color: "#4CAF50" }}
            //                     >
            //                       {humedad1 + " %"}
            //                     </Typography>
            //                   }
            //                 />
            //               </Grid>
            //             </Grid>
            //           </ListItem>
            //           <ListItem>
            //             <Grid container alignItems="center">
            //               <Grid item>
            //                 <ListItemIcon>
            //                   <MdOutlineCompress
            //                     fontSize="large"
            //                     style={{ color: "#FF5733" }}
            //                   />
            //                 </ListItemIcon>
            //               </Grid>
            //               <Grid item>
            //                 <ListItemText
            //                   primary="Presión Atmosférica"
            //                   secondary={
            //                     <Typography
            //                       variant="body2"
            //                       style={{ color: "#4CAF50" }}
            //                     >
            //                       {presion1 + " hPa"}
            //                     </Typography>
            //                   }
            //                 />
            //               </Grid>
            //             </Grid>
            //           </ListItem>
            //           <ListItem>
            //             <Grid container alignItems="center">
            //               <Grid item>
            //                 <ListItemIcon>
            //                   <MdOutlineArrowUpward
            //                     fontSize="large"
            //                     style={{ color: "#8E44AD" }}
            //                   />
            //                 </ListItemIcon>
            //               </Grid>
            //               <Grid item>
            //                 <ListItemText
            //                   primary="Pulso Cardiaco"
            //                   secondary={
            //                     <Typography
            //                       variant="body2"
            //                       style={{ color: "#4CAF50" }}
            //                     >
            //                       {pulsoCardiacoBPM1 + " bpm"}
            //                     </Typography>
            //                   }
            //                 />
            //               </Grid>
            //             </Grid>
            //           </ListItem>
            //           <ListItem>
            //             <Grid container alignItems="center">
            //               <Grid item>
            //                 <ListItemIcon>
            //                   <MdOutlineArrowUpward
            //                     fontSize="large"
            //                     style={{ color: "#8E44AD" }}
            //                   />
            //                 </ListItemIcon>
            //               </Grid>
            //               <Grid item>
            //                 <ListItemText
            //                   primary="Aceleracion lineal X"
            //                   secondary={
            //                     <Typography
            //                       variant="body2"
            //                       style={{ color: "#4CAF50" }}
            //                     >
            //                       {aceleracionLineal1_x + " m/s²"}
            //                     </Typography>
            //                   }
            //                 />
            //               </Grid>
            //             </Grid>
            //           </ListItem>
            //           <ListItem>
            //             <Grid container alignItems="center">
            //               <Grid item>
            //                 <ListItemIcon>
            //                   <MdOutlineArrowUpward
            //                     fontSize="large"
            //                     style={{ color: "#8E44AD" }}
            //                   />
            //                 </ListItemIcon>
            //               </Grid>
            //               <Grid item>
            //                 <ListItemText
            //                   primary="Aceleracion lineal Y"
            //                   secondary={
            //                     <Typography
            //                       variant="body2"
            //                       style={{ color: "#4CAF50" }}
            //                     >
            //                       {aceleracionLineal1_y + " m/s²"}
            //                     </Typography>
            //                   }
            //                 />
            //               </Grid>
            //             </Grid>
            //           </ListItem>
            //           <ListItem>
            //             <Grid container alignItems="center">
            //               <Grid item>
            //                 <ListItemIcon>
            //                   <MdOutlineArrowUpward
            //                     fontSize="large"
            //                     style={{ color: "#8E44AD" }}
            //                   />
            //                 </ListItemIcon>
            //               </Grid>
            //               <Grid item>
            //                 <ListItemText
            //                   primary="Aceleracion lineal Z"
            //                   secondary={
            //                     <Typography
            //                       variant="body2"
            //                       style={{ color: "#4CAF50" }}
            //                     >
            //                       {aceleracionLineal1_z + " m/s²"}
            //                     </Typography>
            //                   }
            //                 />
            //               </Grid>
            //             </Grid>
            //           </ListItem>
            //         </List>
            //       </Grid>
            //       <Grid item xs={10} md={6}>
            //         <List dense>
            //           <ListItem>
            //             <Grid container alignItems="center">
            //               <Grid>
            //                 <ListItemIcon>
            //                   <MdOutlineWbSunny
            //                     fontSize="large"
            //                     style={{ color: "#FFD700" }}
            //                   />
            //                 </ListItemIcon>
            //               </Grid>
            //               <Grid>
            //                 <ListItemText
            //                   primary="Velocidad Angular X"
            //                   secondary={
            //                     <Typography
            //                       variant="body2"
            //                       style={{ color: "#4CAF50" }}
            //                     >
            //                       {velocidadAngular1_x + " rad/s"}
            //                     </Typography>
            //                   }
            //                 />
            //               </Grid>
            //             </Grid>
            //           </ListItem>
            //           <ListItem>
            //             <Grid container alignItems="center">
            //               <Grid item>
            //                 <ListItemIcon>
            //                   <MdOutlineWaterDrop
            //                     fontSize="large"
            //                     style={{ color: "#3498db" }}
            //                   />
            //                 </ListItemIcon>
            //               </Grid>
            //               <Grid item>
            //                 <ListItemText
            //                   primary="Velocidad Angular Y"
            //                   secondary={
            //                     <Typography
            //                       variant="body2"
            //                       style={{ color: "#4CAF50" }}
            //                     >
            //                       {velocidadAngular1_y + " rad/s"}
            //                     </Typography>
            //                   }
            //                 />
            //               </Grid>
            //             </Grid>
            //           </ListItem>
            //           <ListItem>
            //             <Grid container alignItems="center">
            //               <Grid>
            //                 <ListItemIcon>
            //                   <MdOutlineWbSunny
            //                     fontSize="large"
            //                     style={{ color: "#FFD700" }}
            //                   />
            //                 </ListItemIcon>
            //               </Grid>
            //               <Grid>
            //                 <ListItemText
            //                   primary="Velocidad Angular z"
            //                   secondary={
            //                     <Typography
            //                       variant="body2"
            //                       style={{ color: "#4CAF50" }}
            //                     >
            //                       {velocidadAngular1_z + " rad/s"}
            //                     </Typography>
            //                   }
            //                 />
            //               </Grid>
            //             </Grid>
            //           </ListItem>
            //           <ListItem>
            //             <Grid container alignItems="center">
            //               <Grid item>
            //                 <ListItemIcon>
            //                   <MdOutlineCompress
            //                     fontSize="large"
            //                     style={{ color: "#FF5733" }}
            //                   />
            //                 </ListItemIcon>
            //               </Grid>
            //               <Grid item>
            //                 <ListItemText
            //                   primary="Inclinación piloto X"
            //                   secondary={
            //                     <Typography
            //                       variant="body2"
            //                       style={{ color: "#4CAF50" }}
            //                     >
            //                       {inclinacion1_x + " º"}
            //                     </Typography>
            //                   }
            //                 />
            //               </Grid>
            //             </Grid>
            //           </ListItem>
            //           <ListItem>
            //             <Grid container alignItems="center">
            //               <Grid item>
            //                 <ListItemIcon>
            //                   <MdOutlineCompress
            //                     fontSize="large"
            //                     style={{ color: "#FF5733" }}
            //                   />
            //                 </ListItemIcon>
            //               </Grid>
            //               <Grid item>
            //                 <ListItemText
            //                   primary="Inclinación piloto Y"
            //                   secondary={
            //                     <Typography
            //                       variant="body2"
            //                       style={{ color: "#4CAF50" }}
            //                     >
            //                       {inclinacion1_y + " º"}
            //                     </Typography>
            //                   }
            //                 />
            //               </Grid>
            //             </Grid>
            //           </ListItem>
            //           <ListItem>
            //             <Grid container alignItems="center">
            //               <Grid item>
            //                 <ListItemIcon>
            //                   <MdOutlineCompress
            //                     fontSize="large"
            //                     style={{ color: "#FF5733" }}
            //                   />
            //                 </ListItemIcon>
            //               </Grid>
            //               <Grid item>
            //                 <ListItemText
            //                   primary="Inclinación piloto Z"
            //                   secondary={
            //                     <Typography
            //                       variant="body2"
            //                       style={{ color: "#4CAF50" }}
            //                     >
            //                       {inclinacion1_z + " º"}
            //                     </Typography>
            //                   }
            //                 />
            //               </Grid>
            //             </Grid>
            //           </ListItem>
            //           <ListItem>
            //             <Grid container alignItems="center">
            //               <Grid item>
            //                 <ListItemIcon>
            //                   <MdOutlineArrowUpward
            //                     fontSize="large"
            //                     style={{ color: "#8E44AD" }}
            //                   />
            //                 </ListItemIcon>
            //               </Grid>
            //               <Grid item>
            //                 <ListItemText
            //                   primary="Intensidad magnética"
            //                   secondary={
            //                     <Typography
            //                       variant="body2"
            //                       style={{ color: "#4CAF50" }}
            //                     >
            //                       {intensidadMagnetica1 + " µT"}
            //                     </Typography>
            //                   }
            //                 />
            //               </Grid>
            //             </Grid>
            //           </ListItem>
            //         </List>
            //       </Grid>
            //     </Grid>
            //   </Grid>
            //   <Grid item xs={12} md={5}>
            //     <Grid container spacing={2}>
            //       <Grid item xs={12}>
            //         <Typography variant="h4" align="center">
            //           Piloto 2
            //         </Typography>
            //       </Grid>
            //       <Grid item xs={12} md={6}>
            //         <List dense>
            //           <ListItem>
            //             <Grid container alignItems="center">
            //               <Grid>
            //                 <ListItemIcon>
            //                   <MdOutlineWbSunny
            //                     fontSize="large"
            //                     style={{ color: "#FFD700" }}
            //                   />
            //                 </ListItemIcon>
            //               </Grid>
            //               <Grid>
            //                 <ListItemText
            //                   primary="Temperatura Relativa"
            //                   secondary={
            //                     <Typography
            //                       variant="body2"
            //                       style={{ color: "#4CAF50" }}
            //                     >
            //                       {temperatura2 + " °C"}
            //                     </Typography>
            //                   }
            //                 />
            //               </Grid>
            //             </Grid>
            //           </ListItem>
            //           <ListItem>
            //             <Grid container alignItems="center">
            //               <Grid item>
            //                 <ListItemIcon>
            //                   <MdOutlineWaterDrop
            //                     fontSize="large"
            //                     style={{ color: "#3498db" }}
            //                   />
            //                 </ListItemIcon>
            //               </Grid>
            //               <Grid item>
            //                 <ListItemText
            //                   primary="Humedad Relativa"
            //                   secondary={
            //                     <Typography
            //                       variant="body2"
            //                       style={{ color: "#4CAF50" }}
            //                     >
            //                       {humedad2 + " %"}
            //                     </Typography>
            //                   }
            //                 />
            //               </Grid>
            //             </Grid>
            //           </ListItem>
            //           <ListItem>
            //             <Grid container alignItems="center">
            //               <Grid item>
            //                 <ListItemIcon>
            //                   <MdOutlineCompress
            //                     fontSize="large"
            //                     style={{ color: "#FF5733" }}
            //                   />
            //                 </ListItemIcon>
            //               </Grid>
            //               <Grid item>
            //                 <ListItemText
            //                   primary="Presión Atmosférica"
            //                   secondary={
            //                     <Typography
            //                       variant="body2"
            //                       style={{ color: "#4CAF50" }}
            //                     >
            //                       {presion2 + " hPa"}
            //                     </Typography>
            //                   }
            //                 />
            //               </Grid>
            //             </Grid>
            //           </ListItem>
            //           <ListItem>
            //             <Grid container alignItems="center">
            //               <Grid item>
            //                 <ListItemIcon>
            //                   <MdOutlineArrowUpward
            //                     fontSize="large"
            //                     style={{ color: "#8E44AD" }}
            //                   />
            //                 </ListItemIcon>
            //               </Grid>
            //               <Grid item>
            //                 <ListItemText
            //                   primary="Pulso Cardiaco"
            //                   secondary={
            //                     <Typography
            //                       variant="body2"
            //                       style={{ color: "#4CAF50" }}
            //                     >
            //                       {pulsoCardiacoBPM2 + " bpm"}
            //                     </Typography>
            //                   }
            //                 />
            //               </Grid>
            //             </Grid>
            //           </ListItem>
            //           <ListItem>
            //             <Grid container alignItems="center">
            //               <Grid item>
            //                 <ListItemIcon>
            //                   <MdOutlineArrowUpward
            //                     fontSize="large"
            //                     style={{ color: "#8E44AD" }}
            //                   />
            //                 </ListItemIcon>
            //               </Grid>
            //               <Grid item>
            //                 <ListItemText
            //                   primary="Aceleracion lineal"
            //                   secondary={
            //                     <Typography
            //                       variant="body2"
            //                       style={{ color: "#4CAF50" }}
            //                     >
            //                       {aceleracionLineal2 + " m/s²"}
            //                     </Typography>
            //                   }
            //                 />
            //               </Grid>
            //             </Grid>
            //           </ListItem>
            //         </List>
            //       </Grid>
            //       <Grid item xs={10} md={6}>
            //         <List dense>
            //           <ListItem>
            //             <Grid container alignItems="center">
            //               <Grid>
            //                 <ListItemIcon>
            //                   <MdOutlineWbSunny
            //                     fontSize="large"
            //                     style={{ color: "#FFD700" }}
            //                   />
            //                 </ListItemIcon>
            //               </Grid>
            //               <Grid>
            //                 <ListItemText
            //                   primary="RadiacionUV"
            //                   secondary={
            //                     <Typography
            //                       variant="body2"
            //                       style={{ color: "#4CAF50" }}
            //                     >
            //                       {radiacionUV1 + " mw/cm²"}
            //                     </Typography>
            //                   }
            //                 />
            //               </Grid>
            //             </Grid>
            //           </ListItem>
            //           <ListItem>
            //             <Grid container alignItems="center">
            //               <Grid item>
            //                 <ListItemIcon>
            //                   <MdOutlineWaterDrop
            //                     fontSize="large"
            //                     style={{ color: "#3498db" }}
            //                   />
            //                 </ListItemIcon>
            //               </Grid>
            //               <Grid item>
            //                 <ListItemText
            //                   primary="Velocidad Angular"
            //                   secondary={
            //                     <Typography
            //                       variant="body2"
            //                       style={{ color: "#4CAF50" }}
            //                     >
            //                       {velocidadAngular2 + " rad/s"}
            //                     </Typography>
            //                   }
            //                 />
            //               </Grid>
            //             </Grid>
            //           </ListItem>
            //           <ListItem>
            //             <Grid container alignItems="center">
            //               <Grid item>
            //                 <ListItemIcon>
            //                   <MdOutlineCompress
            //                     fontSize="large"
            //                     style={{ color: "#FF5733" }}
            //                   />
            //                 </ListItemIcon>
            //               </Grid>
            //               <Grid item>
            //                 <ListItemText
            //                   primary="Inclinación piloto"
            //                   secondary={
            //                     <Typography
            //                       variant="body2"
            //                       style={{ color: "#4CAF50" }}
            //                     >
            //                       {inclinacion2_x + " º"}
            //                     </Typography>
            //                   }
            //                 />
            //               </Grid>
            //             </Grid>
            //           </ListItem>
            //           <ListItem>
            //             <Grid container alignItems="center">
            //               <Grid item>
            //                 <ListItemIcon>
            //                   <MdOutlineArrowUpward
            //                     fontSize="large"
            //                     style={{ color: "#8E44AD" }}
            //                   />
            //                 </ListItemIcon>
            //               </Grid>
            //               <Grid item>
            //                 <ListItemText
            //                   primary="Intensidad Gravitatoria"
            //                   secondary={
            //                     <Typography
            //                       variant="body2"
            //                       style={{ color: "#4CAF50" }}
            //                     >
            //                       {intensidadGravitatoria2 + " N/kg"}
            //                     </Typography>
            //                   }
            //                 />
            //               </Grid>
            //             </Grid>
            //           </ListItem>
            //           <ListItem>
            //             <Grid container alignItems="center">
            //               <Grid item>
            //                 <ListItemIcon>
            //                   <MdOutlineArrowUpward
            //                     fontSize="large"
            //                     style={{ color: "#8E44AD" }}
            //                   />
            //                 </ListItemIcon>
            //               </Grid>
            //               <Grid item>
            //                 <ListItemText
            //                   primary="Intensidad magnética"
            //                   secondary={
            //                     <Typography
            //                       variant="body2"
            //                       style={{ color: "#4CAF50" }}
            //                     >
            //                       {intensidadMagnetica2 + " µT"}
            //                     </Typography>
            //                   }
            //                 />
            //               </Grid>
            //             </Grid>
            //           </ListItem>
            //         </List>
            //       </Grid>
            //     </Grid>
            //   </Grid>
            //   <Grid item xs={12} md={3}>
            //     <Grid item xs={12}>
            //       <Typography variant="h4" align="center">
            //         Rover
            //       </Typography>
            //     </Grid>
            //     <List dense>
            //       <ListItem>
            //         <Grid container alignItems="center">
            //           <Grid>
            //             <ListItemIcon>
            //               <MdOutlineArrowUpward
            //                 fontSize="large"
            //                 style={{ color: "#8E44AD" }}
            //               />
            //             </ListItemIcon>
            //           </Grid>
            //           <Grid>
            //             <ListItemText
            //               primary="Impacto"
            //               secondary={
            //                 <Typography
            //                   variant="body2"
            //                   style={{ color: "#4CAF50" }}
            //                 >
            //                   {impacto + " N"}
            //                 </Typography>
            //               }
            //             />
            //           </Grid>
            //         </Grid>
            //       </ListItem>
            //       <ListItem>
            //         <Grid container alignItems="center">
            //           <Grid>
            //             <ListItemIcon>
            //               <MdOutlineArrowUpward
            //                 fontSize="large"
            //                 style={{ color: "#8E44AD" }}
            //               />
            //             </ListItemIcon>
            //           </Grid>
            //           <Grid>
            //             <ListItemText
            //               primary="Inclinación Rover"
            //               secondary={
            //                 <Typography
            //                   variant="body2"
            //                   style={{ color: "#4CAF50" }}
            //                 >
            //                   {inclinacionRover_x + " °"}
            //                 </Typography>
            //               }
            //             />
            //           </Grid>
            //         </Grid>
            //       </ListItem>
            //       <ListItem>
            //         <Grid container alignItems="center">
            //           <Grid>
            //             <ListItemIcon>
            //               <MdOutlineArrowUpward
            //                 fontSize="large"
            //                 style={{ color: "#8E44AD" }}
            //               />
            //             </ListItemIcon>
            //           </Grid>
            //           <Grid>
            //             <ListItemText
            //               primary="Vibración"
            //               secondary={
            //                 <Typography
            //                   variant="body2"
            //                   style={{ color: "#4CAF50" }}
            //                 >
            //                   {vibracion + " Hz"}
            //                 </Typography>
            //               }
            //             />
            //           </Grid>
            //         </Grid>
            //       </ListItem>
            //     </List>
            //   </Grid>
            // </Grid>
          )}
        </div>
        <div id="environment">
          {activeIndex === 3 && <FrameComponentAmbient/>}
        </div>
        </div>
      </Container>
    </div>
  );
};

export default DataDashboard;
