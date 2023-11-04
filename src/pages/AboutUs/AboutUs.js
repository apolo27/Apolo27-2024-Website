import './AboutUs.css';
import {Container, Card, Carousel} from 'react-bootstrap';
import { Chrono } from "react-chrono";
import first from '../../imgs/carousel/first.jpg'
import second from '../../imgs/carousel/second.jpeg'
import third from '../../imgs/carousel/third.jpg'
import fourth from '../../imgs/carousel/fourth.jpg'


function AboutUs(){
  const members = [
    {
      img: 'https://apolo27.com/img/about-us/team-members/ezequiel.png',
      nombre: "Ezequiel Díaz",
      titulo: "Mechanical Engineering",
      equipo: "Team Advisor"
    },
    {
      img: 'https://apolo27.com/img/about-us/team-members/ingrid.png',
      nombre: "miembro 2",
      titulo: "titulo 2",
      equipo: "equipo 2"
    },
    {
      img: 'https://apolo27.com/img/about-us/team-members/miguela.png',
      nombre: "miembro 3",
      titulo: "titulo 3",
      equipo: "equipo 3"
    },
    {
      img: 'https://apolo27.com/img/about-us/team-members/rosanna.png',
      nombre: "miembro 4",
      titulo: "titulo 4",
      equipo: "equipo 4"
    },
    {
      img: 'https://apolo27.com/img/about-us/team-members/faisy.png',
      nombre: "miembro 5",
      titulo: "titulo 5",
      equipo: "equipo 5"
    },
    {
      img: 'https://apolo27.com/img/about-us/team-members/franmil.png',
      nombre: "miembro 6",
      titulo: "titulo 6",
      equipo: "equipo 6"
    },
    {
      img: 'https://apolo27.com/img/about-us/team-members/raymond.png',
      nombre: "miembro 7",
      titulo: "titulo 7",
      equipo: "equipo 7"
    },
    {
      img: 'https://apolo27.com/img/about-us/team-members/guadalupe.png',
      nombre: "miembro 8",
      titulo: "titulo 8",
      equipo: "equipo 8"
    }
  ]

  const items = [
    {
      title: "2019",
      cardTitle: "MAKING HISTORY",
      cardSubtitle: "REPRESENTING DR IN NASA HERC",
      cardDetailedText:"In 2019, we started with just a few members, and it was a challenging time for us. But we were determined to represent our country for the first time ever in the NASA Human Exploration Rover Challenge, and we did just that.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://apolo27.com/img/about-us/2019.jpg"
        }
      }    
    },
    {
      title: "2020",
      cardTitle: "LEARNING FROM CHALLENGES",
      cardSubtitle: "FIRST AWARD AMID GLOBAL PANDEMIC",
      cardDetailedText:"In 2020, despite the challenges posed by the pandemic, we persevered and learned valuable lessons that helped us grow, which led to win our first award: \"System Safety Award\".",
      media: {
        type: "IMAGE",
        source: {
          url: "https://apolo27.com/img/about-us/2020.jpg"
        }
      }
    },
    {
      title: "2021",
      cardTitle: "PUSHING OURSELVES TO NEW HEIGHTS",
      cardSubtitle: "ADAPTATION",
      cardDetailedText:"In 2021, we continued to promote STEM in our country. Also, we focused in making the Rover's design even better. We also successfully raised awareness for STEM in our country.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://apolo27.com/img/about-us/2021.jpg"
        }
      }
    },
    {
      title: "2022",
      cardTitle: "INSPIRING THE NEXT GENERATION",
      cardSutitle: "WINNING STEM ENGAGEMENT AWARD",
      cardDetailedText:"In 2022, we focused on even more aspects of STEM. This led us to create the STEM Tour, an event where we showcased interactive STEM projects. This year, we won \"STEM Engagement Award\".",
      media: {
        type: "IMAGE",
        source: {
          url: "https://apolo27.com/img/about-us/2022.jpg"
        }
      }
    },
    {
      title: "2023",
      cardTitle: "PUSHING THE BOUNDARIES",
      cardSubtitle: "PRESENT",
      cardDetailedText:"In 2023, we're still in the process, but our focus remains on making our rover the best one yet. We also believe that STEM can change the world, that's why we are committed to push it even more in our country.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://apolo27.com/img/about-us/2023.jpg"
        }
      }
    },
    {
      title: "2024",
      cardTitle: "Dunkirk",
      cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg"
        }
      }
    },
  ];

  return(
    <div style={{textAlign: "center"}}>
      <h1>ABOUT US</h1>
      <Carousel>
        <Carousel.Item className='carousel-item'>
          <img className='d-block w-100' src={first} alt='first'></img>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img className='d-block w-100' src={second} alt='second'></img>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img className='d-block w-100' src={third} alt='third'></img>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img className='d-block w-100' src={fourth} alt='fourth'></img>
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
      <Container>
        <section className='section-cronologia'>
          <h1>Our Story</h1>
          <h2>Get to know us: The Birth of Apolo 27. From Dreaming to Reality</h2>
          <Chrono className='cronologia' 
            items={items} 
            mode="VERTICAL_ALTERNATING" 
            allowDynamicUpdate
            hideControls
            enableBreakPoint verticalBreakPoint={900}
            fontSizes={{
              cardSubtitle: '1.75rem',
              cardText: '1rem',
              cardTitle: '1.25rem',
              title: '2rem',
            }}
            />
        </section>

        <section>
          <h1>Our Members</h1>
          <div className='members'>
            {
              members.map((member) => {
                return(
                  <Card key={member.nombre} style={{ width: '18rem', margin: '15px'}}>
                  <Card.Img variant="top" src={member.img} />
                  <Card.Body>
                    <Card.Title className="mb-3">{member.nombre}</Card.Title>
                    <Card.Subtitle className="text-muted">{member.titulo}</Card.Subtitle>
                    <Card.Title>{member.equipo}</Card.Title>
                  </Card.Body>
                </Card>
                )
              })
            }
          </div>
        </section>
      </Container>
    </div>
  )
}

export default AboutUs;