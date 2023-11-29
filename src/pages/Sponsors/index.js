import './Sponsors.css'
import blankProfile from '../../imgs/blank-profile.png'
import {Container} from 'react-bootstrap/';

function Sponsors(props){
    const t = props.t;
  return(
    <Container style={{textAlign: "center"}}>
        <div className='titleArea'>
            <h1 className='sponsorsPage-title'>{t('Sponsor-Us-Title')}</h1>
            <h3 className='sponsorsPage-text'>{t('Sponsor-Us-SubTitle')}</h3>
        </div>

        <div class="logos">
            <div class="logos-slide">
                <img src={blankProfile} alt="patrocinador" width={200}/>
                <img src={blankProfile} alt="patrocinador" width={200}/>
                <img src={blankProfile} alt="patrocinador" width={200}/>
                <img src={blankProfile} alt="patrocinador" width={200}/>
                <img src={blankProfile} alt="patrocinador" width={200}/>
                <img src={blankProfile} alt="patrocinador" width={200}/>
                <img src={blankProfile} alt="patrocinador" width={200}/>
                <img src={blankProfile} alt="patrocinador" width={200}/>
                <img src={blankProfile}alt="patrocinador" width={200}/>
                <img src={blankProfile}alt="patrocinador" width={200}/>
                <img src={blankProfile}alt="patrocinador" width={200}/>
                <img src={blankProfile}alt="patrocinador" width={200}/>
                <img src={blankProfile}alt="patrocinador" width={200}/>
                <img src={blankProfile}alt="patrocinador" width={200}/>
                <img src={blankProfile}alt="patrocinador" width={200}/>
                <img src={blankProfile}alt="patrocinador" width={200}/>
                <img src={blankProfile}alt="patrocinador" width={200}/>
            </div>
        
            <div class="logos-slide">
                <img src={blankProfile} alt="patrocinador" width={200}/>
                <img src={blankProfile} alt="patrocinador" width={200}/>
                <img src={blankProfile} alt="patrocinador" width={200}/>
                <img src={blankProfile} alt="patrocinador" width={200}/>
                <img src={blankProfile} alt="patrocinador" width={200}/>
                <img src={blankProfile} alt="patrocinador" width={200}/>
                <img src={blankProfile} alt="patrocinador" width={200}/>
                <img src={blankProfile} alt="patrocinador" width={200}/>
                <img src={blankProfile}alt="patrocinador" width={200}/>
                <img src={blankProfile}alt="patrocinador" width={200}/>
                <img src={blankProfile}alt="patrocinador" width={200}/>
                <img src={blankProfile}alt="patrocinador" width={200}/>
                <img src={blankProfile}alt="patrocinador" width={200}/>
                <img src={blankProfile}alt="patrocinador" width={200}/>
                <img src={blankProfile}alt="patrocinador" width={200}/>
                <img src={blankProfile}alt="patrocinador" width={200}/>
                <img src={blankProfile}alt="patrocinador" width={200}/>
            </div>
        </div>
        <button class="button-82-pushable">
            <span class="button-82-shadow"></span>
            <span class="button-82-edge"></span>
            <span class="button-82-front text">
                {t('Sponsor-us')}
            </span>
        </button>
    </Container>
  )
}

export default Sponsors;