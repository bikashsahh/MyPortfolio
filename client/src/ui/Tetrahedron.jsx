import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";

const Tetrahedron = ({ position, color, isAnimating }) => {
  const mesh = useRef();

  useFrame(() => {
    if (isAnimating && mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <tetrahedronGeometry args={[1]} />
      <MeshDistortMaterial color={color} attach="material" distort={0.1} speed={5} />
    </mesh>
  );
};

export default Tetrahedron;
