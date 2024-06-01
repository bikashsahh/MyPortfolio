import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";

const Square = ({ position, color, isAnimating }) => {
  const mesh = useRef();

  // useFrame hook to animate the square only if isAnimating is true
  useFrame(() => {
    if (isAnimating && mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0}
        speed={10}
      />
    </mesh>
  );
};

export default Square;