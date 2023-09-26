import React, { useEffect, useState } from 'react';
import database from '../config/firebase'; 
import Table from 'react-bootstrap/Table';


const DataDashboard = () => {
  const [data, setData] = useState(null);
  const [processedData, setProcessedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Assuming you have a 'data' node in your database, you can read it like this:
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
    <div >
      <h1>DATA DASHBOARD</h1>

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
    </div>
  )
}

export default DataDashboard;