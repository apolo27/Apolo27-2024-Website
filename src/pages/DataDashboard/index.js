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


const DataDashboard = (props) => {
  let t = props.t;
  const [gaugeData, setGaugeData] = useState(getGaugeData);

  const [data, setData] = useState(null);
  const [dataGrafico, setDataGrafico] = useState(null);
  const [processedData, setProcessedData] = useState([]);
  const [surroundingTemp, setSurroundingTemp] = useState(61);

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [piloto, setPiloto] = React.useState("Angello Ortiz");
  const [lastVideo, setLastVideo] = useState([]);
  const [resentVideos, setRecentVideos] = useState([]);

  //Piloto 1
  const [aceleracionLineal1, setAceleracionLineal1] = useState(0);
  const [aceleracionLineal1_x, setAceleracionLineal1_x] = useState([]);
  const [aceleracionLineal1_y, setAceleracionLineal1_y] = useState([]);
  const [aceleracionLineal1_z, setAceleracionLineal1_z] = useState([]);
  const [pulsoCardiacoBPM1, setPulsoCardiacoBPM1] = useState(0);
  const [inclinacion1, setInclinacion1] = useState(0);
  const [inclinacion1_x, setInclinacion1_x] = useState([]);
  const [inclinacion1_y, setInclinacion1_y] = useState([]);
  const [inclinacion1_z, setInclinacion1_z] = useState([]);	
  const [humedad1, setHumedad1] = useState(0);
  const [intensidadGravitatoria1, setIntensidadGravitatoria1] = useState(0);
  const [intensidadMagnetica1, setIntensidadMagnetica1] = useState(0);
  const [presion1, setPresion1] = useState(0);
  const [temperatura1, setTemperatura1] = useState(0);
  const [velocidadAngular1, setVelocidadAngular1] = useState(0);
  const [velocidadAngular1_x, setVelocidadAngular1_x] = useState([]);
  const [velocidadAngular1_y, setVelocidadAngular1_y] = useState([]);
  const [velocidadAngular1_z, setVelocidadAngular1_z] = useState([]);
  const [aceleracionGrafico, setAceleracionGrafico] = useState([]);

  //Piloto 2
  const [pulsoCardiacoBPM2, setPulsoCardiacoBPM2] = useState(0);
  const [aceleracionLineal2, setAceleracionLineal2] = useState(0);
  const [aceleracionLineal2_x, setAceleracionLineal2_x] = useState([]);
  const [aceleracionLineal2_y, setAceleracionLineal2_y] = useState([]);
  const [aceleracionLineal2_z, setAceleracionLineal2_z] = useState([]);
  const [inclinacion2_x, setInclinacion2_x] = useState([]);
  const [inclinacion2_y, setInclinacion2_y] = useState([]);
  const [inclinacion2_z, setInclinacion2_z] = useState([]);
  const [humedad2, setHumedad2] = useState(0);
  const [intensidadGravitatoria2, setIntensidadGravitatoria2] = useState(0);
  const [intensidadMagnetica2, setIntensidadMagnetica2] = useState(0);
  const [presion2, setPresion2] = useState(0);
  const [temperatura2, setTemperatura2] = useState(0);
  const [velocidadAngular2, setVelocidadAngular2] = useState(0);
  const [velocidadAngular2_x, setVelocidadAngular2_x] = useState([]);
  const [velocidadAngular2_y, setVelocidadAngular2_y] = useState([]);
  const [velocidadAngular2_z, setVelocidadAngular2_z] = useState([]);

  //Rover
  const [impacto, setImpacto] = useState(0);
  const [inclinacionRover_x, setInclinacionRover_x] = useState([]);
  const [inclinacionRover_y, setInclinacionRover_y] = useState([]);
  const [inclinacionRover_z, setInclinacionRover_z] = useState([]);
  const [vibracion, setVibracion] = useState(0);
  const [concentracionGas1, setConcentracionGas1] = useState(0);
  const [radiacionUV1, setRadiacionUV1] = useState(0);
  const [latitud, setLatitud] = useState(0);
  const [longitud, setLongitud] = useState(0);
  const [altitud, setAltitud] = useState(0);

  const handleChange = (event, newIndex) => {
    setActiveIndex(newIndex);
  };

  const handleChangePiloto = (event) => {
    setPiloto(event.target.value);
  };

  const icons = [
    { label: "Overview", icon: <HomeIcon /> },
    { label: "Rover", icon: <PedalBike /> },
    { label: "Pilot", icon: <PersonIcon /> },
    { label: "Ambient", icon: <BarChartIcon /> },
    { label: "Sensors", icon: <BarChartIcon /> },
    
  ];

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

  // asignar valores y mantenerlos actualizados

  useEffect(() => {
    const handleData = (snapshot) => {
      const data = snapshot.val();
      
      console.log(data)
      console.log(data.inclinacion2)

      if (data) {
        let lastEntryKey;
        let lastEntryData;

        snapshot.forEach((childSnapshot) => {
          lastEntryKey = childSnapshot.key;
          lastEntryData = childSnapshot.val();
        });

        setProcessedData({
          key: lastEntryKey,
          value: lastEntryData,
        });

        //asignacion piloto 1
        setPulsoCardiacoBPM1(lastEntryData.pulsoCardiacoBPM1);
        setAceleracionLineal1(lastEntryData.AceleraciónLineal1);
        setInclinacion1(lastEntryData.inclinacion1);
        setHumedad1(lastEntryData.humedad1);
        setIntensidadGravitatoria1(lastEntryData.intensidadGravitatoria1);
        setIntensidadMagnetica1(lastEntryData.intensidadMagnetica1);
        setPresion1(lastEntryData.presion1);
        setTemperatura1(lastEntryData.temperatura1);
        setVelocidadAngular1(lastEntryData.velocidadAngular1);

        //asignacion piloto 2
        setPulsoCardiacoBPM2(lastEntryData.pulsoCardiacoBPM2);
        setAceleracionLineal2(lastEntryData.AceleraciónLineal2);
        setInclinacion2_x(lastEntryData.inclinacion2);
        setHumedad2(lastEntryData.humedad2);
        setIntensidadGravitatoria2(lastEntryData.intensidadGravitatoria2);
        setIntensidadMagnetica2(lastEntryData.intensidadMagnetica2);
        setPresion2(lastEntryData.presion2);
        setTemperatura2(lastEntryData.temperatura2);
        setVelocidadAngular2(lastEntryData.velocidadAngular2);

        //asignacion rover
        setImpacto(lastEntryData.impacto);
        setInclinacionRover_x(lastEntryData.inclinacionRover);
        setVibracion(lastEntryData.vibracion);
        setConcentracionGas1(lastEntryData.ConcentracionGas1);
        setRadiacionUV1(lastEntryData.radiacionUV1);
      }

      
    };

    database.ref("/temperatura-humedad").on("value", handleData);

    return () => {
      database.ref("/temperatura-humedad").off("value", handleData);
    };
  }, []);

  // Asignar ahora los ultimos cinco registros
  useEffect(() => {
    const handleData = (snapshot) => {
      const data = [];
      snapshot.forEach((childSnapshot) => {
        data.push(childSnapshot.val());
      });
  
      // Asegúrate de que solo tengas los últimos cinco registros
      const lastFiveData = data.slice(-5);
  
      setDataGrafico(lastFiveData);

      const aceleracionData = lastFiveData.map((data) => data.AceleraciónLineal2);
      console.log(aceleracionData)
      setAceleracionGrafico(aceleracionData);
    };
  
    const ref = database.ref("/temperatura-humedad");
    ref.limitToLast(5).on("value", handleData);
  
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
                      <MenuItem value="Angello Ortiz">Miguel Arredondo</MenuItem>
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
                        {piloto === "Angello Ortiz"
                          ? pulsoCardiacoBPM1
                          : pulsoCardiacoBPM2}
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
                        {piloto === "Angello Ortiz"
                          ? concentracionGas1
                          : concentracionGas1}
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
                        {piloto === "Angello Ortiz"
                          ? radiacionUV1
                          : radiacionUV1}
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
                      xAxis={[{ data: [1, 2, 3, 4, 5, 6] }]}
                      series={[
                        {
                          data: aceleracionGrafico,
                          color: "#0096C7",
                          label: "Ax",
                        },
                        {
                          data: [2, 5.5, 2, 8.5, 1.5, 5],
                          color: "#FF4549",
                          label: "Ay",
                        },
                        {
                          data: [1, 3, 5, 7, 9, 11],
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
          {activeIndex === 2 && <FrameComponent />}
          {activeIndex === 4 && (
            <Sensors/>
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
          {activeIndex === 3 && <FrameComponentAmbient/>}
          
        </div>
           {/*
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sensor</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        {
          processedData.map((data) => {
            return(
              <tr key={data.key}>
                <td>{data.key}</td>
                <td>{data.value}</td>
              </tr>
            )
          })
        }
      </tbody>
      </Table>
      */}
      </Container>
    </div>
  );
};

export default DataDashboard;
