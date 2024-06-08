import React, { useState } from "react";
import styled from "styled-components";
import { NavBar } from "./component/NavBar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from "./component/Banner";
import Projects from "./component/Projects";
import About from "./component/About";
import Contact from "./component/Contact";
import Net from "./component/Net";
import Education from "./component/Education";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import StarBorderTwoToneIcon from '@mui/icons-material/StarBorderTwoTone';
import StarSprinkle from "./component/StarSprinkler";
import zIndex from "@mui/material/styles/zIndex";
import Birds from "./component/Birds";

// import { inject } from '@vercel/analytics';
// import Birds from "./component/Birds";

// inject();

const Container = styled.div`
  height: 100vh;
  // scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  color: white;
  scrollbar-width: none;
  position: relative;
  z-index: 1;
  transform-style: preserve-3d;
  background: ${(props) => props.background}; /* Apply background from props */
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  
`;

const AnimatedBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.1),
    transparent
  ); /* Transparent gradient for animated effect */
  filter: blur(10px);
  animation: animateBackground 20s linear infinite;
  z-index: -4;
  @keyframes animateBackground {
    from {
      transform: translateX(-50%) translateY(-50%) rotate(0deg);
    }
    to {
      transform: translateX(-50%) translateY(-50%) rotate(360deg);
    }
  }
`;

const backgrounds = [
  "linear-gradient(45deg, #220a60, #171e50, #171e50, #220a60)", // Dark shades of violet and blue
  "linear-gradient(45deg, #6a11cb, #2575fc, #2575fc, #6a11cb)", // Shades of violet and blue
  "linear-gradient(45deg, #2e0935, #07071e, #07071e, #2e0935)", // Dark shades of violet and indigo
  "linear-gradient(45deg, #0b0f34, #012a7a, #012a7a, #0b0f34)", // Shades of navy blue
  "linear-gradient(45deg, #4b0082, #0e4b83, #0e4b83, #4b0082)", // Indigo shades
  "linear-gradient(45deg, #ff5733, #ffcc00, #ffcc00, #ff5733)", // Orange shades
  "linear-gradient(45deg, #ff5733, #b22222, #b22222, #ff5733)", // Red shades
  // "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)"
];

const ToggleButton = styled(Button)`
  && {
    position: fixed;
    bottom: 20px;
    right: 20px;
    color: white;
    border-radius: 70%;
    width: 60px;
    height: 60px;
    font-size: 20px;
    cursor: pointer;
    z-index: 10000000;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: spin 2s infinite linear;
    background-color:green;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

function App() {
  const [backgroundIndex, setBackgroundIndex] = useState(2);

  const toggleBackground = () => {
    setBackgroundIndex(
      (prevIndex) => (prevIndex = (prevIndex + 1) % backgrounds.length)
    );
  };

  const currentBackground = backgrounds[backgroundIndex];

  return (
    <Container background={currentBackground} className="App">
      <Background>
        <AnimatedBackground />
      </Background>
      <div style={{ zIndex: 1 }}>
        <NavBar />
        <Banner />
        <About />
        <Projects />
        <Education />
        <Birds>
          <Contact />
        </Birds>
      </div>
      <StarSprinkle>
        <ToggleButton onClick={toggleBackground}>
          <StarBorderTwoToneIcon sx={{zIndex : 1000000000}}/>
        </ToggleButton>
      </StarSprinkle>
    </Container>
  );
}

export default App;
