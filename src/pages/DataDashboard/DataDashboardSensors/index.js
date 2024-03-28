import './style.css'
import React from 'react'
import CIcon from '@coreui/icons-react'
import { CContainer, CRow, CCol, CWidgetStatsF, CWidgetStatsA,
 CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle
 } from '@coreui/react'
import { cilArrowTop, cilOptions } from '@coreui/icons'
import { CChartLine } from '@coreui/react-chartjs'
import { border, borderRadius } from '@mui/system'

function Sensors() {

    return (
      <CContainer>
        <CRow>
          <CCol xl={4}>
            <CWidgetStatsF
              className="mb-4"
              color="primary"
              title="Temperature"
              value="25"
              smallText="°C"
              style={{
                borderRadius: 20,
                height: '100px',
              }}
              chart={
                <CChartLine
                  className="mx-auto"
                  style={{ height: '70px' }}
                  data={{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                      {
                        label: 'My First dataset',
                        backgroundColor: 'rgba(255,255,255,.2)',
                        borderColor: 'rgba(255,255,255,.55)',
                        data: [78, 81, 80, 45, 34, 12, 40],
                        fill: true,
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
                        display: false,
                      },
                      y: {
                        display: false,
                      },
                    },
                    elements: {
                      line: {
                        borderWidth: 2,
                        tension: 0.4,
                      },
                      point: {
                        radius: 0,
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
            <CWidgetStatsF
              className="mb-4"
              color="primary"
              title="Humidity"
              value="50"
              smallText="%"
              style={{
                borderRadius: 20,
                height: '100px',
              }}
              chart={{
                data: [65, 59, 84, 84, 51, 55, 40],
                color: "info",
                labels: [],
              }}
            />
          </CCol>
          <CCol xl={4}>
            <CWidgetStatsF
              className="mb-4"
              color="primary"
              title="Pressure"
              value="1013"
              smallText="hPa"
              style={{
                borderRadius: 20,
                height: '100px',
              }}
              chart={{
                data: [65, 59, 84, 84, 51, 55, 40],
                color: "info",
                labels: [],
              }}
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
                  title="CO2"
                  value="400"
                  smallText="ppm"
                  style={{
                    borderRadius: 20,
                    height: '125px',
                  }}
                  chart={{
                    data: [65, 59, 84, 84, 51, 55, 40],
                    color: "info",
                    labels: [],
                  }}
                />
              </CCol>
              <CCol lg={6}>
                <CWidgetStatsF
                  className="mb-4"
                  color="primary"
                  title="PM2.5"
                  value="10"
                  smallText="µg/m³"
                  style={{
                    borderRadius: 20,
                    height: '125px',
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
                  title="CO2"
                  value="400"
                  smallText="ppm"
                  style={{
                    borderRadius: 20,
                    height: '125px',
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
          <CCol lg={4}>
            <CWidgetStatsA
              className="mb-4"
              color="primary"
              value={
                <>
                  $9.000{" "}
                  <span className="fs-6 fw-normal">
                    (40.9% <CIcon icon={cilArrowTop} height={'15px'} />)
                  </span>
                </>
              }
              title="Widget title"
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
                  title="CO2"
                  value="400"
                  smallText="ppm"
                  style={{
                    borderRadius: 20,
                    height: '125px',
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
                  title="PM2.5"
                  value="10"
                  smallText="µg/m³"
                  style={{
                    borderRadius: 20,
                    height: '125px',
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