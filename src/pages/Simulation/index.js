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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: 50,
        }}
      >
        <h2 className="simulation_header">
          Nasa Human Exploration Rover Challenge Simulator
        </h2>

        {window.screen.width >= 1280 ? (
          <iframe title='nasa herc simulator' frameborder="0" src="https://itch.io/embed-upload/10076757?color=333333" allowfullscreen=""
            width="1280" 
            height="800">
          </iframe>
        ) : (
          <h1 className="simulation_warning">{t("SimulationWarning")}</h1>
        )}

        <Container>
          <hr></hr>

          <div className="simulation_info">
            {
              <Carousel
                style={{ paddingTop: 25, paddingLeft: 25, paddingRight: 25 }}
              >
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={customizacion}
                    alt="second"
                  ></img>
                  <Carousel.Caption>
                    <h2>Customize your Rover!</h2>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={obstacles}
                    alt="second"
                  ></img>
                  <Carousel.Caption>
                    <h2>Go through Obstacles!</h2>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100" src={moon} alt="second"></img>
                  <Carousel.Caption>
                    <h2>Visit the Moon!</h2>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100" src={tasks} alt="second"></img>
                  <Carousel.Caption>
                    <h2>Finish tasks!</h2>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            }

            <div className="cards">
              <Card>
                <Card.Header>
                  {t("Task")} 1: {t("Regolith-removal")}
                </Card.Header>
                <Card.Img variant="top" src={task1}></Card.Img>
                <Card.Body>
                  <Card.Text>{t("taskdesc1")}</Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Header>
                  {t("Task")} 2: {t("Moon-maintenance")}
                </Card.Header>
                <Card.Img variant="top" src={task2}></Card.Img>
                <Card.Body>
                  <Card.Text>{t("taskdesc2")}</Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Header>
                  {t("Task")} 3: {t("Power-it-up")}
                </Card.Header>
                <Card.Img variant="top" src={task3}></Card.Img>
                <Card.Body>
                  <Card.Text>{t("taskdesc3")}</Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Header>
                  {t("Task")} 4: {t("Rover-Redundancy")}
                </Card.Header>
                <Card.Img variant="top" src={task4}></Card.Img>
                <Card.Body>
                  <Card.Text>{t("taskdesc4")}</Card.Text>
                </Card.Body>
              </Card>
            </div>

            <section className="simulation_text">
              <h4>
                On this Simulation, you will indulge into the competition
                team Apolo 27 will go through in Huntsville, Alabama. Learn the obstacles and tasks
                our Rover will face and help us get first in the shortest time possible! We trust you
                on this mission!

              </h4>
            </section>
          </div>
        </Container>
      </div>
    );
}

export default RoverSimulation;