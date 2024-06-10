import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const ParametricSurface = ({ position, color, isAnimating }) => {
  const mesh = useRef();

  useFrame(() => {
    if (isAnimating && mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  const parametricFunction = (u, v, target) => {
    const x = Math.sin(u) * Math.cos(v);
    const y = Math.sin(u) * Math.sin(v);
    const z = Math.cos(u);
    target.set(x, y, z);
  };

  const geometry = new THREE.ParametricGeometry(parametricFunction, 50, 50);

  return (
    <mesh ref={mesh} position={position} geometry={geometry}>
      <MeshDistortMaterial color={color} attach="material" distort={0.1} speed={5} />
    </mesh>
  );
};

export default ParametricSurface;
