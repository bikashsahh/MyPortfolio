import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import BIRDS from "vanta/dist/vanta.birds.min";

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  @media only screen and (max-width: 768px) {
    height: 100vh;
    width: 100%;
  }
`;

const Birds = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          backgroundAlpha: 0, //background now inherit, transparent background
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <Box ref={myRef}>{children}</Box>;
};

export default Birds;
