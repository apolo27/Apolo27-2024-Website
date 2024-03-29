import './Sponsors.css'
import {Container} from 'react-bootstrap/';

import bmCargo from '../../imgs/Sponsors/BMCargo.png'
import coopreservas from '../../imgs/Sponsors/coopreservas.png'
import ole from '../../imgs/Sponsors/ole.png'
import pedidosYa from '../../imgs/Sponsors/pedidosya.png'
import pizzarelli from '../../imgs/Sponsors/pizzarellilogo.png'
import aes from '../../imgs/Sponsors/aes.PNG'
import banreservas from '../../imgs/Sponsors/banreservas.png'
import Belkoro from '../../imgs/Sponsors/Belkoro.PNG'
import cardnet from '../../imgs/Sponsors/cardnet.png'
import cesarMotors from '../../imgs/Sponsors/cesarmotors.png'
import guarinaMax from '../../imgs/Sponsors/max.png'
import museoAmbar from '../../imgs/Sponsors/museoAmbar.png'
import ctav from '../../imgs/Sponsors/ctav.png'
import printPlus from '../../imgs/Sponsors/PrintPlus.png'


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
            name: 'Cesar Motors',
            img: cesarMotors
        },
        {
            name: 'Guarina Max',
            img: guarinaMax
        },
        {
            name: 'CTAV',
            img: ctav
        },
        {
            name: 'Museo del ambar',
            img: museoAmbar
        },
        {
            name: 'Print Plus',
            img: printPlus
        }
    ]
    
  return(
    <div className='sponsors-page'>
        <Container style={{textAlign: 'center'}}>
            <div className='titleArea'>
                <h1 className='sponsorsPage-title'>{t('Sponsor-Us-Title')}</h1>
                <h3 className='sponsorsPage-text'>{t('Sponsor-Us-SubTitle')}</h3>
            </div>

            <div className="logos">
                <div className="logos-slide">
                    {
                        sponsors.map((sponsor, i) => {
                            return <img key={i} className='logo' src={sponsor.img} alt={sponsor.name} ></img>
                        })
                    }
                    
                </div>
            
                <div className="logos-slide">
                {
                    sponsors.map((sponsor, i) => {
                        return <img key={i} className='logo' src={sponsor.img} alt={sponsor.name} ></img>
                    })
                }
                </div>
            </div>
            {
                <a href="https://www.paypal.com/donate/?hosted_button_id=4ERGH2W4NPAWW">
                    <button className="button-82-pushable">
                        <span className="button-82-shadow"></span>
                        <span className="button-82-edge"></span>
                        <span className="button-82-front text">
                            {t('Sponsor-us')}
                        </span>
                    </button>
                </a>
            }
        </Container>
    </div>
  )
}

export default Sponsors;