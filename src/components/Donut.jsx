import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Torus, Stars, OrbitControls } from '@react-three/drei';

const SpinningDonut = () => {
  const torusRef = useRef();

  useFrame(() => {
    if (torusRef.current) {
      torusRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <group>
        {/* Spinning Torus */}
        <Torus ref={torusRef} position={[0, 0, 0]} args={[3, 0.5, 16, 100]}>
          <meshStandardMaterial color="royalblue" />
        </Torus>

        {/* Floating Particles */}
        <Stars radius={20} depth={50} count={1000} factor={4} />
      </group>
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
    </Canvas>
  );
};

export default SpinningDonut;
