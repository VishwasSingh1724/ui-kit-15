import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus } from '@react-three/drei';

const Scene3D = () => {
  return (
    <Canvas style={{ height: '400px', width: '100%' }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        {/* A rotating torus */}
        <Torus position={[-2, 0, 0]} args={[1, 0.4, 16, 100]} rotation={[0, 0.5, 0]}>
          <meshStandardMaterial color="lightgreen" />
        </Torus>

        {/* A sphere */}
        <Sphere position={[0, 0, 0]} args={[1, 32, 32]}>
          <meshStandardMaterial color="lightblue" />
        </Sphere>

        {/* A simple box */}
        <Box position={[2, 0, 0]} args={[1, 1, 1]}>
          <meshStandardMaterial color="purple" />
        </Box>

        {/* Camera controls */}
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default Scene3D;
