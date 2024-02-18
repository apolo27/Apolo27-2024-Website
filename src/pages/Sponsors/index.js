import './Sponsors.css'
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
    let t = props.t;
    const sponsors =[
        {
            name: 'bmCargo', 
            img: bmCargo
        },
        {
            name: 'Coopreservas',
            img: coopreservas
        },
        {
            name: 'Olé',
            img: ole
        },
        {
            name: 'Pedidos Ya', 
            img: pedidosYa
        },
        {
            name: 'Pizzarelli',
            img: pizzarelli
        },
        {
            name: 'AES',
            img: aes
        },
        {
            name: 'Banreservas',
            img: banreservas
        },
        {
            name: 'Belkoro',
            img: Belkoro
        },
        {
            name: 'Cardnet',
            img: cardnet
        },
        {
            name: 'Cmi',
            img: cmi
        },
    ]
    
  return(
    <div className='sponsors-page'>
        <Container>
            <div className='titleArea'>
                <h1 className='sponsorsPage-title'>{t('Sponsor-Us-Title')}</h1>
                <h3 className='sponsorsPage-text'>{t('Sponsor-Us-SubTitle')}</h3>
            </div>

            <div className="logos">
                <div className="logos-slide">
                    {
                        sponsors.map(sponsor => {
                            return <img className='logo' src={sponsor.img} alt={sponsor.name} width={100}></img>
                        })
                    }
                    
                </div>
            
                <div className="logos-slide">
                {
                    sponsors.map(sponsor => {
                        return <img className='logo' src={sponsor.img} alt={sponsor.name} width={100}></img>
                    })
                }
                </div>
            </div>

            <button className="button-82-pushable">
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text">
                    {t('Sponsor-us')}
                </span>
            </button>
        </Container>
    </div>
  )
}

export default Sponsors;