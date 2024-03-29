import './style.css'
import React from 'react'
import CIcon from '@coreui/icons-react'
import { CContainer, CRow, CCol, CWidgetStatsF, CWidgetStatsA,
 CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle
 } from '@coreui/react'
import { cilArrowTop, cilOptions } from '@coreui/icons'
import { CChartLine } from '@coreui/react-chartjs'
import { border, borderRadius } from '@mui/system'
import { useEffect, useState } from 'react'
import { set } from 'lodash'
import { fi } from 'date-fns/locale'
import TemperaturaIcon from "../../../imgs/DataDashboard/sensor-de-temperatura.png"
import HumedadIcon from "../../../imgs/DataDashboard/humedad.png"
import PresionIcon from "../../../imgs/DataDashboard/atmosferico.png"
import AceleracionIcon from "../../../imgs/DataDashboard/reloj.png"
import VelocidadIcon from "../../../imgs/DataDashboard/velocidad.png"
import InclinacionIcon from "../../../imgs/DataDashboard/inclinacion.png"
import PulsoCardiacoIcon from "../../../imgs/DataDashboard/heard.svg"
import GravitatoriaIcon from "../../../imgs/DataDashboard/gravedad.png"
import MagneticaIcon from "../../../imgs/DataDashboard/iman.png"
import ImpactoIcon from "../../../imgs/DataDashboard/impacto.png"
import Gas from "../../../imgs/DataDashboard/combustibles-fosiles.png"
import VibrationIcon from "../../../imgs/DataDashboard/vibracion.png"
import RadiacionIcon from "../../../imgs/DataDashboard/indice-uv.png"
import LatitudIcon from "../../../imgs/DataDashboard/latitud.png"
import LongitudIcon from "../../../imgs/DataDashboard/longitud.png"
import AltitudIcon from "../../../imgs/DataDashboard/altitud.png"

