import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import NET from "vanta/dist/vanta.net.min";

const Box = styled.div`
  // z-index: -1;
  width: 100%;
  height: 100%; // Ensuring it covers the full viewport height
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #121114; // Matching the background color
  @media only screen and (max-width: 768px) {
    height: 100vh;
    width: 100%;
  }
`;

const Net = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x460746,
          backgroundColor: 0x121114,
          points: 11.0,
          maxDistance: 31.0,
          spacing: 16.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <Box ref={myRef}>{children}</Box>;
};

export default Net;
