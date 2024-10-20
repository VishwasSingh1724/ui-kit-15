import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, useTexture, OrbitControls } from '@react-three/drei';

const Earth = () => {
  const earthRef = useRef();
  const earthTexture = useTexture('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg');

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Sphere ref={earthRef} args={[1.5, 64, 64]}>
      <meshStandardMaterial map={earthTexture} />
    </Sphere>
  );
};

const RotatingEarth = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <Earth />
      <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} />
    </Canvas>
  );
};

export default RotatingEarth;
