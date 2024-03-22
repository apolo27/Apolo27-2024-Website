import './DataDashboardRover.css'
import React from 'react'
import { Canvas } from "@react-three/fiber";
import {Environment, useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props) {
    const { scene } = useGLTF("./rover.glb");
    return <primitive object={scene} {...props} />;
  }
  

function Rover() {
  return (
      <Canvas
          spr={[1, 2]}
          camera={{ fov: 70 }}
          style={{height: 625}}  
      >
          <Environment preset='night'/>
          <PresentationControls
          speed={1.5}
          zoom={2}
          polar={[-0.1, Math.PI / 4]}
          >
          <Stage shadows={false}>
              <Model scale={1} />
          </Stage>
          </PresentationControls>
          
      </Canvas>
  )
}

export default Rover