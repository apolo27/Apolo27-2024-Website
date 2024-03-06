import './DataDashboard.css'
import React, { useEffect, useState } from 'react';
import database from '../../services/firebase';
// import {Container,Tab, Tabs} from 'react-bootstrap';

import {Grid, FormGroup, FormControlLabel, Checkbox, Container, BottomNavigation, BottomNavigationAction, List, ListItem, ListItemButton, ListItemText, ListItemAvatar, Avatar, ListItemIcon, Typography} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { PedalBike } from '@mui/icons-material';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';
import {MdOutlineWbSunny, MdOutlineWaterDrop, MdOutlineCompress, MdOutlineArrowUpward} from 'react-icons/md'
//import {List, ListItem, ListItemButton, ListItemText, ListItemAvatar, Avatar, ListItemIcon, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress'

import {Canvas} from '@react-three/fiber'
import {useGLTF, Stage, PresentationControls} from '@react-three/drei'

import tempIcon from '../../imgs/DataDashboard/tempIcon.png'



function Model(props){
  const {scene} = useGLTF("/rover.glb")
  return <primitive object={scene} {...props} />
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

  const handleChange = (event, newIndex) => {
    setActiveIndex(newIndex);
  };

  const icons = [
    {label: 'Overview', icon: <HomeIcon/>},
    {label: 'Rover', icon: <PedalBike />},
    {label: 'Tripulante', icon: <PersonIcon />},
    {label: 'Sensors', icon: <BarChartIcon />},
  ]

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
        setAlturaSobreNivelDelMar1(parseFloat(lastEntryData.alturaSobreNivelDelMar1));
        setTemperatura2(parseFloat(lastEntryData.temperatura2));
        setHumedadRelativa2(parseFloat(lastEntryData.humedadRelativa2));
        setPresionAtmosferica2(parseFloat(lastEntryData.presionAtmosferica2));
        setAlturaSobreNivelDelMar2(parseFloat(lastEntryData.alturaSobreNivelDelMar2));
        
        setTimeout(() => {
          console.log('Temperatura1:', temperatura1.toFixed(2));
          console.log('Humedad1:', humedadRelativa1.toFixed(2));
          console.log('Presion1:', presionAtmosferica1.toFixed(2));
          console.log('Altura1:', alturaSobreNivelDelMar1.toFixed(2));
          console.log('Temperatura2:', temperatura2.toFixed(2));
          console.log('Humedad2:', humedadRelativa2.toFixed(2));
          console.log('Presion2:', presionAtmosferica2.toFixed(2));
          console.log('Altura2:', alturaSobreNivelDelMar2.toFixed(2));
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

  return (
    <Container 
      maxWidth="auto"
      style={{ marginTop: '50px' }}
    >
      {/* <section className="data-dashboard-intro">
        <h4>
          Cada año blablablabla Este es nuestro tablero para el Nasa Herc 2024
        </h4>
      </section> */}
      <BottomNavigation 
        value={activeIndex} 
        onChange={handleChange}
        showLabels
        sx={{ 
          width: '30%', 
          margin: 'auto', // Centra el menú de navegación 
          borderRadius: '30px', // Ajusta el radio de las esquinas
          border: '2px solid #3E4879', // Ajusta el borde del menú de navegación
          backgroundColor: '#1F264B'
        }}
        >
        {icons.map((item, index) => (
          <BottomNavigationAction
            key={index}
            label={item.label}
            icon={item.icon}
            sx={{ color: 'white' }}
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
              <div className="Task-List">
                <h2 style={{ fontWeight: "700" }}>{t("Tasks")}</h2>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "aliceblue",
                          "&.Mui-checked": { color: "green" },
                        }}
                      />
                    }
                    label={t("Find-ARV")}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "aliceblue",
                          "&.Mui-checked": { color: "green" },
                        }}
                      />
                    }
                    label={t("Regolith-removal")}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "aliceblue",
                          "&.Mui-checked": { color: "green" },
                        }}
                      />
                    }
                    label={t("Moon-maintenance")}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "aliceblue",
                          "&.Mui-checked": { color: "green" },
                        }}
                      />
                    }
                    label={t("Power-it-up")}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "aliceblue",
                          "&.Mui-checked": { color: "green" },
                        }}
                      />
                    }
                    label={t("Rover-Redundancy")}
                  />
                </FormGroup>
              </div>
              <div className="graph">
                <h4 style={{ fontWeight: "700" }}>{t("Rovers-Accel")}</h4>
              </div>
            </Grid>

            <Grid item xs="auto" order={{ xs: 1, md: 1, lg: 1, xl: 2 }}>
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1O7ZBN5Mw5ox-4F7-HyeIVqI7-Vc3ZG4&ehbc=2E312F&noprof=1"
                style={{ background: <CircularProgress /> }}
                className="herc-map"
                title="Nasa Herc map"
                id="herc-map"
              ></iframe>
            </Grid>

            <Grid item xs="auto" order={{ xs: 3, md: 3, lg: 3, xl: 3 }}>
              <div className="participants">
                <h2 style={{ fontWeight: "700" }}>{t("Pilots")}</h2>
                <List dense className="crewmembers">
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar
                          alt="Miguel Arredondo"
                          src="https://apolo27.com/img/about-us/team-members/miguela.png"
                        />
                      </ListItemAvatar>
                      <ListItemText id={1} primary={"Miguel Arredondo"} />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar
                          alt="Rosanna Bautista"
                          src="https://apolo27.com/img/about-us/team-members/rosanna.png"
                        />
                      </ListItemAvatar>
                      <ListItemText id={1} primary={"Rosanna Bautista"} />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar
                          alt="Raymond Ruiz"
                          src="https://apolo27.com/img/about-us/team-members/raymond.png"
                        />
                      </ListItemAvatar>
                      <ListItemText id={1} primary={"Raymond Ruiz"} />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar
                          alt="Ingrid Lopez"
                          src="https://apolo27.com/img/about-us/team-members/ingrid.png"
                        />
                      </ListItemAvatar>
                      <ListItemText id={1} primary={"Ingrid Lopez"} />
                    </ListItemButton>
                  </ListItem>
                </List>
              </div>
              <div className="environment-sneakpeek">
                <h4 style={{ fontWeight: "700" }}>{t("Surrounding-temp")}</h4>
                <div className="temperatura">
                  <div className="icono-temperatura">
                    <img alt="termometer" src={tempIcon}></img>
                  </div>
                  {/* <h3>
                              {temperatura ? temperatura : surroundingTemp}
                              <span style={{ fontSize: "14px", paddingBottom: "15px" }}>
                                °C
                              </span>
                            </h3> */}
                </div>
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
                <Model scale={0.01} />
              </Stage>
            </PresentationControls>
          </Canvas>
        )}
        {activeIndex === 2 && (
          <h1>Active Index 2</h1>
        )}
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
}

export default DataDashboard;