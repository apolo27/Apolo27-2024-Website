import './Sponsors.css'
import blankProfile from '../../imgs/blank-profile.png'
import Container from 'react-bootstrap/Container';

function Sponsors(){
  return(
    <Container>
        <div className='titleArea'>
            <h1 className='sponsorsPage-title'>Supporting Our Work: A Look at Our Dedicated Sponsors</h1>
            <h3 className='sponsorsPage-text'>Discover the valuable role of sponsors in helping us achieve our mission and learn more about the individuals and companies who make it all possible.</h3>
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
    </Container>
  )
}

export default Sponsors;