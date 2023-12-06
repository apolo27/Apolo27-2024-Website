import './PageNotFound.css'
import {Container} from 'react-bootstrap/';


function PageNotFound(props){
    let t = props.t;
  return(
    <div className='bg-purple' style={{textAlign: "center"}}>  
        <div className="stars">
            <div className="central-body">
                <h1 style={{fontSize: 148, fontWeight: 700}}>404</h1>
                <h1>Looks like you are lost in space</h1>
                <a href="/" className="btn-go-home" target="_blank">GO BACK HOME</a>
            </div>
            <div className="objects">
                <img className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px" />
                <div className="earth-moon">
                    <img className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px" />
                    <img className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px" />
                </div>
                <div className="box_astronaut">
                    <img className="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px" />
                </div>
            </div>
            <div className="glowing_stars">
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>

            </div>

        </div>
    </div>
  )
}

export default PageNotFound;