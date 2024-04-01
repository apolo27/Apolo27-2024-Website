import './DataDashboardRover.css'
import React from 'react'
import { Canvas } from "@react-three/fiber";
import {Environment, useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { CContainer, CRow, CCol, CWidgetStatsF, CWidgetStatsE,
  CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, 
  } from '@coreui/react'
import { CChartBar, CChartLine } from '@coreui/react-chartjs';
import { useState } from 'react';
import { Vibration } from '@mui/icons-material';
import { useEffect } from 'react';

function Model(props) {
    const { scene } = useGLTF("/rover.glb");
    return <primitive object={scene} {...props} />;
  }
  

function Rover({ data }) {

  const [impacto, setImpacto] = useState([]);
  const [inclinacionRover_x, setInclinacionRover_x] = useState([]);
  const [inclinacionRover_y, setInclinacionRover_y] = useState([]);
  const [inclinacionRover_z, setInclinacionRover_z] = useState([]);
  const [vibracion, setVibracion] = useState([]);

  useEffect(() => {
    setImpacto(data.map((item) => item.impacto))
    setInclinacionRover_x(data.map((item) => item.inclinacionRover_X))
    setInclinacionRover_y(data.map((item) => item.inclinacionRover_Y))
    setInclinacionRover_z(data.map((item) => item.inclinacionRover_Z))
    setVibracion(data.map((item) => item.vibracion))
  }, [data]);

  
  return (
    <CContainer>
      <CCol>
        
        <CRow>
          <CCol>
            <CWidgetStatsE
              className='mb-4'
              style={{
                backgroundColor: "#1C1F32",
                fontFamily: "Poppins",
              }}
              chart={
                <CChartBar
                  className='mx-auto'
                  style={{height: '40px', width: '100px'}}
                  data={{
                    labels: [1, 2, 3, 4, 5, 6, 7, 9, 10],
                    datasets: [
                      {
                        backgroundColor: '#321fdb',
                        borderColor: 'transparent',
                        borderWidth: 1,
                        data: impacto,
                      },
                    ],
                  }}
                  options={{
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    scales: {
                      x: {
                        display: false,
                      },
                      y: {
                        display: false,
                      },
                    },
                  }}
                />
              }
              title={
                <div className="title-class2">
                  Impact
                </div>
              }
              value={impacto[9] + " N"}
            />
          </CCol>
          <CCol>
          <CWidgetStatsE
              className='mb-4'
              style={{
                backgroundColor: "#1C1F32",
                fontFamily: "Poppins",
              }}
              chart={
                <CChartLine
                  className='mx-auto'
                  style={{height: '40px', width: '100px'}}
                  data={{
                    labels: [1, 2, 3, 4, 5, 6, 7, 9, 10],
                    datasets: [
                      {
                        backgroundColor: 'transparent',
                        borderColor: '#321fdb',
                        borderWidth: 2,
                        data: vibracion,
                      },
                    ],
                  }}
                  options={{
                    maintainAspectRatio: false,
                    elements: {
                      line: {
                        tension: 0.4,
                      },
                      point: {
                        radius: 0,
                      },
                    },
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    scales: {
                      x: {
                        display: false,
                      },
                      y: {
                        display: false,
                      },
                    },
                  }}
                />
              }
              title={
                <div className="title-class2">
                  Vibration
                </div>
              }
              value={vibracion[9] + " Hz"}
            />
          </CCol>
          <CCol>
          <CWidgetStatsE
              className='mb-4'
              style={{
                backgroundColor: "#1C1F32",
                fontFamily: "Poppins",
              }}
              chart={
                <CChartBar
                  className='mx-auto'
                  style={{height: '40px', width: '100px'}}
                  data={{
                    labels: [1, 2, 3, 4, 5, 6, 7, 9, 10],
                    datasets: [
                      {
                        backgroundColor: '#321fdb',
                        borderColor: 'transparent',
                        borderWidth: 1,
                        data: inclinacionRover_x,
                      },
                      {
                        backgroundColor: '#f3f3f3',
                        borderColor: 'transparent',
                        borderWidth: 1,
                        data: inclinacionRover_y,
                      },
                      {
                        backgroundColor: '#f3f3f3',
                        borderColor: 'transparent',
                        borderWidth: 1,
                        data: inclinacionRover_z,
                      }
                    ],
                  }}
                  options={{
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    scales: {
                      x: {
                        display: false,
                      },
                      y: {
                        display: false,
                      },
                    },
                  }}
                />
              }
              title={
                <div className="title-class2">
                  Inclination
                </div>
              }
              value={inclinacionRover_x[9] + " , " + inclinacionRover_y[9] + " , " + inclinacionRover_z[9] + " °"}	
            />
          </CCol>
          
        </CRow>
        <CRow>
          <Canvas
            spr={[1, 2]}
            camera={{ fov: 45 }}
            style={{
              height: window.screen.width >= 1280 ? 625 : 500,
              marginTop: '-90px',	
            }}
          >
            <Environment preset="night" />
            <PresentationControls
              speed={1.5}
              zoom={2}
              polar={[-0.1, Math.PI / 4]}
            >
              <Stage shadows={false}>
                <Model scale={0.25} />
              </Stage>
            </PresentationControls>
          </Canvas>
        </CRow>
      </CCol>
    </CContainer>
  );
}

export default Rover