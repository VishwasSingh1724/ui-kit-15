import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sphere, Physics, usePlane, useSphere } from '@react-three/cannon';
import { OrbitControls } from '@react-three/drei';

const colors = ['hotpink', 'cyan', 'lime', 'orange', 'purple'];

const BouncingBall = ({ color }) => {
  const [ref] = useSphere(() => ({
    mass: 1,
    position: [Math.random() * 10 - 5, 5 + Math.random() * 5, Math.random() * 10 - 5],
    args: [0.5],
  }));

  return (
    <Sphere ref={ref} args={[0.5]}>
      <meshStandardMaterial color={color} />
    </Sphere>
  );
};

const Floor = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -5, 0],
  }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#cccccc" />
    </mesh>
  );
};

const BouncingBallsScene = () => {
  return (
    <Canvas camera={{ position: [0, 5, 15] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <Physics gravity={[0, -9.81, 0]}>
        <Floor />
        {colors.map((color, index) => (
          <BouncingBall key={index} color={color} />
        ))}
      </Physics>
      <OrbitControls />
    </Canvas>
  );
};

export default BouncingBallsScene;
