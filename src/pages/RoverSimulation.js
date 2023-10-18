import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function RoverSimulation(){
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/Build.loader.js",
    dataUrl: "Build/Build.data",
    frameworkUrl: "Build/Build.framework.js",
    codeUrl: "Build/Build.wasm",
  });


  return(
    <div style={{textAlign: "center"}}>
      <h1>Rover Simulation</h1>
      <Unity unityProvider={unityProvider} style={{width: 1080}}/>
    </div>
  )
}

export default RoverSimulation;