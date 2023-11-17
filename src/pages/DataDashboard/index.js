import React, { useEffect, useState } from 'react';
import './DataDashboard.css'
import database from '../../config/firebase'; 
import {Container, Col, Row, Table} from 'react-bootstrap';
import tasksMap from '../../imgs/DataDashboard/tasksMap.png'
import roveracceleration from '../../imgs/DataDashboard/roversacc.png'
import participants from '../../imgs/DataDashboard/Participants.png'
import {FormGroup, FormControlLabel, Checkbox} from '@mui/material';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const DataDashboard = () => {
  const [data, setData] = useState(null);
  const [processedData, setProcessedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Assuming we have a 'data' node in our database
        const snapshot = await database
          .ref('/sensors')
          .orderByChild('dateAdded')
          .limitToLast(1)
          .once('value');
        const dataFromDatabase = snapshot.val();
        setData(dataFromDatabase);
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    };

    fetchData();
  }, []);

    useEffect(() => {
      if (data) {
        const sensorId = Object.keys(data);
    
        if (sensorId.length > 0) {
          const sensorData = data[sensorId]; // Get the data for that sensor
          const dataToBeProcessed = [
            {key: "ns", value: sensorData.Ns},
            {key: "Latitude", value: sensorData.latitude},
            {key: "Ew", value: sensorData.ew},
            {key: "Speed", value: sensorData.speed},
            {key: "Temp", value: sensorData.temp},
            {key: "Pressure", value: sensorData.pressure},
            {key: "Elevation", value: sensorData.elevation},
            {key: "Humidity", value: sensorData.humidity},
            {key: "accX", value: sensorData.accx},
            {key: "accY", value: sensorData.accy},
            {key: "accZ", value: sensorData.accz},
            {key: "GyroX", value: sensorData.gyrox},
            {key: "GyroY", value: sensorData.gyroy},
            {key: "GyroZ", value: sensorData.gyroz},
            {key: "QuatW", value: sensorData.quatw},
            {key: "QuatX", value: sensorData.quatx},
            {key: "QuatY", value: sensorData.quaty},
            {key: "QuatZ", value: sensorData.quatz},
            {key: "Counter", value: sensorData.counter},
          ]
          
          setProcessedData(dataToBeProcessed)
          
        
        } else {
          console.error("Data object is empty.");
        }
      } else {
        console.error("Data object is undefined or null.");
      }
    }, [data]);

  return(
    <Container >
      <h1>DATA DASHBOARD</h1>
      <div className='data-dashboard-body'>
      <Tabs defaultActiveKey="dashboard" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="dashboard" title="Dashboard">
        Tab content for Home
        <Col className='Task-List' sm>
            <h2 style={{fontWeight: '700'}}>Tasks</h2>
            <FormGroup >
                <FormControlLabel control={<Checkbox />} label="Find ARV-30" />
                <FormControlLabel control={<Checkbox />} label="Regolith Removal" />
                <FormControlLabel control={<Checkbox />} label="Moon Maintenance" />
                <FormControlLabel control={<Checkbox />} label="Power it up" />
                <FormControlLabel control={<Checkbox />} label="Rover Redundancy" />
            </FormGroup>
        </Col>
        <Col sm>
            <iframe src="https://www.google.com/maps/d/embed?mid=1O7ZBN5Mw5ox-4F7-HyeIVqI7-Vc3ZG4&hl=en&ehbc=2E312F" 
            width="1000" height="350" 
            title='Nasa Herc map'></iframe>
          </Col>
      </Tab>

      <Tab eventKey="rover" title="Rover">
        Tab content for Profile
        <img src={roveracceleration} alt='rovers acceleration' height={325}  ></img>
      </Tab>

      <Tab eventKey="pilots" title="Pilots">
        Tab content for Contact
        <Col className='participants' sm>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h2 style={{fontWeight: '700'}}>Crewmembers</h2> 
                <a href='About-Us' style={{color: 'blue',paddingTop: 10}}>See all</a>
            </div>
            <List dense sx={{ width: '100%', maxWidth: 400, bgcolor: 'rgb(235, 235, 235)' }}>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemAvatar>
                        <Avatar
                        alt="Miguel Arredondo"
                        src="https://apolo27.com/img/about-us/team-members/miguela.png"
                        />
                    </ListItemAvatar>
                    <ListItemText id={1} primary={"Miguel Arredondo"}  secondary={"Miguel@gmail.com"}/>
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
                    <ListItemText id={1} primary={"Rosanna Bautista"} secondary={"Rosanna@gmail.com"}/>
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
                    <ListItemText id={1} primary={"Raymond Ruiz"} secondary={"Raymond@gmail.com"} />
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
                    <ListItemText id={1} primary={"Ingrid Lopez"}  secondary={"Ingrid@gmail.com"}/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Col>
      </Tab>

      <Tab eventKey="ambient" title="Ambient">
        Tab content for Contact
      </Tab>

    </Tabs>
      </div>


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
    </Container>
  )
}

export default DataDashboard;