import { useRef } from 'react';
import { Sphere, useTexture, OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const RotatingEarth = () => {
  const earthRef = useRef();
  const earthTexture = useTexture('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg');

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }
  });

  return (
    <>
      <Sphere ref={earthRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial map={earthTexture} />
      </Sphere>
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
    </>
  );
};

export default RotatingEarth;
