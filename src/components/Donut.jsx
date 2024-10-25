import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Torus, Stars, OrbitControls } from '@react-three/drei';

const RotatingTorus = () => {
  const torusRef = useRef();

  useFrame(() => {
    if (torusRef.current) {
      torusRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Torus ref={torusRef} position={[0, 0, 0]} args={[3, 0.5, 16, 100]}>
      <meshStandardMaterial color="royalblue" />
    </Torus>
  );
};

const Donut = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Spinning Torus */}
      <RotatingTorus />

      {/* Floating Particles */}
      <Stars radius={20} depth={50} count={1000} factor={4} />

      {/* Camera Controls */}
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
    </Canvas>
  );
};

export default Donut;
