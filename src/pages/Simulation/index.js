import './Simulation.css'
import {Container, Carousel, Card} from 'react-bootstrap';

import customizacion from '../../imgs/Simulation/customization.png'
import obstacles from '../../imgs/Simulation/obstacle.png'
import moon from '../../imgs/Simulation/moon.png'
import tasks from '../../imgs/Simulation/tasks.png'

import task1 from '../../imgs/Simulation/task1.png'
import task2 from '../../imgs/Simulation/task2.png'
import task3 from '../../imgs/Simulation/task3.png'
import task4 from '../../imgs/Simulation/task4.png'

function RoverSimulation(props){
  const t = props.t;

    return (
      <div style={{textAlign: 'center', marginTop: 50}}>
        <Container>
        <h2 className='simulation_header'>Simulador del NASA Human Exploration Rover Challenge</h2>
          {
            window.screen.width >= 1280 ?
            <iframe title="NASA HERC SIMULATION" frameborder="0" src="https://itch.io/embed-upload/10012853?color=333333" allowfullscreen="" width="1280" height="740"><a href="https://ctrl-sebastian.itch.io/rover-simulation">Play Rover Simulation on itch.io</a></iframe>
            : <h1 className='simulation_warning'>{t('SimulationWarning')}</h1>
          }
          
          <hr></hr>

          <div className="simulation_info">
            {
              <Carousel style={{paddingTop: 25, paddingLeft: 25, paddingRight: 25}}>
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
            }

            <div className="cards">
              <Card>
                <Card.Header>{t('Task')} 1: {t('Regolith-removal')}</Card.Header>
                <Card.Img variant="top" src={task1}></Card.Img>
                <Card.Body>
                  <Card.Text>
                    {t('taskdesc1')}
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Header>{t('Task')} 2: {t('Moon-maintenance')}</Card.Header>
                <Card.Img variant="top" src={task2}></Card.Img>
                <Card.Body>
                  <Card.Text>
                    {t('taskdesc2')}
                    
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Header>{t('Task')} 3: {t('Power-it-up')}</Card.Header>
                <Card.Img variant="top" src={task3}></Card.Img>
                <Card.Body>
                  <Card.Text>
                    {t('taskdesc3')}
                    
                  </Card.Text>
                </Card.Body>
              </Card>
              
              <Card>
                <Card.Header>{t('Task')} 4: {t('Rover-Redundancy')}</Card.Header>
                <Card.Img variant="top" src={task4}></Card.Img>
                <Card.Body>
                  <Card.Text>
                    {t('taskdesc4')}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <section className='simulation_text'>
              <h4>Ya sea que estés buscando una experiencia educativa emocionante o simplemente quieras desafiar tus habilidades de conducción y resolución de problemas, nuestra simulación del NASA HERC es la opción perfecta. ¡Únete a nosotros en esta emocionante aventura espacial y haz historia como un auténtico explorador del cosmos!</h4>
            </section>
          </div>
        </Container>
      </div>
    )
}


export default RoverSimulation;