import './Sponsors.css'
import blankProfile from '../../imgs/blank-profile.png'
import {Container} from 'react-bootstrap/';
import bmCargo from '../../imgs/Sponsors/BMCargo.jpeg'
import coopreservas from '../../imgs/Sponsors/coopreservas.jpeg'
import ole from '../../imgs/Sponsors/ole.jpg'
import pedidosYa from '../../imgs/Sponsors/pedidosya.jpeg'
import pizzarelli from '../../imgs/Sponsors/pizzarellilogo.jpg'
import aes from '../../imgs/Sponsors/aes.PNG'
import banreservas from '../../imgs/Sponsors/banreservas.jpeg'
import Belkoro from '../../imgs/Sponsors/Belkoro.PNG'
import cardnet from '../../imgs/Sponsors/cardnet.png'
import cmi from '../../imgs/Sponsors/cmi.png'

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
                <img className='logo' src={bmCargo} alt="patrocinador" width={100}/>
                <img className='logo' src={coopreservas} alt="patrocinador" width={100}/>
                <img className='logo' src={ole} alt="patrocinador" width={100}/>
                <img className='logo' src={pedidosYa} alt="patrocinador" width={100}/>
                <img className='logo' src={pizzarelli} alt="patrocinador" width={100}/>
                <img className='logo' src={aes} alt="patrocinador" width={100}/>
                <img className='logo' src={banreservas} alt="patrocinador" width={100}/>
                <img className='logo' src={Belkoro} alt="patrocinador" width={100}/>
                <img className='logo' src={cardnet}alt="patrocinador" width={100}/>
                <img className='logo' src={cmi}alt="patrocinador" width={100}/>
            </div>
        
            <div class="logos-slide">
                <img className='logo' src={bmCargo} alt="patrocinador" width={100}/>
                <img className='logo' src={coopreservas} alt="patrocinador" width={100}/>
                <img className='logo' src={ole} alt="patrocinador" width={100}/>
                <img className='logo' src={pedidosYa} alt="patrocinador" width={100}/>
                <img className='logo' src={pizzarelli} alt="patrocinador" width={100}/>
                <img className='logo' src={aes} alt="patrocinador" width={100}/>
                <img className='logo' src={banreservas} alt="patrocinador" width={100}/>
                <img className='logo' src={Belkoro} alt="patrocinador" width={100}/>
                <img className='logo' src={cardnet}alt="patrocinador" width={100}/>
                <img className='logo' src={cmi}alt="patrocinador" width={100}/>
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