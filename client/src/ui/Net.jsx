import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import NET from "vanta/dist/vanta.net.min";

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  @media only screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
  }
`;

const Net = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
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
          backgroundAlpha: 0, //background now inherit, transparent background
          points: window.innerWidth < 768 ? 7.0 : 11.0,
          maxDistance: window.innerWidth < 768 ? 27.0 : 31.0,
          spacing: window.innerWidth < 768 ? 19.0 : 16.0,
        })
      );
    }
  };
  handleResize(); // Call the resize function on mount
  window.addEventListener("resize", handleResize);

    return () => {
      if (vantaEffect) vantaEffect.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, [vantaEffect]);

  return <Box ref={myRef}>{children}</Box>;
};

export default Net;
