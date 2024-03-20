import React from 'react'
import { Canvas } from "@react-three/fiber";
import {Environment, useGLTF, Stage, PresentationControls } from "@react-three/drei";

    
function Model(props) {
    const { scene } = useGLTF("./rover.glb");
    return <primitive object={scene} {...props} />;
  }
  

function Rover() {
  return (
    <div>
        <Canvas
            shadows={false}
            spr={[1, 2]}
            camera={{ fov: 45 }}
            style={{position: 'relative', height: 500, paddingTop: 100}}  
        >
            <Environment preset='night'/>
            <PresentationControls
            speed={1.5}
            zoom={0.5}
            polar={[-0.1, Math.PI / 4]}
            >
            <Stage shadows={false}>
                <Model scale={1} />
            </Stage>
            </PresentationControls>
            
        </Canvas>
    </div>
  )
}

export default Rover