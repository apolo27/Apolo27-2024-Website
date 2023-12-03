import './Home.css'
import {Container, Card, Button} from 'react-bootstrap';
import Grid from '@mui/material/Grid';

import astronaut from '../../imgs/Home/astronaut.png'
import arrow from '../../imgs/Home/arrow.png'
import stem1 from '../../imgs/Home/stem1.png'
import stem2 from '../../imgs/Home/stem2.png'
import stem3 from '../../imgs/Home/stem3.png'

function Home(props){
  let t = props.t;

  return(
    <div>
      <Container>
        <Grid container={true} spacing={0} rowSpacing={3} wrap='wrap'>
          <Grid item>
            <Card className='hero'>
              <Card.Body style={{textAlign: 'left', height: 350, zIndex: 0}}>
                <Card.Subtitle className='hero-subtitle'>{t('Hero-Sub')}</Card.Subtitle>
                <Card.Title className="hero-title">{t('Hero-Title')}</Card.Title>
                <Card.Img src={astronaut} className='astronaut' style={{width: 360, height: 415, position: 'absolute', right: 0, top: 15, zIndex: -1}}/>
              </Card.Body>
            </Card>
          </Grid>

          <Grid item xs="auto">
            <Card className='grafico'>
              <Card.Body>
                <Button href='/Data-Dashboard' style={{position: 'absolute'}}>{t('Rovers-data')}</Button>               
              </Card.Body>
            </Card>
          </Grid>

          <Grid item xs="auto">
            <Card className='mapa'>
              <Card.Body>
                <Button href='Data-Dashboard' style={{position: 'absolute'}}>{t('Live-location')}</Button>
              </Card.Body>
            </Card>
          </Grid>

          <Grid item xs="auto">
            <Card className='stem-with-us-home'>
              <Card.Body>
                <a href='Stem-With-Us'>
                    <Card.Title className="stem-Title">Stem 101</Card.Title>
                    <Card.Subtitle className='stem-SubTitle'>{t('learn-projects')}</Card.Subtitle>
                    <Card.Img src={stem1} className='stemChar1' style={{position: 'absolute'}}/>
                    <Card.Img src={stem2} className='stemChar2' style={{position: 'absolute'}}/>
                    <Card.Img src={stem3} className='stemChar3' style={{position: 'absolute'}}/>
                </a>
              </Card.Body>
            </Card>
          </Grid>

          <Grid item xs="auto">
            <Card className='sponsor-us'>
              <Card.Body>
                <a href='Sponsors'>
                  <Card.Subtitle >{t('GetToKnowUs')}</Card.Subtitle>
                  <Card.Title className="mb-3" style={{fontWeight: 600, fontSize: 40}}>{t('Sponsor-us')}</Card.Title>
                  <Card.Img src={arrow} style={{width: 83, position: 'absolute', right: 0, top: 0}}/>
                  <Card.Subtitle>{t('Sponsor-us-Sub')}</Card.Subtitle>
                </a>
              </Card.Body>
            </Card>
          </Grid>
        </Grid>
    </Container>
    </div>
  )
}

export default Home;