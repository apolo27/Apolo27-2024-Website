import './Simulation.css'
import { Unity, useUnityContext } from "react-unity-webgl";
import {Container, Carousel} from 'react-bootstrap';

import customizacion from '../../imgs/Simulation/customization.png'
import obstacles from '../../imgs/Simulation/obstacle.png'
import moon from '../../imgs/Simulation/moon.png'
import tasks from '../../imgs/Simulation/tasks.png'

function RoverSimulation(props){
  const t = props.t;
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/Build.loader.js",
    dataUrl: "Build/Build.data",
    frameworkUrl: "Build/Build.framework.js",
    codeUrl: "Build/Build.wasm",
  });

  if(window.screen.width < 1280) {
    return (
      <div className="stars">      
        <h1>{t('SimulationWarning')}</h1>
        <div className="objects">
          <div className="box_astronaut">
            <img className="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px" alt='Astronauta'/>
          </div>
        </div>
        <div className="glowing_stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
      </div>
    )
    }
    else{
      return (
        <div style={{textAlign: 'center'}}>
          <h1>Rover Simulation</h1>
          <Container>
            <Unity unityProvider={unityProvider} className='simulation'/>
            <hr></hr>
            <div className="simulation_info">
              <Carousel>
                <Carousel.Item>
                  <img className='d-block w-100' src={customizacion} alt='second'></img>
                  <Carousel.Caption>
                    <h2>¡Customiza tu rover!</h2>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className='d-block w-100' src={obstacles} alt='second'></img>
                  <Carousel.Caption>
                    <h2>¡Esquiva obstaculos!</h2>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className='d-block w-100' src={moon} alt='second'></img>
                  <Carousel.Caption>
                    <h2>¡Visita La Luna!</h2>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className='d-block w-100' src={tasks} alt='second'></img>
                  <Carousel.Caption>
                    <h2>¡Cumple tareas!</h2>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              <section className='simulation_text'>
                <h2>Simulador del NASA Human Exploration Rover Challenge</h2>
                <h4>Con este simulador podrás poner a prueba un rover tanto en Huntsville, Alabama (lugar donde el verdadero NASA HERC toma lugar) como en <strong>LA LUNA</strong>. También podrás cumplir tareas asignadas en la competencia real.</h4>
              </section>
            </div>
          </Container>
        </div>
      )
    }
}

export default RoverSimulation;