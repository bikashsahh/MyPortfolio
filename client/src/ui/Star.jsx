import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const Star = ({ position, color, isAnimating }) => {
  const mesh = useRef();

  // useFrame hook to animate the star only if isAnimating is true
  useFrame(() => {
    if (isAnimating && mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  // Function to create a star shape
  const createStarShape = () => {
    const shape = new THREE.Shape();
    const outerRadius = 1;
    const innerRadius = 0.3;
    const numPoints = 5;

    for (let i = 0; i < numPoints * 2; i++) {
      const angle = (i / (numPoints * 2)) * Math.PI * 2;
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      if (i === 0) {
        shape.moveTo(x, y);
      } else {
        shape.lineTo(x, y);
      }
    }

    shape.closePath();
    return shape;
  };

  const starShape = createStarShape();
  const extrudeSettings = { depth: 0.2, bevelEnabled: true, bevelThickness: 0.1, bevelSize: 0.05, bevelSegments: 1 };
  const geometry = new THREE.ExtrudeGeometry(starShape, extrudeSettings);

  return (
    <mesh ref={mesh} position={position} geometry={geometry}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0}
        speed={10}
      />
    </mesh>
  );
};

export default Star;
