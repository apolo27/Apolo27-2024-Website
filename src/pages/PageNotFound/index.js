import './PageNotFound.css'


function PageNotFound(props){
    let t = props.t;
  return(
    <div className='bg-purple' style={{textAlign: "center"}}>  
        <div className="stars">
            <div className="central-body">
                <h1 style={{fontSize: 148, fontWeight: 700}}>404</h1>
                <h1>{t('404Title')}</h1>
                <a href="/" className="btn-go-home" target="_blank">{t('404GoBack')}</a>
            </div>
            <div className="objects">
                <img className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px" alt='cohete'/>
                <div className="earth-moon">
                    <img className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px" alt='La Tierra'/>
                    <img className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px" alt='La Luna'/>
                </div>
                <div className="box_astronaut">
                    <img className="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px" alt='Astronauta'/>
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