import FrameComponent from './DataDashboardTripulante/src/components/BottonLine';
import './DataDashboardTripulante/src/global.css';
import "./DataDashboard.css";
import React, { useEffect, useState } from "react";
import database from "../../services/firebase";
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

import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

import tempIcon from "../../imgs/DataDashboard/tempIcon.png";
import Crewmembers from "../../imgs/DataDashboard/Frame Crewmembers.svg";
import { set } from "lodash";
import { borderRadius } from "@mui/system";
import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";
import { getLastVideo, getRecentVideos } from "../../services/FetchYTVideos";
import YouTube from "react-youtube";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { axisClasses } from "@mui/x-charts";

function Model(props) {
  const { scene } = useGLTF("./rover.glb");
  return <primitive object={scene} {...props} />;
}

const DataDashboard = (props) => {
  let t = props.t;
  const [data, setData] = useState(null);
  const [processedData, setProcessedData] = useState([]);
  const [surroundingTemp, setSurroundingTemp] = useState(61);
  const [temperatura1, setTemperatura1] = useState(0);
  const [humedadRelativa1, setHumedadRelativa1] = useState(0);
  const [presionAtmosferica1, setPresionAtmosferica1] = useState(0);
  const [alturaSobreNivelDelMar1, setAlturaSobreNivelDelMar1] = useState(0);
  const [temperatura2, setTemperatura2] = useState(0);
  const [humedadRelativa2, setHumedadRelativa2] = useState(0);
  const [presionAtmosferica2, setPresionAtmosferica2] = useState(0);
  const [alturaSobreNivelDelMar2, setAlturaSobreNivelDelMar2] = useState(0);
  const [temperatura, setTemperatura] = useState(0);
  const [humedad, setHumedad] = useState(0);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [piloto, setPiloto] = React.useState("Angello Ortiz");
  const [lastVideo, setLastVideo] = useState([]);
  const [resentVideos, setRecentVideos] = useState([]);

  const handleChange = (event, newIndex) => {
    setActiveIndex(newIndex);
  };

  const handleChangePiloto = (event) => {
    setPiloto(event.target.value);
  };

  const icons = [
    { label: "Overview", icon: <HomeIcon /> },
    { label: "Rover", icon: <PedalBike /> },
    { label: "Tripulante", icon: <PersonIcon /> },
    { label: "Sensors", icon: <BarChartIcon /> },
  ];

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

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Assuming we have a 'data' node in our database
        const snapshot = await database
          .ref("/temperatura-humedad")
          .orderByKey()
          .limitToLast(1)
          .once("value");
        const dataFromDatabase = snapshot.val();
        setData(dataFromDatabase);
        console.log("Data from Firebase:", dataFromDatabase);
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchData();
  }, []);

  // Configurar el listener 'on' para la ubicación /temperatura-humedad
  useEffect(() => {
    const onDataChange = (snapshot) => {
      const dataFromDatabase = snapshot.val();
      setData(dataFromDatabase);
      console.log("Data from Firebase:", dataFromDatabase);

      if (dataFromDatabase) {
        let lastEntryKey;
        let lastEntryData;

        snapshot.forEach((childSnapshot) => {
          lastEntryKey = childSnapshot.key;
          lastEntryData = childSnapshot.val();
        });

        // Procesar los datos directamente
        setProcessedData({
          key: lastEntryKey,
          value: lastEntryData,
        });

        // Acceder a los valores de temperatura y humedad y parsearlos como números
        setTemperatura1(parseFloat(lastEntryData.temperatura1));
        setHumedadRelativa1(parseFloat(lastEntryData.humedadRelativa1));
        setPresionAtmosferica1(parseFloat(lastEntryData.presionAtmosferica1));
        setAlturaSobreNivelDelMar1(
          parseFloat(lastEntryData.alturaSobreNivelDelMar1)
        );
        setTemperatura2(parseFloat(lastEntryData.temperatura2));
        setHumedadRelativa2(parseFloat(lastEntryData.humedadRelativa2));
        setPresionAtmosferica2(parseFloat(lastEntryData.presionAtmosferica2));
        setAlturaSobreNivelDelMar2(
          parseFloat(lastEntryData.alturaSobreNivelDelMar2)
        );

        setTimeout(() => {
          console.log("Temperatura1:", temperatura1.toFixed(2));
          console.log("Humedad1:", humedadRelativa1.toFixed(2));
          console.log("Presion1:", presionAtmosferica1.toFixed(2));
          console.log("Altura1:", alturaSobreNivelDelMar1.toFixed(2));
          console.log("Temperatura2:", temperatura2.toFixed(2));
          console.log("Humedad2:", humedadRelativa2.toFixed(2));
          console.log("Presion2:", presionAtmosferica2.toFixed(2));
          console.log("Altura2:", alturaSobreNivelDelMar2.toFixed(2));
        }, 5);
      }
    };

    const databaseRef = database.ref("/temperatura-humedad");
    databaseRef.on("value", onDataChange);

    // Devuelve una función de limpieza para desregistrar el listener cuando el componente se desmonta
    return () => {
      databaseRef.off("value", onDataChange);
    };
  }, []); // El segundo parámetro del useEffect es un array vacío para que se ejecute solo una vez al montar el componente

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

  return (
    <Container maxWidth="auto" style={{ marginTop: "50px" }}>
      <BottomNavigation
        value={activeIndex}
        onChange={handleChange}
        showLabels
        sx={{
          width: "auto",
          maxWidth: "30%",
          minWidth: "350px",
          margin: "auto", // Centra el menú de navegación
          borderRadius: "30px", // Ajusta el radio de las esquinas
          border: "2px solid #3E4879", // Ajusta el borde del menú de navegación
          backgroundColor: "#1F264B",
        }}
      >
        {icons.map((item, index) => (
          <BottomNavigationAction
            key={index}
            label={item.label}
            icon={item.icon}
            sx={{ color: "white" }}
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
                    <MenuItem value="Angello Ortiz">Angello Ortiz</MenuItem>
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
                      {piloto === "Angello Ortiz" ? temperatura1 : temperatura2}
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
                      {piloto === "Angello Ortiz" ? temperatura1 : temperatura2}
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
                      {piloto === "Angello Ortiz" ? temperatura1 : temperatura2}
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
                <h5 className="crewmembers-title">{"Ambient Reaction"}</h5>

                <RadialBarChart
                  className="crewmembers-health"
                  width={250}
                  height={250}
                  innerRadius={40}
                  outerRadius={110}
                  barSize={8}
                  data={dataChart}
                  cx={110}
                >
                  <RadialBar background clockWise={true} dataKey="porcentaje" />

                  <Legend
                    iconSize={10}
                    width={120}
                    height={140}
                    layout="vertical"
                    verticalAlign="middle"
                    wrapperStyle={style}
                  />
                  <Tooltip />
                </RadialBarChart>
              </div>
            </Grid>

            <Grid item xs="auto" order={{ xs: 1, md: 1, lg: 1, xl: 2 }}>
              {/* <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1O7ZBN5Mw5ox-4F7-HyeIVqI7-Vc3ZG4&ehbc=2E312F&noprof=1"
                style={{ background: <CircularProgress /> }}
                className="herc-map"
                title="Nasa Herc map"
                id="herc-map"
              ></iframe> */}
              {/* Incrustar video reciente*/}
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
                
              })

              }
            </Grid>

            <Grid item xs="auto" order={{ xs: 3, md: 3, lg: 3, xl: 3 }}>
              <div className="graph-acceleration">
                <h5 className="crewmembers-title" style={{marginBottom:"20px"}}>{t("Acceleration")}</h5>
                <Button 
                  variant="contained" 
                  endIcon={<NavigateNextIcon/>}
                  style={{
                    backgroundColor: '#1F264B',
                    textTransform: 'none', // Esto evita que el texto se muestre en mayúsculas
                    border: "2px solid #3E4879",
                    borderRadius: "20px",
                    color: '#2196f3'
                    
                  }}
                >
                  Show more
                </Button>
                <div className="graph-acceleration-grafico">
                <LineChart
                  sx={{
                    //change left yAxis label styles
                    "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel":{
                      strokeWidth:"0.4",
                      fill:"white"
                    },
                   // change all labels fontFamily shown on both xAxis and yAxis
                   "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel":{
                      fontFamily: "poppins",
                    },
                    // change bottom label styles
                    "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel":{
                      strokeWidth:"0.5",
                      fill:"white"
                    },
                      // bottomAxis Line Styles
                    "& .MuiChartsAxis-bottom .MuiChartsAxis-line":{
                      stroke:"white",
                      strokeWidth:3

                    },
                     // leftAxis Line Styles
                    "& .MuiChartsAxis-left .MuiChartsAxis-line":{
                      stroke:"white",
                      strokeWidth:3
                    },
                    "& .MuiAreaElement-root":{
                      display:"none",
                    },
                    position:"absolute",
                    zIndex:1,
                    top:-30,
                  
                  }}
                  xAxis={
                    [
                      { data: [1, 2, 3, 5, 8, 10]}
                    ]
                  }
                  series={[
                    {
                      data: [2, 5.5, 2, 8.5, 1.5, 5],
                      color:'#0096C7'
                    },
                  ]}
                  width={350}
                  height={300}
                
                >
                </LineChart>
                
                </div>
              </div>
              <div className="environment-sneakpeek">
                <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1O7ZBN5Mw5ox-4F7-HyeIVqI7-Vc3ZG4&ehbc=2E312F&noprof=1"
                style={{ background: <CircularProgress /> }}
                className="herc-map"
                title="Nasa Herc map"
                id="herc-map"
              ></iframe>
              </div>
            </Grid>
          </Grid>
        )}
        {activeIndex === 1 && (
          <Canvas
            spr={[1, 2]}
            camera={{ fov: 45 }}
            style={{ width: "100%", height: "720px" }}
          >
            <color attach="background" args={["#283b66"]} />
            <PresentationControls
              speed={1.5}
              zoom={0.5}
              polar={[-0.1, Math.PI / 4]}
            >
              <Stage environment={null}>
                <Model scale={0.25} />
              </Stage>
            </PresentationControls>
          </Canvas>
        )}
        {activeIndex === 2 && <FrameComponent/>}
        {activeIndex === 3 && (
          <Grid container spacing={2} alignItems="center" justify="center">
            <Grid item xs={12} md={6}>
              <h2>Piloto 1</h2>
              <List dense>
                <ListItem>
                  <Grid container alignItems="center">
                    <Grid item xs={6}>
                      <ListItemIcon>
                        <MdOutlineWbSunny
                          fontSize="large"
                          style={{ color: "#FFD700" }}
                        />
                      </ListItemIcon>
                    </Grid>
                    <Grid item xs={6}>
                      <ListItemText
                        primary="Temperatura Relativa"
                        secondary={
                          <Typography
                            variant="body2"
                            style={{ color: "#4CAF50" }}
                          >
                            {temperatura1 + " °C"}
                          </Typography>
                        }
                      />
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container alignItems="center">
                    <Grid item xs={6}>
                      <ListItemIcon>
                        <MdOutlineWaterDrop
                          fontSize="large"
                          style={{ color: "#3498db" }}
                        />
                      </ListItemIcon>
                    </Grid>
                    <Grid item xs={6}>
                      <ListItemText
                        primary="Humedad Relativa"
                        secondary={
                          <Typography
                            variant="body2"
                            style={{ color: "#4CAF50" }}
                          >
                            {humedadRelativa1 + " %"}
                          </Typography>
                        }
                      />
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container alignItems="center">
                    <Grid item xs={6}>
                      <ListItemIcon>
                        <MdOutlineCompress
                          fontSize="large"
                          style={{ color: "#FF5733" }}
                        />
                      </ListItemIcon>
                    </Grid>
                    <Grid item xs={6}>
                      <ListItemText
                        primary="Presión Atmosférica"
                        secondary={
                          <Typography
                            variant="body2"
                            style={{ color: "#4CAF50" }}
                          >
                            {presionAtmosferica1 + " hPa"}
                          </Typography>
                        }
                      />
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container alignItems="center">
                    <Grid item xs={6}>
                      <ListItemIcon>
                        <MdOutlineArrowUpward
                          fontSize="large"
                          style={{ color: "#8E44AD" }}
                        />
                      </ListItemIcon>
                    </Grid>
                    <Grid item xs={6}>
                      <ListItemText
                        primary="Nivel sobre el Mar"
                        secondary={
                          <Typography
                            variant="body2"
                            style={{ color: "#4CAF50" }}
                          >
                            {alturaSobreNivelDelMar1 + " m"}
                          </Typography>
                        }
                      />
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <h2>Piloto 2</h2>
              <List dense>
                <ListItem>
                  <Grid container alignItems="center">
                    <Grid item xs={6}>
                      <ListItemIcon>
                        <MdOutlineWbSunny
                          fontSize="large"
                          style={{ color: "#FFD700" }}
                        />
                      </ListItemIcon>
                    </Grid>
                    <Grid item xs={6}>
                      <ListItemText
                        primary="Temperatura Relativa"
                        secondary={
                          <Typography
                            variant="body2"
                            style={{ color: "#4CAF50" }}
                          >
                            {temperatura2 + " °C"}
                          </Typography>
                        }
                      />
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container alignItems="center">
                    <Grid item xs={6}>
                      <ListItemIcon>
                        <MdOutlineWaterDrop
                          fontSize="large"
                          style={{ color: "#3498db" }}
                        />
                      </ListItemIcon>
                    </Grid>
                    <Grid item xs={6}>
                      <ListItemText
                        primary="Humedad Relativa"
                        secondary={
                          <Typography
                            variant="body2"
                            style={{ color: "#4CAF50" }}
                          >
                            {humedadRelativa2 + " %"}
                          </Typography>
                        }
                      />
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container alignItems="center">
                    <Grid item xs={6}>
                      <ListItemIcon>
                        <MdOutlineCompress
                          fontSize="large"
                          style={{ color: "#FF5733" }}
                        />
                      </ListItemIcon>
                    </Grid>
                    <Grid item xs={6}>
                      <ListItemText
                        primary="Presión Atmosférica"
                        secondary={
                          <Typography
                            variant="body2"
                            style={{ color: "#4CAF50" }}
                          >
                            {presionAtmosferica2 + " hPa"}
                          </Typography>
                        }
                      />
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container alignItems="center">
                    <Grid item xs={6}>
                      <ListItemIcon>
                        <MdOutlineArrowUpward
                          fontSize="large"
                          style={{ color: "#8E44AD" }}
                        />
                      </ListItemIcon>
                    </Grid>
                    <Grid item xs={6}>
                      <ListItemText
                        primary="Nivel sobre el Mar"
                        secondary={
                          <Typography
                            variant="body2"
                            style={{ color: "#4CAF50" }}
                          >
                            {alturaSobreNivelDelMar2 + " m"}
                          </Typography>
                        }
                      />
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        )}
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
  );
};

export default DataDashboard;
