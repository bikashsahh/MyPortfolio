import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const Wave = ({ position, color, isAnimating }) => {
  const mesh = useRef();

  useFrame(() => {
    if (isAnimating && mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  // Create custom wave geometry
  const createWaveGeometry = () => {
    const geometry = new THREE.PlaneGeometry(2, 2, 32, 32);
    const vertices = geometry.attributes.position.array;

    for (let i = 0; i < vertices.length; i += 3) {
      vertices[i + 2] = Math.sin(vertices[i] * 2) * Math.cos(vertices[i + 1] * 2);
    }

    return geometry;
  };

  const geometry = createWaveGeometry();

  return (
    <mesh ref={mesh} position={position} geometry={geometry}>
      <MeshDistortMaterial color={color} attach="material" distort={0.1} speed={5} />
    </mesh>
  );
};

export default Wave;
