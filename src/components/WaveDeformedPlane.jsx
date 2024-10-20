import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Plane } from '@react-three/drei';
import { MathUtils, BufferAttribute } from 'three';

const WaveDeformedPlane = () => {
  const planeRef = useRef();
  const timeRef = useRef(0);

  const vertices = useMemo(() => {
    return new Float32Array(101 * 101 * 3);
  }, []);

  useFrame(() => {
    timeRef.current += 0.05;

    const positions = planeRef.current.geometry.attributes.position.array;

    for (let i = 0; i < positions.length; i += 3) {
      const x = (i % (101 * 3)) / 3 - 50;
      const z = Math.floor(i / (101 * 3)) - 50;
      positions[i + 1] = Math.sin(MathUtils.degToRad(x + timeRef.current)) * 
                         Math.cos(MathUtils.degToRad(z + timeRef.current)) * 2;
    }

    planeRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Plane 
      ref={planeRef} 
      args={[10, 10, 100, 100]} 
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <meshPhongMaterial color="lightblue" side={2} />
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={101 * 101}
          array={vertices}
          itemSize={3}
        />
      </bufferGeometry>
    </Plane>
  );
};

export default WaveDeformedPlane;
