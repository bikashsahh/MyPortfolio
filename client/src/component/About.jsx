import { useTheme, useMediaQuery } from "@mui/material";
import styled from "styled-components";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import Introduction from "./Introduction";
import Square from "./Square";

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
    // margin-top: 50px;
    // padding: 0 10px;
  }
`;

const Title = styled.h1`
  font-size: 54px;
  margin: 0;
  @media only screen and (max-width: 768px) {
    font-size: 40px;
    width: 100%;
    text-align: center;
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
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // height: 100vh;
  scroll-snap-align: center;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    // padding: 100px 0;
  }
`;

const Section = styled.div`
  display: flex;
  // justify-content: space-between;
  align-items: center;
  flex-direction: column;
  // height: 100vh;
  scroll-snap-align: center;
  @media only screen and (max-width: 768px) {
    height: auto;
  }
`;

const Left = styled.div`
  flex: 1;
  height: 100vh;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Description = styled.p`
  margin: 0;
  color: lightgray;
  font-size: 1.2em;
  @media only screen and (max-width: 768px) {
    font-size: 1em;
  }
`;

const BackgroundCanvas = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  @media only screen and (min-width: 769px) {
    display: none;
  }
`;

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Section id="about">
      <Container>
        {!isMobile && (
          <Left>
            <Canvas>
              <Suspense fallback={null}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[4, 1, 1]} />
                <Square position={[-1.5, 0, 0]} color="#2596be" isAnimating={!isMobile} />
                <Square position={[1.5, 0, 0]} color="#da4ea2" isAnimating={!isMobile} />
                <Square position={[0, 1, -1]} color="#D0E512"  isAnimating={!isMobile}/>
              </Suspense>
            </Canvas>
          </Left>
        )}
        {isMobile && (
          <BackgroundCanvas>
            <Canvas>
              <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[4, 1, 1]} />
                <Square position={[-0.5, 1, 1]} color="#2596be"  isAnimating={isMobile}/>
                <Square position={[0.5, -.1, .5]} color="#da4ea2"  isAnimating={isMobile}/>
                <Square position={[1, 2, -.7]} color="#D0E512"  isAnimating={isMobile}/>
              </Suspense>
            </Canvas>
          </BackgroundCanvas>
        )}
        <Right>
          <Title>About Me</Title>
          <Abouting>
            <HorizontalRuleIcon fontSize="large" />
            <Subtitle>My Introduction</Subtitle>
          </Abouting>
          <Description>
            <Introduction />
          </Description>
        </Right>
      </Container>
    </Section>
  );
};

export default About;