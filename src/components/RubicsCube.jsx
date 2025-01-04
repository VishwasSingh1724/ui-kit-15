import React,{ useRef, useEffect, useState } from 'react';
import {  Vector2 } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera , RoundedBox} from '@react-three/drei';
import { gsap } from 'gsap';

const glossyMaterial = {
  color: '#000000',
  metalness: 0.95,
  roughness: 0.05,
  reflectivity: 1.2,
  clearcoat: 1.2,
  clearcoatRoughness: 0.05,
  envMapIntensity: 3,
  ior: 2,
  transmission: 0.2,
  thickness: 0.5,
  specularIntensity: 1.5,
  specularColor: '#ffffff',
};

function CubePiece({ position }) {
    const meshRef = useRef(null);
  
    useEffect(() => {
      if (meshRef.current) {
        gsap.from(meshRef.current.position, {
          x: position[0] * 8,
          y: position[1] * 8,
          z: position[2] * 8,
          duration: 2.5,
          ease: 'elastic.out(1, 0.7)',
          delay: Math.random() * 0.5,
        });
  
        gsap.from(meshRef.current.rotation, {
          x: Math.random() * Math.PI * 4,
          y: Math.random() * Math.PI * 4,
          z: Math.random() * Math.PI * 4,
          duration: 2.5,
          ease: 'elastic.out(1, 0.7)',
          delay: Math.random() * 0.5,
        });
      }
    }, [position]);
  
    return (
      <RoundedBox
        ref={meshRef}
        position={position}
        args={[0.98, 0.98, 0.98]} // Width, height, depth
        radius={0.1} // Corner radius
        smoothness={4} // Number of subdivisions for smoothing
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial {...glossyMaterial} />
      </RoundedBox>
    );
  }


function RubiksCubeGroup() {
  const groupRef = useRef(null);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const initialPositions = [];
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          initialPositions.push([x, y, z]);
        }
      }
    }
    setPositions(initialPositions);
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.65;
      groupRef.current.rotation.x = Math.sin(Date.now() * 0.0004) * 0.45;
    }
  });

  return (
    <group ref={groupRef}>
      {positions.map((position, index) => (
        <CubePiece key={index} position={position} />
      ))}
    </group>
  );
}


  

function EnhancedLighting() {
  return (
    <>
      <ambientLight intensity={0.12} />
      
      {/* Key light */}
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1.2}
        castShadow
        shadow-mapSize={new Vector2(2048, 2048)}
        shadow-bias={-0.0001}
      />
      
      {/* Fill light */}
      <pointLight 
        position={[-5, -5, -5]} 
        intensity={0.4} 
        color="#b0c4de"
      />
      
      {/* Rim light */}
      <spotLight
        position={[5, 5, -5]}
        angle={0.2}
        penumbra={1}
        intensity={1.2}
        color="#ffffff"
        castShadow
        shadow-bias={-0.0001}
      />
      
      {/* Ground reflection */}
      <pointLight 
        position={[0, -5, 0]} 
        intensity={0.15} 
        color="#ffffff"
      />
    </>
  );
}

export default function RubiksCubeScene() {
  return (
    <div style={{width:'100vw',height:'100vh'}}>
      <Canvas shadows dpr={[1, 2]}>
        {/* <color attach="background" args={['#000000']} /> */}
        <PerspectiveCamera 
          makeDefault 
          position={[4, 4, 4]} 
          fov={60}
          near={0.1}
          far={1000}
        />
        
        <EnhancedLighting />
        <RubiksCubeGroup />
        
        <Environment 
          preset="night"
          background={false}
          blur={0.6}
          resolution={512}
        />
        
        <OrbitControls 
          enableZoom={false}
          maxDistance={12}
          minDistance={4}
          autoRotate
          autoRotateSpeed={0.2}
          enableDamping
          dampingFactor={0.05}
          maxPolarAngle={Math.PI }
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}