import { Unity, useUnityContext } from "react-unity-webgl";

function RoverSimulation(props){
  const t = props.t;
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/Build.loader.js",
    dataUrl: "Build/Build.data",
    frameworkUrl: "Build/Build.framework.js",
    codeUrl: "Build/Build.wasm",
  });

  if(window.screen.width < 1280) {
    return (
      <div className="stars">      
      <h1>{t('SimulationWarning')}</h1>
      <div className="objects">
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
    )
    }
    else{
      return (
        <div style={{textAlign: 'center'}}>
          <h1>Rover Simulation</h1>
          <Unity unityProvider={unityProvider} style={{width: 'calc(100% - 300px)'}}/>
        </div>
      )
    }
}

export default RoverSimulation;