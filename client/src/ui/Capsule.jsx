import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const Capsule = ({ position, color, isAnimating }) => {
  const mesh = useRef();

  useFrame(() => {
    if (isAnimating && mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  // Create capsule geometry
  const createCapsuleGeometry = (radius, length, segments) => {
    const capsuleGeometry = new THREE.CapsuleGeometry(radius, length, segments, segments);
    return capsuleGeometry;
  };

  const geometry = createCapsuleGeometry(0.5, 2, 32);

  return (
    <mesh ref={mesh} position={position} geometry={geometry}>
      <MeshDistortMaterial color={color} attach="material" distort={0.1} speed={5} />
    </mesh>
  );
};

export default Capsule;
