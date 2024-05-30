import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import NET from "vanta/dist/vanta.net.min";




const Box = styled.div`
  width: 100%;
  height: 100vh; // Ensuring it covers the full viewport height
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
        //   mouseControls: true,
        //   touchControls: true,
        //   gyroControls: false,
        //   minHeight: 200.00,
        //   minWidth: 200.00,
        //   scale: 1.00,
        //   scaleMobile: 1.00,
        //   color: 0xcbef5,
        //   backgroundColor: 0x121114,
        //   points: 7.00,
        //   maxDistance: 30.00,
        //   spacing: 16.00
        // el: "#your-element-selector",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x460746,
  backgroundColor: 0x121114,
  points: 11.00,
  maxDistance: 31.00,
  spacing: 16.00
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
