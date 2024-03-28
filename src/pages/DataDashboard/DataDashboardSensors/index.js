import './style.css'
import React from 'react'
import CIcon from '@coreui/icons-react'
import { CContainer, CRow, CCol, CWidgetStatsF, CWidgetStatsA,
 CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle
 } from '@coreui/react'
import { cilArrowTop, cilOptions } from '@coreui/icons'
import { CChartLine } from '@coreui/react-chartjs'
import { border, borderRadius } from '@mui/system'
import { useEffect } from 'react'

function Sensors() {

    // useEffect(() => {
    //     const titleElement = document.querySelector('.title-class');
    //     if (titleElement) {
    //         titleElement.style.textTransform = 'none';
    //         titleElement.style.fontFamily = 'poppins';
    //     }
    // }, []);

    return (
      <CContainer>
        <CRow>
          <CCol xl={4}>
            <CWidgetStatsA
                className="mb-4"
                value={
                    <>
                    28{" "}
                    <span className="fs-6 fw-normal">
                        °C 
                        {/* <CIcon icon={cilArrowTop} height={'15px'} /> */}
                    </span>
                    </>
                }
                style={{
                    borderRadius: 20,
                    backgroundColor: '#1F264B',
                    fontFamily: 'Poppins'
                }}
                title={"Temperature"}
                chart={
                    <CChartLine
                    className="mt-3 mx-3"
                    style={{ 
                        height: "60px",
                        
                    }}
                    data={{
                        labels: [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        ],
                        datasets: [
                        {
                            label: "My First dataset",
                            backgroundColor: "transparent",
                            borderColor: "rgba(255,255,255,.55)",
                            pointBackgroundColor: "#5856d6",
                            data: [65, 59, 84, 84, 51, 55, 40],
                            
                        },
                        ],
                    }}
                    options={{
                        plugins: {
                        legend: {
                            display: false,
                        },
                        },
                        maintainAspectRatio: false,
                        scales: {
                        x: {
                            border: {
                            display: false,
                            },
                            grid: {
                            display: false,
                            drawBorder: false,
                            },
                            ticks: {
                            display: false,
                            },
                        },
                        y: {
                            min: 30,
                            max: 89,
                            display: false,
                            grid: {
                            display: false,
                            },
                            ticks: {
                            display: false,
                            },
                        },
                        },
                        elements: {
                        line: {
                            borderWidth: 1,
                            tension: 0.4,
                        },
                        point: {
                            radius: 4,
                            hitRadius: 10,
                            hoverRadius: 4,
                        },
                        },
                    }}
                    />
                }
            >
            </CWidgetStatsA>
          </CCol>
          <CCol xl={4}>
            <CWidgetStatsA
                className="mb-4"
                value={
                    <>
                    85{" "}
                    <span className="fs-6 fw-normal">
                        %
                    </span>
                    </>
                }
                style={{
                    borderRadius: 20,
                    backgroundColor: '#1F264B',
                
                }}
                title="Humidity"
                chart={
                    <CChartLine
                    className="mt-3 mx-3"
                    style={{ height: "60px" }}
                    data={{
                        labels: [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        ],
                        datasets: [
                        {
                            label: "My First dataset",
                            backgroundColor: "transparent",
                            borderColor: "rgba(255,255,255,.55)",
                            data: [65, 59, 84, 84, 51, 55, 40],
                            
                        },
                        ],
                    }}
                    options={{
                        plugins: {
                        legend: {
                            display: false,
                        },
                        },
                        maintainAspectRatio: false,
                        scales: {
                        x: {
                            border: {
                            display: false,
                            },
                            grid: {
                            display: false,
                            drawBorder: false,
                            },
                            ticks: {
                            display: false,
                            },
                        },
                        y: {
                            min: 30,
                            max: 89,
                            display: false,
                            grid: {
                            display: false,
                            },
                            ticks: {
                            display: false,
                            },
                        },
                        },
                        elements: {
                        line: {
                            borderWidth: 1,
                            tension: 0.4,
                        },
                        point: {
                            radius: 4,
                            hitRadius: 10,
                            hoverRadius: 4,
                        },
                        },
                    }}
                    />
                }
            />
          </CCol>
          <CCol xl={4}>
            <CWidgetStatsA
                className="mb-4"
                value={
                    <>
                    1012{" "}
                    <span className="fs-6 fw-normal">
                    hPa
                    </span>
                    </>
                }
                style={{
                    borderRadius: 20,
                    backgroundColor: '#1F264B',
                
                }}
                title="Pressure"
                chart={
                    <CChartLine
                    className="mt-3 mx-3"
                    style={{ height: "60px" }}
                    data={{
                        labels: [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        ],
                        datasets: [
                        {
                            label: "My First dataset",
                            backgroundColor: "transparent",
                            borderColor: "rgba(255,255,255,.55)",
                            pointBackgroundColor: "#5856d6",
                            data: [1012, 1012, 1012, 1012, 1012, 1012, 1012],
                            
                        },
                        ],
                    }}
                    options={{
                        plugins: {
                        legend: {
                            display: false,
                        },
                        },
                        maintainAspectRatio: false,
                        scales: {
                        x: {
                            border: {
                            display: false,
                            },
                            grid: {
                            display: false,
                            drawBorder: false,
                            },
                            ticks: {
                            display: false,
                            },
                        },
                        y: {
                            min: 900,
                            max: 1200,
                            display: false,
                            grid: {
                            display: false,
                            },
                            ticks: {
                            display: false,
                            },
                        },
                        },
                        elements: {
                        line: {
                            borderWidth: 1,
                            tension: 0.4,
                        },
                        point: {
                            radius: 4,
                            hitRadius: 10,
                            hoverRadius: 4,
                        },
                        },
                    }}
                    />
                }
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol xl={4}>
            <CRow>
              <CCol lg={6}>
                <CWidgetStatsF
                  className="mb-4"
                  color="primary"
                  title={<div className="title-class2">Linear Acceleration</div>}
                  value={'1, 2.1, 1 mm/s²'}
                  smallText="ppm"
                  style={{
                    borderRadius: 20,
                    height: '125px',
                    backgroundColor: '#1F264B',
                  }}
                />
              </CCol>
              <CCol lg={6}>
                <CWidgetStatsF
                  className="mb-4"
                  color="primary"
                  title={<div className="title-class2">Angular Velocity</div>}
                  value="10, 15, 12 rad/s"
                  smallText="µg/m³"
                  style={{
                    borderRadius: 20,
                    height: '125px',
                    backgroundColor: '#1F264B',
                  }}
                  chart={{
                    data: [65, 59, 84, 84, 51, 55, 40],
                    color: "info",
                    labels: [],
                  }}
                />
              </CCol>
              <CCol lg={12}>
                <CWidgetStatsF
                  className="mb-4"
                  color="primary"
                  //titulo en minuscula

                  title={<div className="title-class2">Inclination</div>}
                  value="-1.2, 0.5, 0.3 °"
                  smallText="ppm"
                  style={{
                    borderRadius: 20,
                    height: '125px',
                    backgroundColor: '#1F264B',
                  }}
                  chart={{
                    data: [65, 59, 84, 84, 51, 55, 40],
                    color: "info",
                    labels: [],
                  }}
                />
              </CCol>
              
            </CRow>
          </CCol>
          <CCol xl={4}>
            <CWidgetStatsA
              className="mb-4"
              value={
                <>
                  98{" "}
                  <span className="fs-6 fw-normal">
                    BPM
                  </span>
                </>
              }
              title="Heart Rate"
              style={{
                borderRadius: 20,
                backgroundColor: '#1F264B',
              
              }}
              chart={
                <CChartLine
                  className="mt-3 mx-3"
                  style={{ height: "180px" }}
                  data={{
                    labels: [
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                    ],
                    datasets: [
                      {
                        label: "My First dataset",
                        backgroundColor: "transparent",
                        borderColor: "rgba(255,255,255,.55)",
                        pointBackgroundColor: "#5856d6",
                        data: [65, 59, 84, 84, 51, 55, 40],
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    maintainAspectRatio: false,
                    scales: {
                      x: {
                        border: {
                          display: false,
                        },
                        grid: {
                          display: false,
                          drawBorder: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                      y: {
                        min: 30,
                        max: 89,
                        display: false,
                        grid: {
                          display: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                    },
                    elements: {
                      line: {
                        borderWidth: 1,
                        tension: 0.4,
                      },
                      point: {
                        radius: 4,
                        hitRadius: 10,
                        hoverRadius: 4,
                      },
                    },
                  }}
                />
              }
            />
          </CCol>
          <CCol xl={4}>
            <CRow>
              <CCol lg={12}>
                <CWidgetStatsF
                  className="mb-4"
                  color="primary"
                  title={<div className="title-class2">Gravitational Intensity</div>}
                  value="-1 N/kg"
                  smallText="ppm"
                  style={{
                    borderRadius: 20,
                    height: '125px',
                    backgroundColor: '#1F264B',

                  }}
                  chart={{
                    data: [65, 59, 84, 84, 51, 55, 40],
                    color: "info",
                    labels: [],
                  }}
                />
              </CCol>
              <CCol lg={12}>
                <CWidgetStatsF
                  className="mb-4"
                  color="primary"
                  title={<div className="title-class2">Magnetic intensity</div>}
                  value="21 µT"
                  smallText="µg/m³"
                  style={{
                    borderRadius: 20,
                    height: '125px',
                    backgroundColor: '#1F264B',
                  }}
                  chart={{
                    data: [65, 59, 84, 84, 51, 55, 40],
                    color: "info",
                    labels: [],
                  }}
                />
              </CCol>
              
            </CRow>
          </CCol>
        </CRow>
        
      </CContainer>
    );
}

export default Sensors