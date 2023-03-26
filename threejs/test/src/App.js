'use client';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';

function Soda(props){
  const {scene} = useGLTF("/assets/lemonLime.gltf");
  return <primitive object={scene} {...props}/>
}

function App() {
  return (
    <div className="App">
      <Canvas>
        <color attach="background" args={"black"}/>
        <PresentationControls>
          <Stage>
            <Soda scale="0.5" />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
}

export default App;