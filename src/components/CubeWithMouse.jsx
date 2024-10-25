import React,{ useState, useEffect, useRef } from 'react';
import { Box, OrbitControls } from '@react-three/drei';
import { useFrame, Canvas } from '@react-three/fiber';

const InteractiveCube = () => {
  const [position, setPosition] = useState([0, 0, 0]);
  const cubeRef = useRef();

  const updatePosition = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = -(clientY / window.innerHeight) * 2 + 1;
    setPosition([x * 5, y * 5, 0]);
  };

  useEffect(() => {
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Box ref={cubeRef} position={position} args={[1, 1, 1]}>
      <meshPhongMaterial color="orange" />
    </Box>
  );
};

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <InteractiveCube />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Scene;
