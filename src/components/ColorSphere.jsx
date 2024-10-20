import React,{ useRef, useState, useEffect } from 'react';
import { Sphere, OrbitControls } from '@react-three/drei';
import { useFrame, Canvas } from '@react-three/fiber';

const ColorChangingSphere = () => {
  const sphereRef = useRef();
  const [color, setColor] = useState('red');
  const [rotationSpeed, setRotationSpeed] = useState(0.01);

  useEffect(() => {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'];
    const interval = setInterval(() => {
      setColor(colors[Math.floor(Math.random() * colors.length)]);
      setRotationSpeed(Math.random() * 0.05 + 0.01);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += rotationSpeed;
      sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
      <meshPhongMaterial color={color} shininess={100} />
    </Sphere>
  );
};

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <ColorChangingSphere />
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
    </Canvas>
  );
};

export default Scene;
