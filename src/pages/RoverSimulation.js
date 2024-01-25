import { Unity, useUnityContext } from "react-unity-webgl";

function RoverSimulation(){
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/Build.loader.js",
    dataUrl: "Build/Build.data",
    frameworkUrl: "Build/Build.framework.js",
    codeUrl: "Build/Build.wasm",
  });

  if(window.screen.width < 1280) {
    return (
        <div style={{textAlign: 'center', fontWeight: 700, fontSize: '48px'}}>Try the simulation on a Laptop or Desktop Computer</div>
    )
    }
    else{
      return (
        <div style={{textAlign: 'center'}}>
          <h1>Rover Simulation</h1>
          <Unity unityProvider={unityProvider} style={{width: 1080}}/>
        </div>
      )
    }
}

export default RoverSimulation;