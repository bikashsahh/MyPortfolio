import {
  useTheme,
} from "@mui/material";
import cvFile from "../assets/file/cv.pdf";
import styled from "styled-components";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import Introduction from "./Introduction";
import Skills from "./Skills";

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* gap: 20px; */
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;
const Title = styled.h1`
  font-size: 54px;
  margin: 0;
  @media only screen and (max-width: 768px) {
    font-size: 40px;
    width: 300px;
    display: flex;
    flex-wrap: wrap;
  }
`;
const Subtitle = styled.h2`
  color: #da4ea2;
`;
const Abouting = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh; /* corrected from height : 100vh, */
  scroll-snap-align: center;
`;
const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100vh; /* corrected from height : 100vh, */
  scroll-snap-align: center;
  @media only screen and (max-width: 768px) {
    height: 60vh;
  }
`;

const Left = styled.div`
  flex: 1;
  height: 100vh;
  /* gap: 10px; */
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Description = styled.p`
  /* font-size: 24px; */
  margin: 0;
  color: lightgray;
`;
const Square = ({ position, color }) => {
  const mesh = useRef();

  // useFrame hook to animate the square
  useFrame(() => {
    if (mesh.current) {
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


const About = () => {
  const theme = useTheme();

  const handleDownloadCV = () => {
    window.open(cvFile, "_blank");
  };

  return (
    <Section id="about">
      <Container>
        <Left>
          {/* 3d model */}
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[4, 1, 1]} />
              {/* First Square */}
              <Square position={[-1.5, 0, 0]} color="#3d1c56" />
              {/* Second Square */}
              <Square position={[1.5, 0, 0]} color="#da4ea2" />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>About Me</Title>
          <Abouting>
            <HorizontalRuleIcon fontSize="large" />
            <Subtitle>My Introduction</Subtitle>
          </Abouting>
            <Description>
                <Introduction></Introduction>
            </Description>
        </Right>
      </Container>
    </Section>
  );
};

export default About;