function Sensors({ data }) {

    const [filter, setFilter] = useState('Crewmember 1'); // Estado para mantener el valor seleccionado del dropdown

    // Datos para los gráficos pilotos
    const [temperatura, setTemperatura] = useState([]);
    const [humedad, setHumedad] = useState([]);
    const [presion, setPresion] = useState([]);
    const [aceleracionLineal1_x, setAceleracionLineal_x] = useState([]);
    const [aceleracionLineal1_y, setAceleracionLineal_y] = useState([]);
    const [aceleracionLineal1_z, setAceleracionLineal_z] = useState([]);
    const [velocidadAngular_x, setVelocidadAngular_x] = useState([]);
    const [velocidadAngular_y, setVelocidadAngular_y] = useState([]);
    const [velocidadAngular_z, setVelocidadAngular_z] = useState([]);
    const [inclinacion1_x, setInclinacion_x] = useState([]);
    const [inclinacion1_y, setInclinacion_y] = useState([]);
    const [inclinacion1_z, setInclinacion_z] = useState([]);
    const [pulsoCardiacoBPM, setPulsoCardiacoBPM] = useState([]);
    const [intensidadGravitatoria, setIntensidadGravitatoria] = useState([]);
    const [intensidadMagnetica, setIntensidadMagnetica] = useState([]);

    // Datos para los gráficos rover
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

    const handleFilter = (value) => {
        setFilter(value)

        if(value === 'Crewmember 1' || value === 'Crewmember 2') {
            console.log('Hola', data)
            if (value === "Crewmember 1") {
                const aceleracionLineal1_x = data.map(
                    (item) => item.AceleraciónLineal1_X
                );
                setAceleracionLineal_x(aceleracionLineal1_x);
                const aceleracionLineal1_y = data.map(
                    (item) => item.AceleraciónLineal1_Y
                );
                setAceleracionLineal_y(aceleracionLineal1_y);
                const aceleracionLineal1_z = data.map(
                    (item) => item.AceleraciónLineal1_Z
                );
                setAceleracionLineal_z(aceleracionLineal1_z);
                const pulsoCardiacoBPM = data.map(
                    (item) => item.pulsoCardiacoBPM1
                );
                setPulsoCardiacoBPM(pulsoCardiacoBPM);
                const inclinacion1_X = data.map((item) => item.inclinacion1_X);
                setInclinacion_x(inclinacion1_X);
                const inclinacion1_Y = data.map((item) => item.inclinacion1_Y);
                setInclinacion_y(inclinacion1_Y);
                const inclinacion1_Z = data.map((item) => item.inclinacion1_Z);
                setInclinacion_z(inclinacion1_Z);
                const humedad = data.map((item) => item.humedad1);
                setHumedad(humedad);
                const intensidadGravitatoria = data.map(
                    (item) => item.intensidadGravitatoria1
                );
                setIntensidadGravitatoria(intensidadGravitatoria);
                const intensidadMagnetica = data.map(
                    (item) => item.intensidadMagnetica1
                );
                setIntensidadMagnetica(intensidadMagnetica);
                const presion = data.map((item) => item.presion1);
                setPresion(presion);
                const temperatura = data.map((item) => item.temperatura1);
                setTemperatura(temperatura);
                const velocidadAngular_X = data.map(
                    (item) => item.velocidadAngular1_X
                );
                setVelocidadAngular_x(velocidadAngular_X);
                const velocidadAngular_Y = data.map(
                    (item) => item.velocidadAngular1_Y
                );
                setVelocidadAngular_y(velocidadAngular_Y);
                const velocidadAngular_Z = data.map(
                    (item) => item.velocidadAngular1_Z
                );
                setVelocidadAngular_z(velocidadAngular_Z);

                console.log('Aceleracion Lineal X', aceleracionLineal1_x)

            } else {
                const aceleracionLineal1_x = data.map(
                    (item) => item.AceleraciónLineal2_X
                );
                setAceleracionLineal_x(aceleracionLineal1_x);
                const aceleracionLineal1_y = data.map(
                    (item) => item.AceleraciónLineal2_Y
                );
                setAceleracionLineal_y(aceleracionLineal1_y);
                const aceleracionLineal1_z = data.map(
                    (item) => item.AceleraciónLineal2_Z
                );
                setAceleracionLineal_z(aceleracionLineal1_z);
                const pulsoCardiacoBPM = data.map(
                    (item) => item.pulsoCardiacoBPM2
                );
                setPulsoCardiacoBPM(pulsoCardiacoBPM);
                const inclinacion1_X = data.map((item) => item.inclinacion2_X);
                setInclinacion_x(inclinacion1_X);
                const inclinacion1_Y = data.map((item) => item.inclinacion2_Y);
                setInclinacion_y(inclinacion1_Y);
                const inclinacion1_Z = data.map((item) => item.inclinacion2_Z);
                setInclinacion_z(inclinacion1_Z);
                const humedad = data.map((item) => item.humedad2);
                setHumedad(humedad);
                const intensidadGravitatoria = data.map(
                    (item) => item.intensidadGravitatoria2
                );
                setIntensidadGravitatoria(intensidadGravitatoria);
                const intensidadMagnetica = data.map(
                    (item) => item.intensidadMagnetica2
                );
                setIntensidadMagnetica(intensidadMagnetica);
                const presion = data.map((item) => item.presion2);
                setPresion(presion);
                const temperatura = data.map((item) => item.temperatura2);
                setTemperatura(temperatura);
                const velocidadAngular_X = data.map(
                    (item) => item.velocidadAngular2_X
                );
                setVelocidadAngular_x(velocidadAngular_X);
                const velocidadAngular_Y = data.map(
                    (item) => item.velocidadAngular2_Y
                );
                setVelocidadAngular_y(velocidadAngular_Y);
                const velocidadAngular_Z = data.map(
                    (item) => item.velocidadAngular2_Z
                );
                setVelocidadAngular_z(velocidadAngular_Z);
            }
        } else {
            const impacto = data.map((item) => item.impacto);
            setImpacto(impacto);
            const inclinacionRover_X = data.map((item) => item.inclinacionRover_X);
            setInclinacionRover_x(inclinacionRover_X);
            const inclinacionRover_Y = data.map((item) => item.inclinacionRover_Y);
            setInclinacionRover_y(inclinacionRover_Y);
            const inclinacionRover_Z = data.map((item) => item.inclinacionRover_Z);
            setInclinacionRover_z(inclinacionRover_Z);
            const vibracion = data.map((item) => item.vibracion);
            setVibracion(vibracion);
            const concentracionGas = data.map((item) => item.ConcentracionGas);
            setConcentracionGas(concentracionGas);
            const radiacionUV = data.map((item) => item.radiacionUV);
            setRadiacionUV(radiacionUV);
            const latitud = data.map((item) => item.latitud);
            setLatitud(latitud);
            const longitud = data.map((item) => item.longitud);
            setLongitud(longitud);
            const altitud = data.map((item) => item.altitud);
            setAltitud(altitud);
        }
    }

    useEffect(() => {
        // Cuando el componente se monta, establecer el filtro por defecto en "piloto1"
        handleFilter(filter);
    }, [data]);

    return (
      <CContainer>
        <CDropdown
          className="mb-4"
          style={{
            backgroundColor: "#1F264B",
            borderRadius: "20px",
            border: "3px solid",
            borderColor: "#1976D2",
            height: "50px",
            alignItems: "center",
          }}
        >
          <CDropdownToggle
            style={{
              backgroundColor: "#1F264B",
              borderRadius: "20px",
              borderColor: "#1F264B",
            }}
          >
            {filter ? `Filter by:  ${filter}` : "Filtrar"}
          </CDropdownToggle>
          <CDropdownMenu
            style={{
              backgroundColor: "#1F264B", // Cambia el color del fondo del menú
              color: "white", // Cambia el color del texto del menú
            }}
          >
            <CDropdownItem
              style={{ color: "white" }}
              className="dropdown-item-custom" // Clase personalizada para estilos adicionales
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#384156")} // Cambia el color de fondo al pasar el mouse
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#1F264B")} // Restablece el color de fondo al quitar el mouse
              onClick={() => handleFilter("Crewmember 1")}
            >
              Crewmember 1
            </CDropdownItem>
            <CDropdownItem
              style={{ color: "white" }}
              className="dropdown-item-custom" // Clase personalizada para estilos adicionales
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#384156")} // Cambia el color de fondo al pasar el mouse
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#1F264B")} // Restablece el color de fondo al quitar el mouse
              onClick={() => handleFilter("Crewmember 2")}
            >
              Crewmember 2
            </CDropdownItem>
            <CDropdownItem
              style={{ color: "white" }}
              className="dropdown-item-custom" // Clase personalizada para estilos adicionales
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#384156")} // Cambia el color de fondo al pasar el mouse
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#1F264B")} // Restablece el color de fondo al quitar el mouse
              onClick={() => handleFilter("Rover")}
            >
              Rover
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
        {(filter === "Crewmember 1" || filter === "Crewmember 2") && (
          <>
            <CRow>
              <CCol xl={4}>
                <CWidgetStatsA
                  className="mb-4"
                  value={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ marginRight: "20px" }}>
                        {temperatura[9]}{" "}
                        <span className="fs-6 fw-normal">°C</span>
                      </div>
                      <div style={{ marginLeft: "auto" }}>
                        {" "}
                        {/* Estilo para alinear a la derecha */}
                        <img
                          src={TemperaturaIcon}
                          alt="Icono"
                          height={"50px"}
                        />
                      </div>
                    </div>
                  }
                  style={{
                    borderRadius: 20,
                    backgroundColor: "#1F264B",
                    fontFamily: "Poppins",
                  }}
                  title={"Temperature"}
                  chart={
                    <CChartLine
                      className="mt-3 mx-3"
                      style={{
                        height: "60px",
                      }}
                      data={{
                        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        datasets: [
                          {
                            label: "My First dataset",
                            backgroundColor: "transparent",
                            borderColor: "rgba(255,255,255,.55)",
                            pointBackgroundColor: "#5856d6",
                            data: temperatura,
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
                            min: Math.min(...temperatura) - 3,
                            max: Math.max(...temperatura) + 3,
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
                ></CWidgetStatsA>
              </CCol>
              <CCol xl={4}>
                <CWidgetStatsA
                  className="mb-4"
                  value={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ marginRight: "20px" }}>
                        {humedad[9]} <span className="fs-6 fw-normal">%</span>
                      </div>
                      <div style={{ marginLeft: "auto" }}>
                        {" "}
                        {/* Estilo para alinear a la derecha */}
                        <img src={HumedadIcon} alt="Icono" height={"50px"} />
                      </div>
                    </div>
                  }
                  style={{
                    borderRadius: 20,
                    backgroundColor: "#1F264B",
                  }}
                  title="Humidity"
                  chart={
                    <CChartLine
                      className="mt-3 mx-3"
                      style={{ height: "60px" }}
                      data={{
                        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        datasets: [
                          {
                            label: "My First dataset",
                            backgroundColor: "transparent",
                            borderColor: "rgba(255,255,255,.55)",
                            data: humedad,
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
                            min: Math.min(...humedad) - 3,
                            max: Math.max(...humedad) + 3,
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
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ marginRight: "20px" }}>
                        {presion[9]} <span className="fs-6 fw-normal">hPa</span>
                      </div>
                      <div style={{ marginLeft: "auto" }}>
                        {" "}
                        {/* Estilo para alinear a la derecha */}
                        <img src={PresionIcon} alt="Icono" height={"50px"} />
                      </div>
                    </div>
                  }
                  style={{
                    borderRadius: 20,
                    backgroundColor: "#1F264B",
                  }}
                  title="Pressure"
                  chart={
                    <CChartLine
                      className="mt-3 mx-3"
                      style={{ height: "60px" }}
                      data={{
                        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        datasets: [
                          {
                            label: "My First dataset",
                            backgroundColor: "transparent",
                            borderColor: "rgba(255,255,255,.55)",
                            pointBackgroundColor: "#5856d6",
                            data: presion,
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
                            min: Math.min(...presion) - 3,
                            max: Math.max(...presion) + 3,
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
                      title={
                        <div
                          className="title-class2"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <div style={{ width: "24px", marginRight: "-20px" }}>
                            {" "}
                            {/* Ancho fijo del contenedor del icono */}
                            <img
                              src={AceleracionIcon}
                              alt="Icono"
                              style={{
                                height: "50px",
                                marginLeft: "-60px",
                                marginTop: "-10px",
                              }}
                            />{" "}
                            {/* Tamaño fijo de la imagen */}
                          </div>
                          <div>Linear Acceleration</div>
                        </div>
                      }
                      value={
                        aceleracionLineal1_x[9] +
                        ", " +
                        aceleracionLineal1_y[9] +
                        ", " +
                        aceleracionLineal1_z[9] +
                        " m/s²"
                      }
                      style={{
                        borderRadius: 20,
                        height: "125px",
                        backgroundColor: "#1F264B",
                      }}
                    />
                  </CCol>
                  <CCol lg={6}>
                    <CWidgetStatsF
                      className="mb-4"
                      title={
                        <div
                          className="title-class2"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <div style={{ width: "24px", marginRight: "-10px" }}>
                            {" "}
                            {/* Ancho fijo del contenedor del icono */}
                            <img
                              src={VelocidadIcon}
                              alt="Icono"
                              style={{
                                height: "45px",
                                marginLeft: "-55px",
                                marginTop: "-10px",
                              }}
                            />{" "}
                            {/* Tamaño fijo de la imagen */}
                          </div>
                          <div>Angular Velocity</div>
                        </div>
                      }
                      value={
                        velocidadAngular_x[9] +
                        ", " +
                        velocidadAngular_y[9] +
                        ", " +
                        velocidadAngular_z[9] +
                        " rad/s"
                      }
                      style={{
                        borderRadius: 20,
                        height: "125px",
                        backgroundColor: "#1F264B",
                      }}
                    />
                  </CCol>
                  <CCol lg={12}>
                    <CWidgetStatsF
                      className="mb-4"
                      //titulo en minuscula
                      title={
                        <div
                          className="title-class2"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <div style={{ width: "24px", marginRight: "-10px" }}>
                            {" "}
                            {/* Ancho fijo del contenedor del icono */}
                            <img
                              src={InclinacionIcon}
                              alt="Icono"
                              style={{
                                height: "50px",
                                marginLeft: "-50px",
                                marginTop: "-10px",
                              }}
                            />{" "}
                            {/* Tamaño fijo de la imagen */}
                          </div>
                          <div>Inclination</div>
                        </div>
                      }
                      value={
                        inclinacion1_x[9] +
                        ", " +
                        inclinacion1_y[9] +
                        ", " +
                        inclinacion1_z[9] +
                        " °"
                      }
                      style={{
                        borderRadius: 20,
                        height: "125px",
                        backgroundColor: "#1F264B",
                      }}
                    />
                  </CCol>
                </CRow>
              </CCol>
              <CCol xl={4}>
                <CWidgetStatsA
                  className="mb-4"
                  value={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ marginRight: "20px" }}>
                        {pulsoCardiacoBPM[9]}{" "}
                        <span className="fs-6 fw-normal">BPM</span>
                      </div>
                      <div style={{ marginLeft: "auto" }}>
                        {" "}
                        {/* Estilo para alinear a la derecha */}
                        <img
                          src={PulsoCardiacoIcon}
                          alt="Icono"
                          height={"50px"}
                        />
                      </div>
                    </div>
                  }
                  title="Heart Rate"
                  style={{
                    borderRadius: 20,
                    backgroundColor: "#1F264B",
                  }}
                  chart={
                    <CChartLine
                      className="mt-3 mx-3"
                      style={{ height: "166px" }}
                      data={{
                        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        datasets: [
                          {
                            label: "My First dataset",
                            backgroundColor: "transparent",
                            borderColor: "rgba(255,255,255,.55)",
                            pointBackgroundColor: "#5856d6",
                            data: pulsoCardiacoBPM,
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
                            min: Math.min(...pulsoCardiacoBPM) - 3,
                            max: Math.max(...pulsoCardiacoBPM) + 3,
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
                      title={
                        <div
                          className="title-class2"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <div style={{ width: "24px", marginRight: "-10px" }}>
                            {" "}
                            {/* Ancho fijo del contenedor del icono */}
                            <img
                              src={GravitatoriaIcon}
                              alt="Icono"
                              style={{
                                height: "45px",
                                marginLeft: "-50px",
                                marginTop: "-10px",
                              }}
                            />{" "}
                            {/* Tamaño fijo de la imagen */}
                          </div>
                          <div>Gravitational Intensity</div>
                        </div>
                      }
                      value={intensidadGravitatoria[9] + " m/s²"}
                      style={{
                        borderRadius: 20,
                        height: "125px",
                        backgroundColor: "#1F264B",
                      }}
                    />
                  </CCol>
                  <CCol lg={12}>
                    <CWidgetStatsF
                      className="mb-4"
                      title={
                        <div
                          className="title-class2"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <div style={{ width: "24px", marginRight: "-10px" }}>
                            {" "}
                            {/* Ancho fijo del contenedor del icono */}
                            <img
                              src={MagneticaIcon}
                              alt="Icono"
                              style={{
                                height: "45px",
                                marginLeft: "-50px",
                                marginTop: "-10px",
                              }}
                            />{" "}
                            {/* Tamaño fijo de la imagen */}
                          </div>
                          <div>Magnetic intensity</div>
                        </div>
                      }
                      value={intensidadMagnetica[9] + " µT"}
                      style={{
                        borderRadius: 20,
                        height: "125px",
                        backgroundColor: "#1F264B",
                      }}
                    />
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
          </>
        )}
        {filter === "Rover" && (
          <>
            <CRow>
              <CCol xl={4}>
                <CWidgetStatsA
                  className="mb-4"
                  value={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ marginRight: "20px" }}>
                        {impacto[9]} <span className="fs-6 fw-normal">N</span>
                      </div>
                      <div style={{ marginLeft: "auto" }}>
                        {" "}
                        {/* Estilo para alinear a la derecha */}
                        <img src={ImpactoIcon} alt="Icono" height={"50px"} />
                      </div>
                    </div>
                  }
                  style={{
                    borderRadius: 20,
                    backgroundColor: "#1F264B",
                    fontFamily: "Poppins",
                  }}
                  title={"Impact"}
                  chart={
                    <CChartLine
                      className="mt-3 mx-3"
                      style={{
                        height: "60px",
                      }}
                      data={{
                        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        datasets: [
                          {
                            label: "My First dataset",
                            backgroundColor: "transparent",
                            borderColor: "rgba(255,255,255,.55)",
                            pointBackgroundColor: "#5856d6",
                            data: impacto,
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
                            min: Math.min(...impacto) - 3,
                            max: Math.max(...impacto) + 3,
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
                ></CWidgetStatsA>
              </CCol>
              <CCol xl={4}>
                <CWidgetStatsA
                  className="mb-4"
                  value={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ marginRight: "20px" }}>
                        {concentracionGas[9]}{" "}
                        <span className="fs-6 fw-normal">ppm</span>
                      </div>
                      <div style={{ marginLeft: "auto" }}>
                        {" "}
                        <img src={Gas} alt="Icono" height={"50px"} />
                      </div>
                    </div>
                  }
                  style={{
                    borderRadius: 20,
                    backgroundColor: "#1F264B",
                  }}
                  title="Gas Concentration"
                  chart={
                    <CChartLine
                      className="mt-3 mx-3"
                      style={{ height: "60px" }}
                      data={{
                        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        datasets: [
                          {
                            label: "My First dataset",
                            backgroundColor: "transparent",
                            borderColor: "rgba(255,255,255,.55)",
                            data: concentracionGas,
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
                            min: Math.min(...concentracionGas) - 3,
                            max: Math.max(...concentracionGas) + 3,
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
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ marginRight: "20px" }}>
                        {vibracion[9]}{" "}
                        <span className="fs-6 fw-normal">Hz</span>
                      </div>
                      <div style={{ marginLeft: "auto" }}>
                        {" "}
                        <img src={VibrationIcon} alt="Icono" height={"50px"} />
                      </div>
                    </div>
                  }
                  style={{
                    borderRadius: 20,
                    backgroundColor: "#1F264B",
                  }}
                  title="Vibration"
                  chart={
                    <CChartLine
                      className="mt-3 mx-3"
                      style={{ height: "60px" }}
                      data={{
                        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        datasets: [
                          {
                            label: "My First dataset",
                            backgroundColor: "transparent",
                            borderColor: "rgba(255,255,255,.55)",
                            data: vibracion,
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
                            min: Math.min(...vibracion) - 3,
                            max: Math.max(...vibracion) + 3,
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
                      title={
                        <div
                          className="title-class2"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <div style={{ width: "24px", marginRight: "-10px" }}>
                            {" "}
                            {/* Ancho fijo del contenedor del icono */}
                            <img
                              src={LongitudIcon}
                              alt="Icono"
                              style={{
                                height: "45px",
                                marginLeft: "-50px",
                                marginTop: "-10px",
                              }}
                            />{" "}
                            {/* Tamaño fijo de la imagen */}
                          </div>
                          <div>Longitude</div>
                        </div>
                      }
                      value={longitud[9] + " °"}
                      style={{
                        borderRadius: 20,
                        height: "125px",
                        backgroundColor: "#1F264B",
                      }}
                    />
                  </CCol>
                  <CCol lg={6}>
                    <CWidgetStatsF
                      className="mb-4"
                      title={
                        <div
                          className="title-class2"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <div style={{ width: "24px", marginRight: "-10px" }}>
                            {" "}
                            {/* Ancho fijo del contenedor del icono */}
                            <img
                              src={AltitudIcon}
                              alt="Icono"
                              style={{
                                height: "45px",
                                marginLeft: "-50px",
                                marginTop: "-10px",
                              }}
                            />{" "}
                            {/* Tamaño fijo de la imagen */}
                          </div>
                          <div>Altitude</div>
                        </div>
                      }
                      value={altitud[9] + " m"}
                      style={{
                        borderRadius: 20,
                        height: "125px",
                        backgroundColor: "#1F264B",
                      }}
                    />
                  </CCol>
                  <CCol lg={12}>
                    <CWidgetStatsF
                      className="mb-4"
                      title={
                        <div
                          className="title-class2"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <div style={{ width: "24px", marginRight: "-10px" }}>
                            {" "}
                            {/* Ancho fijo del contenedor del icono */}
                            <img
                              src={LatitudIcon}
                              alt="Icono"
                              style={{
                                height: "45px",
                                marginLeft: "-50px",
                                marginTop: "-10px",
                              }}
                            />{" "}
                            {/* Tamaño fijo de la imagen */}
                          </div>
                          <div>Latitude</div>
                        </div>
                      }
                      value={latitud[9] + " °"}
                      style={{
                        borderRadius: 20,
                        height: "125px",
                        backgroundColor: "#1F264B",
                      }}
                    />
                  </CCol>
                </CRow>
              </CCol>
              <CCol xl={4}>
                <CWidgetStatsA
                  className="mb-4"
                  value={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ marginRight: "20px", fontSize: "18px" }}>
                        {inclinacionRover_x[9] +
                          ", " +
                          inclinacionRover_y[9] +
                          ", " +
                          inclinacionRover_z[9]}{" "}
                        <span className="fs-6 fw-normal">°</span>
                      </div>
                      <div style={{ marginLeft: "auto" }}>
                        {" "}
                        <img
                          src={InclinacionIcon}
                          alt="Icono"
                          height={"50px"}
                        />
                      </div>
                    </div>
                  }
                  title="Inclination"
                  style={{
                    borderRadius: 20,
                    backgroundColor: "#1F264B",
                  }}
                  chart={
                    <CChartLine
                      className="mt-3 mx-3"
                      style={{ height: "166px" }}
                      data={{
                        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        datasets: [
                          {
                            label: "inclinationX",
                            backgroundColor: "transparent",
                            borderColor: "rgba(255,255,255,.55)",
                            pointBackgroundColor: "#5856d6",
                            data: inclinacionRover_x,
                          },
                          {
                            label: "inclinationY",
                            backgroundColor: "transparent",
                            borderColor: "rgba(255,255,255,.55)",
                            pointBackgroundColor: "#ff6384",
                            data: inclinacionRover_y,
                          },
                          {
                            label: "inclinationZ",
                            backgroundColor: "transparent",
                            borderColor: "rgba(255,255,255,.55)",
                            pointBackgroundColor: "#ffcd56",
                            data: inclinacionRover_z,
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
                            min: Math.min(...inclinacionRover_z) - 3,
                            max: Math.max(...inclinacionRover_z) + 3,
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
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ marginRight: "20px" }}>
                        {radiacionUV[9]}{" "}
                        <span className="fs-6 fw-normal">mW/cm²</span>
                      </div>
                      <div style={{ marginLeft: "auto" }}>
                        {" "}
                        <img src={RadiacionIcon} alt="Icono" height={"50px"} />
                      </div>
                    </div>
                  }
                  title="UV Radiation"
                  style={{
                    borderRadius: 20,
                    backgroundColor: "#1F264B",
                  }}
                  chart={
                    <CChartLine
                      className="mt-3 mx-3"
                      style={{ height: "165px" }}
                      data={{
                        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        datasets: [
                          {
                            label: "Radiaton",
                            backgroundColor: "transparent",
                            borderColor: "rgba(255,255,255,.55)",
                            pointBackgroundColor: "#5856d6",
                            data: radiacionUV,
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
                            min: Math.min(...radiacionUV) - 3,
                            max: Math.max(...radiacionUV) + 3,
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
          </>
        )}
      </CContainer>
    );
}

export default Sensors