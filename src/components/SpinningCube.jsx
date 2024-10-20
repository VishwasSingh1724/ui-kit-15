import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const SpinningCube = ({ size = 1, color = 'hotpink', speed = 0.01 }) => {
  // A simple cube that spins continuously
  const Cube = () => {
    const cubeRef = useRef();
    
    useFrame(() => {
      if (cubeRef.current) {
        cubeRef.current.rotation.x += speed;
        cubeRef.current.rotation.y += speed;
      }
    });

    return (
      <mesh ref={cubeRef}>
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial color={color} />
      </mesh>
    );
  };

  return (
    <Canvas camera={{ position: [3, 3, 3] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <Cube />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default SpinningCube;
