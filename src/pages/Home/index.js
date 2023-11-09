import './Home.css'
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import astronaut from '../../imgs/Home/astronaut.png'
import grafico from '../../imgs/Home/chart-graphic.png'
import mapa from '../../imgs/Home/mapa.png'
import arrow from '../../imgs/Home/arrow.png'
import stem1 from '../../imgs/Home/stem1.png'
import stem2 from '../../imgs/Home/stem2.png'
import stem3 from '../../imgs/Home/stem3.png'

function Home(){
  
  return(
    <div style={{textAlign: "center"}}>
      <h1>HOME</h1>
      <Container>
        <Row>
        <Col>
          <Card className='hero'>
              <Card.Body style={{textAlign: 'left', height: 350}}>
                <Card.Subtitle style={{fontWeight: 700, fontSize: 15}}>4 TIMES CATEGORY WINNERS AT HERC</Card.Subtitle>
                <Card.Title className="mb-3" style={{fontWeight: 800, fontSize: 48, width: 1000}}>The First Dominican Republic University Division Winners at 
                NASA’s Human Exploration Rover Challenge</Card.Title>
                <Card.Img src={astronaut} style={{width: 360, height: 415, position: 'absolute', right: 0, top: 15}}/>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <section className='windows'>
        <div className='card-home'>
            <Card className='grafico'>
              <Card.Body>
                <Button href='/Data-Dashboard' style={{position: 'absolute'}}>Rover's data</Button>
                <Card.Img src={grafico}/>
              </Card.Body>
            </Card>
          </div>

          <div className='card-home'>
            <Card className='mapa'>
              <Card.Body>
                <Button href='Data-Dashboard' style={{position: 'absolute'}}>Live location</Button>
              </Card.Body>
            </Card>
          </div>

          <div className='card-home'>
            <Card className='stem-with-us-home'>
              <Card.Body>
                <a href='Stem-With-Us'>
                    <Card.Title className="mb-3" style={{fontWeight: 800, fontSize: 40}}>Stem 101</Card.Title>
                    <Card.Subtitle style={{fontWeight: 400, fontSize: 13}}>Learn fun DIY Projects with Apolo 27!</Card.Subtitle>
                    <Card.Img src={stem1} style={{width: 190, position: 'absolute', top: 115, right: -50}}/>
                    <Card.Img src={stem2} style={{width: 189, position: 'absolute', left: -50}}/>
                    <Card.Img src={stem3} style={{width: 83, position: 'absolute', left: 75, top: 75}}/>
                </a>
              </Card.Body>
            </Card>
          </div>

          <div className='card-home'>
            <Card className='sponsor-us'>
              <Card.Body>
                <Card.Subtitle >Get to know us. Make the difference.</Card.Subtitle>
                <Card.Title className="mb-3">Sponsor Us.</Card.Title>
                <Card.Subtitle>Your support will help us get our country
                the recognition it deserves.</Card.Subtitle>
              </Card.Body>
            </Card>
          </div>
        </section>
    </Container>
    </div>
  )
}

export default Home;