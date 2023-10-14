import './AboutUs.css';
import blankPicture from '../../imgs/blank-profile.png'
import Card from 'react-bootstrap/Card';

function AboutUs(){
  const members = [
    {
      img: blankPicture,
      nombre: "miembro 1",
      titulo: "titulo 1",
      equipo: "equipo 1"
    },
    {
      img: blankPicture,
      nombre: "miembro 2",
      titulo: "titulo 2",
      equipo: "equipo 2"
    },
    {
      img: blankPicture,
      nombre: "miembro 3",
      titulo: "titulo 3",
      equipo: "equipo 3"
    },
    {
      img: blankPicture,
      nombre: "miembro 4",
      titulo: "titulo 4",
      equipo: "equipo 4"
    },
    {
      img: blankPicture,
      nombre: "miembro 5",
      titulo: "titulo 5",
      equipo: "equipo 5"
    },
    {
      img: blankPicture,
      nombre: "miembro 1",
      titulo: "titulo 1",
      equipo: "equipo 1"
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
              <Card.Title>{member.nombre}</Card.Title>
              <Card.Title>{member.titulo}</Card.Title>
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