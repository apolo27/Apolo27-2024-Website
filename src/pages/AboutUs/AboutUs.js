import './AboutUs.css';
import blankPicture from '../../imgs/blank-profile.png'
import Card from 'react-bootstrap/Card';

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

  return(
    <div style={{textAlign: "center"}}>
      <h1>ABOUT US</h1>
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
    </div>
  )
}

export default AboutUs;