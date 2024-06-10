import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const TorusKnot = ({ position, color, isAnimating }) => {
  const mesh = useRef();

  useFrame(() => {
    if (isAnimating && mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <torusKnotGeometry args={[1, 0.4, 100, 16]} />
      <MeshDistortMaterial color={color} attach="material" distort={0.1} speed={5} />
    </mesh>
  );
};

export default TorusKnot;
