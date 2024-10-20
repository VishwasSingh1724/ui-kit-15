import { useRef } from '@react-three/fiber';
import { Torus, Stars, useFrame, OrbitControls } from '@react-three/drei';

const SpinningDonut = () => {
  const torusRef = useRef();

  useFrame(() => {
    if (torusRef.current) {
      torusRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <group>
        {/* Spinning Torus */}
        <Torus ref={torusRef} position={[0, 0, 0]} args={[3, 0.5, 16, 100]}>
          <meshStandardMaterial color="royalblue" />
        </Torus>

        {/* Floating Particles */}
        <Stars radius={20} depth={50} count={1000} factor={4} />
      </group>
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
    </>
  );
};

export default SpinningDonut;
